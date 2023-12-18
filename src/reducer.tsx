export const reducer = (
  states: ReducerStates,
  action: ReducerActions
): ReducerStates => {
  switch (action.type) {
    case "addToCart":
      // reset cart
      if (action.payload === null) {
        return { ...states, cart: null };
      }

      // add first product
      if (!states.cart) {
        return { ...states, cart: [action.payload] };
      }

      // change product qty if already exists in the cart
      if (
        states.cart.find(
          ({ product }) => product.id === action.payload?.product.id
        )
      ) {
        const index = states.cart.findIndex(
          ({ product }) => product.id === action.payload?.product.id
        );
        const tmp = states.cart;
        console.log(states.cart[index].qty, action.payload.qty);
        tmp[index] = {
          product: states.cart[index].product,
          qty: states.cart[index].qty + action.payload.qty,
        };

        return { ...states, cart: tmp };
      }

      // add another product
      return { ...states, cart: [...states.cart, action.payload] };
    case "removeFromCart":
      if (states.cart) {
        return {
          ...states,
          cart: states.cart.filter(
            (elem) => elem.product.id !== action.productID
          ),
        };
      } else {
        return { ...states };
      }
    default:
      throw new Error("Unknown reducer action type");
  }
};

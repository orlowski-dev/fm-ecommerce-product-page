export const reducer = (
  states: ReducerStates,
  action: ReducerActions
): ReducerStates => {
  switch (action.type) {
    case "addToCart":
      if (action.payload === null) {
        return { ...states, cart: null };
      }
      if (!states.cart) {
        return { ...states, cart: [action.payload] };
      }
      return { ...states, cart: [...states.cart, action.payload] };
  }
};

import "./ShoppingCart.scss";
import { IconButton } from "./buttons";

const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <IconButton aria-description="Shopping cart">
        <img src="/assets/images/icon-cart.svg" alt="shopping cart icon" />
      </IconButton>
    </div>
  );
};

export default ShoppingCart;

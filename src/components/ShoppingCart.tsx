import { useContext, useState } from "react";
import "./ShoppingCart.scss";
import { Button, IconButton } from "./buttons";
import { CartContext } from "../contexts";
import { motion } from "framer-motion";

const countProductsInCart = (
  products: { product: Product; qty: number }[] | null | undefined
): number => {
  if (!products) return 0;

  let count = 0;
  products.forEach((elem) => (count += elem.qty));
  return count;
};

const getActualProductPrice = (product: Product): number => {
  if (!product.onSale) return product.price;
  return product.price - product.price * product.saleValue;
};

const variants = {
  open: {
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const ShoppingCart = () => {
  const cartContext = useContext(CartContext);
  const productsInCart = countProductsInCart(cartContext?.cart);
  const [open, setOpen] = useState(false);
  console.log(cartContext?.cart);
  return (
    <div className="shopping-cart">
      <IconButton
        aria-description="Shopping cart"
        description="Shopping cart"
        onClick={() => setOpen((prev) => !prev)}
      >
        <img src="/assets/images/icon-cart.svg" alt="shopping cart icon" />
        {productsInCart > 0 && <span className="badge">{productsInCart}</span>}
      </IconButton>
      <motion.section
        animate={open ? "open" : "closed"}
        initial={{ display: "none" }}
        variants={variants}
        className="product-list"
      >
        <header>
          <h2>Cart</h2>
        </header>
        {cartContext?.cart && cartContext?.cart.length > 0 ? (
          <div className="list">
            <ul>
              {cartContext.cart.map(({ product, qty }, index: number) => {
                const price = getActualProductPrice(product);
                return (
                  <li key={index} className="cart-product">
                    <div>
                      <img
                        src={product.thumbnails[0]}
                        alt={`product ${product.id}`}
                      />
                    </div>
                    <div>
                      <h3>{product.name}</h3>
                      {qty === 1 && <p>${price.toFixed(2)}</p>}
                      {qty > 1 && (
                        <p>
                          ${price.toFixed(2)} x {qty}{" "}
                          <span>${(price * qty).toFixed(2)}</span>
                        </p>
                      )}
                    </div>
                    <div>
                      <IconButton
                        description="remove product from cart"
                        onClick={() =>
                          cartContext.setCart({
                            type: "removeFromCart",
                            productID: product.id,
                          })
                        }
                      >
                        <img
                          src="/assets/images/icon-delete.svg"
                          alt="delete icon"
                        />
                      </IconButton>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Button>Checkout</Button>
          </div>
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </motion.section>
    </div>
  );
};

export default ShoppingCart;

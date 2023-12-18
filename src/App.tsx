import { useReducer } from "react";
import "./App.scss";
import AppHeader from "./components/AppHeader";
import ProductSection from "./components/ProductSection";
import { default as products } from "./data/products.json";
import { CartContext } from "./contexts";
import { reducer } from "./reducer";

const App = () => {
  const product = products[0];
  const [states, dispatch] = useReducer(reducer, {
    cart: null,
  });

  return (
    <CartContext.Provider value={{ cart: states.cart, setCart: dispatch }}>
      <AppHeader />
      <main>
        <ProductSection product={product} />
      </main>
    </CartContext.Provider>
  );
};

export default App;

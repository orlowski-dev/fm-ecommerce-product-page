import "./App.scss";
import AppHeader from "./components/AppHeader";
import ProductSection from "./components/ProductSection";
import { default as product1 } from "./data/details.json";

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <ProductSection {...product1} />
      </main>
    </>
  );
};

export default App;

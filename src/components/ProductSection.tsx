import { useCallback, useContext, useState } from "react";
import AddToCartSection from "./AddToCartSection";
import Lightbox from "./Lightbox";
import "./ProductSection.scss";
import Slider from "./Slider";
import { CartContext } from "../contexts";

const ProductSection = ({ product }: { product: Product }) => {
  const cartContext = useContext(CartContext);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const closeLightboxCallback = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const addToCartCallback = useCallback(
    (qty: number) => {
      cartContext?.setCart({ type: "addToCart", payload: { product, qty } });
    },
    [cartContext, product]
  );

  return (
    <section className="product-section">
      <div className="images">
        <Slider
          images={product.images}
          thumbnails={product.thumbnails}
          onClick={() => setLightboxOpen(true)}
        />
        {lightboxOpen && (
          <Lightbox
            images={product.images}
            thumbnails={product.thumbnails}
            onClose={closeLightboxCallback}
          />
        )}
      </div>
      <div className="content">
        <p className="brand">{product.brand}</p>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        {product.onSale && (
          <div className="sale">
            <p className="price-on-sale">
              $
              {Number(
                product.price - product.price * product.saleValue
              ).toFixed(2)}
              <span>{product.saleValue * 100}%</span>
            </p>
            <p className="reg-price">${product.price.toFixed(2)}</p>
          </div>
        )}
        <AddToCartSection
          inStock={product.inStock}
          callback={addToCartCallback}
        />
      </div>
    </section>
  );
};

export default ProductSection;

import "./ProductSection.scss";
import Slider from "./Slider";

interface Props {
  name: string;
  description: string;
  brand: string;
  price: number;
  onSale: boolean;
  saleValue: number;
  images: string[];
  thumbnails: string[];
}

const ProductSection = (props: Props) => {
  return (
    <section className="product-section">
      <div className="images">
        <Slider images={props.images} thumbnails={props.thumbnails} />
      </div>
      <div className="content">
        <p className="brand">{props.brand}</p>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        {props.onSale && (
          <div className="sale">
            <p className="price-on-sale">
              ${Number(props.price - props.price * props.saleValue).toFixed(2)}
              <span>{props.saleValue * 100}%</span>
            </p>
            <p className="reg-price">${props.price.toFixed(2)}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;

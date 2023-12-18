import { useRef } from "react";
import { Button } from "./buttons";
import { QtyInput } from "./inputs";

const AddToCartSection = ({
  inStock,
  callback,
}: {
  inStock: number;
  callback: (qty: number) => void;
}) => {
  const QtyInpRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    callback(Number(QtyInpRef.current!.value));
  };

  return (
    <div className="add-to-cart-section">
      <form onSubmit={onFormSubmit}>
        <QtyInput inStock={inStock} ref={QtyInpRef} />
        <Button>
          <img src="/assets/images/icon-cart-white.svg" alt="cart icon" />
          Add to cart
        </Button>
      </form>
    </div>
  );
};

export default AddToCartSection;

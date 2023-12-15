import { Button } from "./buttons";
import { QtyInput } from "./inputs";

const AddToCartSection = ({ inStock }: { inStock: number }) => {
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="add-to-cart-section">
      <form onSubmit={onFormSubmit}>
        <QtyInput inStock={inStock} />
        <Button>
          <img src="/assets/images/icon-cart-white.svg" alt="cart icon" />
          Add to cart
        </Button>
      </form>
    </div>
  );
};

export default AddToCartSection;

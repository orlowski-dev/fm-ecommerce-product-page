import { forwardRef, useState } from "react";
import "./inputs.scss";

export const QtyInput = forwardRef(
  (
    props: React.HTMLAttributes<HTMLInputElement> & { inStock: number },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [inputValue, setInputValue] = useState(1);
    const { inStock, ...other } = props;
    return (
      <div className="qty-input">
        <span
          onClick={() => {
            if (inputValue > 1) {
              setInputValue((prev) => prev - 1);
            }
          }}
        >
          <img
            src="/assets/images/icon-minus.svg"
            alt="decrease icon"
            style={{ height: 4, width: 12 }}
          />
        </span>
        <input
          type="text"
          value={inputValue}
          name="qty"
          {...other}
          readOnly
          ref={ref}
        />
        <span
          onClick={() => {
            if (inputValue < inStock) {
              setInputValue((prev) => prev + 1);
            }
          }}
        >
          <img
            src="/assets/images/icon-plus.svg"
            alt="increase icon"
            style={{ height: 12, width: 12 }}
          />
        </span>
      </div>
    );
  }
);

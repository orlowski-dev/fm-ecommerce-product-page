import { useState } from "react";
import { IconButton } from "../buttons";
import "./inputs.scss";

export const QtyInput = (
  props: React.HTMLAttributes<HTMLInputElement> & { inStock: number }
) => {
  const [inputValue, setInputValue] = useState(1);
  const { inStock, ...other } = props;
  return (
    <div className="qty-input">
      <IconButton
        description="Decrease"
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
      </IconButton>
      <input type="text" value={inputValue} name="qty" {...other} readOnly />
      <IconButton
        description="Increase"
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
      </IconButton>
    </div>
  );
};

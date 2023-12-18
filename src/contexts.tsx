import { createContext } from "react";

export const CartContext = createContext<{
  cart: { product: Product; qty: number }[] | null;
  setCart: React.Dispatch<ReducerActions>;
} | null>(null);

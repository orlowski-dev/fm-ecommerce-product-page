/// <reference types="vite/client" />

interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  onSale: boolean;
  inStock: number;
  saleValue: number;
  images: string[];
  thumbnails: string[];
}

interface ReducerStates {
  cart: { product: Product; qty: number }[] | null;
}

type ReducerActions =
  | {
      type: "addToCart";
      payload: { product: Product; qty: number } | null;
    }
  | {
      type: "removeFromCart";
      productID: number;
    };

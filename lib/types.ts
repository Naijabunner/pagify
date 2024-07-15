import { StaticImageData } from "next/image";

// types.ts
export interface Product {
    src: string | StaticImageData;
    title: string;
    price: number;
  }
  export interface Category {
    category: string;
    products: Product[];
  }
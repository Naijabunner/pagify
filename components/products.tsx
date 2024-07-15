import Productsection from "./Productsection";
import React from "react";
import { Category, Product } from "@/lib/types";
interface ProductsProps{
    mainData: Category[]
}
const Products: React.FC<ProductsProps>= ({mainData}) => {
  return (
    <section className='products  mx-auto h-fit max-w-[63rem] px-5'>
       {mainData.map((product, productIndex) => (
<Productsection data={product.products} category={product.category} key={productIndex}/>
       ))}
      
    </section>
  );
};

export default Products;

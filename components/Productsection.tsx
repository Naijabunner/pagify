import Card from '@/ui/card';
import CardHeader from '@/ui/cardHeader';
import React from 'react';
import brown from '@/public/Images/brownBag.png';
import { Product } from '@/lib/types'; // Adjust the import path based on your project structure

interface ProductsectionProps{
  data:Product[],
  category:string
}
const Productsection: React.FC<ProductsectionProps> = ({data,category}) => {

  return (
    <div>
      <>
        <CardHeader category={category} />
      </>
      <div className="flex flex-wrap  justify-evenly gap-5">
        {data.map((catalouge, index) => (
          <Card
            key={index} // Adding key prop
            src={catalouge.src}
            title={catalouge.title}
            price={catalouge.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Productsection;

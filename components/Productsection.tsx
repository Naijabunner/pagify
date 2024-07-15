import Card from '@/ui/card';
import CardHeader from '@/ui/cardHeader';
import React from 'react';
import brown from '@/public/Images/brownBag.png';
import { Product } from '@/lib/types'; // Adjust the import path based on your project structure

const Productsection: React.FC = () => {
  const mockArr: Product[] = [
    {
      src: brown,
      title: 'Brown Travelling Bag',
      price: 450,
    },
    {
      src: brown,
      title: 'Brown Travelling Bag',
      price: 450,
    },
  ];

  return (
    <div>
      <>
        <CardHeader category={"What's new"} />
      </>
      <div className="flex flex-wrap sm:flex-nowrap justify-evenly md:gap-0 gap-5">
        {mockArr.map((catalouge, index) => (
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

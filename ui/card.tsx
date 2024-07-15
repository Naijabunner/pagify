import { Product } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface CardProps extends Product {}

const Card: React.FC<CardProps> = ({ src, title, price }) => {
  return (
    <div className="bg-orange-200 w-fit py-8 px-5 sm:py-8 md:p-20 rounded-md flex flex-col justify-between gap-5 items-center">
      <p className="">{title}</p>
      <Image src={src} alt={title} className="w-auto" />
      <button className="bg-orange-600 px-3 py-1 rounded-full">${price}</button>
    </div>
  );
};

export default Card;

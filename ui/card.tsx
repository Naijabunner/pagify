import { Product } from "@/lib/types";
import Image from "next/image";
import React from "react";
import clsx from 'clsx';

// Define the possible color keys
type Color = 'red' | 'blue' | 'green'| 'orange'| string;

interface CardProps extends Product {
  color: Color; // Ensure color is a part of Product or add it here
}

// Define the color classes with the keys typed
const colorClasses: Record<Color, { bg: string; text: string; button: string }> = {
  red: {
    bg: 'bg-red-200',
    text: 'text-red-800',
    button: 'bg-red-600'
  },
  blue: {
    bg: 'bg-blue-200',
    text: 'text-blue-800',
    button: 'bg-blue-600'
  },
  green: {
    bg: 'bg-green-200',
    text: 'text-green-800',
    button: 'bg-green-600'
  },
  orange: {
    bg: 'bg-orange-200',
    text: 'text-orange-800',
    button: 'bg-orange-600'
  },
};

const Card: React.FC<CardProps> = ({ src, title, price, color }) => {
  const classes = colorClasses[color]; // Use the color prop directly
  const bgClass = clsx(classes?.bg, 'w-fit', 'py-8', 'px-5', 'sm:py-8', 'md:p-20', 'rounded-md', 'flex', 'flex-col', 'justify-between', 'gap-5', 'items-center');
  const textClass = clsx('font-bold', classes?.text);
  const buttonClass = clsx('font-bold', classes?.button, 'px-3', 'py-1', 'rounded-full');

  return (
    <div className={bgClass}>
      <p className={textClass}>{title}</p>
      <Image src={src} alt={title} className="w-52 md:w-32" />
      <button className={buttonClass}>${price}</button>
    </div>
  );
};

export default Card;

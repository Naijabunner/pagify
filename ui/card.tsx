import Image from "next/image";
import React from "react";
import brown from "@/public/Images/brownBag.png";
function Card() {
  return (
    <div className=' bg-orange-200 w-fit p-10 sm:p-10 md:p-20  rounded-md flex flex-col justify-between gap-5 items-center'>
      <p>Brown Travelling Bag</p>
      <Image src={brown} alt='' className='w-auto' />
      <button className=' bg-orange-600 px-3 py-1 rounded-full'>$450</button>
    </div>
  );
}

export default Card;

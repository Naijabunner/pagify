import { Product } from "@/lib/types";
import React from "react";
interface HeaderProps {
  category?:string | null
}

const CardHeader:React.FC<HeaderProps>=({ category}) =>{
  return (
    <div className='relative overflow-hidden my-5 capitalize'>
      <p className=' text-8xl font-bold text-slate-500 opacity-15  md:text-9xl w-[70rem] capital'>
        {" "}
        {category}
      </p>
      <p className='absolute font-bold text-blue-950 top-[50%] 0 left-10'>
        {category}
      </p>
      <p className='hidden sm:block absolute font-bold text-blue-950 top-[50%] right-10'>
        Whole Section
      </p>
    </div>
  );
}

export default CardHeader;

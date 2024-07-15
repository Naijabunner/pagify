import React from 'react'
import { FaUser } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
export default function Navbar() {
  return (
    <nav className=' main_nav w-[85%]  absolute z-50 mt-5 py-5'>
           <div className=" flex  justify-evenly items-center">
            <h1 className=' text-4xl'>
                Pagify
            </h1>
            <ul className='flex gap-10 text-lg'>
                <li>
                    Goods
                </li>
                <li>
                    Rooms
                </li>
                <li>
                    Inspiration
                </li>
            </ul>

            <div className="icon_cart flex items-center gap-4 text-xl">
                <p>
                <FaUser />
                </p>
                <p>
                <CiShoppingCart className=' text-2xl' />
                </p>
            </div>
            </div> 
        </nav>
  )
}

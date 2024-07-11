import React from "react";

function Footer() {
  return (
    <footer className=' bg-slate-100 pt-10 pb-5'>
      <ul className='flex flex-wrap justify-evenly gap-5 text-slate-500 font-medium'>
        <li>Home</li>
        <li>Service</li>
        <li>Customer Service</li>
        <li>Store Policies</li>
        <li>Returns & Exchanges</li>
        <li>About</li>
        <li>Reviews</li>
        <li>Contact Us</li>
      </ul>
      <div className=' flex justify-center gap-10 items-center my-5'>
        <p
          className='text-5xl sm:text-6xl md:8xl
            '
        >
          PAGIFY
        </p>
        <p>12 Water St. Vacouver, BC V6B 132 United States</p>
      </div>
      <ul className='flex flex-wrap justify-evenly gap-5 text-slate-500 font-medium'>
        <li>2030 Comapny. All Rights Reserved.</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Store Policies</li>
        <li>Returns & Exchanges</li>
      </ul>
    </footer>
  );
}

export default Footer;

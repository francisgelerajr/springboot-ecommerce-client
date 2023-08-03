'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full bg-gray-800 py-4 md:py-6 px-4 md:px-10 flex items-center">
      <div className='flex items-center mr-10'>
        <Image src="/logo-placeholder.png" alt="Logo" width={150} height={100} />
        <div className='font-bold text-white text-xl md:text-2xl ml-4'>eCommerce Control Panel</div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <nav className={`md:flex md:flex-row text-white text-center md:space-x-8 ${showMenu ? 'block' : 'hidden'}`}>
        <a href="/users" className='block py-4 md:py-2'>Users</a>
        <a href="/categories" className='block py-4 md:py-2'>Categories</a>
        <a href="/brands" className='block py-4 md:py-2'>Brands</a>
        <a href="/products" className='block py-4 md:py-2'>Products</a>
        <a href="/customers" className='block py-4 md:py-2'>Customers</a>
        <a href="/shipping" className='block py-4 md:py-2'>Shipping</a>
        <a href="/orders" className='block py-4 md:py-2'>Orders</a>
        <a href="/sales-report" className='block py-4 md:py-2'>Sales Report</a>
        <a href="/articles" className='block py-4 md:py-2'>Articles</a>
        <a href="/menus" className='block py-4 md:py-2'>Menus</a>
        <a href="/settings" className='block py-4 md:py-2 pr-4'>Settings</a>
      </nav>
    </header>
  );
}

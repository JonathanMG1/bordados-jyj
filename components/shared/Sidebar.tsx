'use client';
import MainMenu from '@/components/shared/MainMenu';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { route } from '@/assets/data';
import { information } from '@/assets/data';
import Image from 'next/image';
import { useCart } from '@/components/ui/CartContext'; // Ajusta la ruta según tu estructura

const Sidebar = (): JSX.Element => {
  const [nav, setNav] = useState<boolean>(false);
  const { getTotalItems, getDisplayCount } = useCart();
  const cartCount: number = getTotalItems();
  const displayCount: string = getDisplayCount();

  const CartIcon = (): JSX.Element => (
    <div className="relative -left-3 ">
      <FaShoppingCart className="text-gray-400 transition-colors  " size={20} />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#186194] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center ">
          {displayCount}
        </span>
      )}
    </div>
  );
  return (
    <div
      className="flex justify-between items-center w-full h-24 px-4 top-0 left-0 z-50 text-white dark:bg-gray-900 fixed nav shadow backdrop:blur-md 
    "
    >
      <div className="relative w-20 h-20">
        <Image
          src={information.photo.logo}
          alt="imagen-perfil"
          fill
          className="object-cover rounded-full border "
          sizes="max-width: 600px"
        />
      </div>

      <section className="hidden md:flex">
        <MainMenu />
        <CartIcon />
      </section>

      <aside
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </aside>

      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {/* Menu Items */}
          <ul className="flex flex-col justify-center items-center flex-1">
            {route.map(({ label, href }) => (
              <li
                key={href}
                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-blue-500"
              >
                <Link onClick={() => setNav(!nav)} href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="">
            <div className=" relative flex items-center gap-3 text-4xl hover:text-blue-500 cursor-pointer -right-[70px]  -top-40">
              <FaShoppingCart
                className="text-gray-400 transition-colors  "
                size={20}
              />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#186194] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {displayCount}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

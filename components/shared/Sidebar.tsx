'use client';
import MainMenu from '@/components/shared/MainMenu';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { route } from '@/assets/data';
import { information } from '@/assets/data';
import Image from 'next/image';
const Sidebar = () => {
  const [nav, setNav] = useState(false);

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
      </section>

      <aside
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </aside>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
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
      )}
    </div>
  );
};

export default Sidebar;

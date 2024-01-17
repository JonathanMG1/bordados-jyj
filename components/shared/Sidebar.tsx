'use client';
import MainMenu from '@/components/shared/MainMenu';
import { cn } from '@/libs/utils';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { route } from '@/assets/data';
const Sidebar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 top-0 left-0 z-50 text-black bg-white fixed nav">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1>
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

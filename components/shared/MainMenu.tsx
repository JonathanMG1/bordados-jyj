import { cn } from '@/libs/utils';
import Link from 'next/link';
import { route } from '@/assets/data';

const MainMenu = () => {
  return (
    <ul>
      <li>
        {route.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'duration-400 px-4 cursor-pointer capitalize font-medium  text-black hover:scale-105 duration-200   navbar__link relative inline-block text-current hover:text-blue-500 transition-all duration-400  after:scale-0  after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] after:w-full after:bg-blue-500 after:transform-origin-left after:transition-all-duration-400 hover:after:scale-100'
            )}
          >
            {route.label}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default MainMenu;

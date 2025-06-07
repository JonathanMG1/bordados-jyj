'use client';

import { cn } from '@/libs/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { route } from '@/assets/data';

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-1">
        {route.map((routeItem) => {
          const isActive = pathname === routeItem.href;

          return (
            <li key={routeItem.href}>
              <Link
                href={routeItem.href}
                className={cn(
                  'duration-400 px-4 py-2 cursor-pointer capitalize font-medium transition-all duration-300 relative inline-block',
                  // Estilos para estado activo
                  isActive
                    ? 'hover:after:bg-blue-500 font-semibold after:scale-100'
                    : 'text-white hover:text-blue-500',
                  // Efectos hover y after (línea inferior)
                  'hover:scale-105 navbar__link after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] after:w-full after:bg-current after:transform after:origin-left after:transition-all after:duration-300',
                  // Línea activa o hover
                  isActive
                    ? 'after:scale-100 after:bg-blue-500'
                    : 'after:scale-0 hover:after:scale-100 hover:after:bg-blue-500'
                )}
              >
                {routeItem.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainMenu;

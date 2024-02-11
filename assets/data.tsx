import laser from '@/components/images/maquinalaser.jpg';
import bordadora from '@/components/images/maquinabordar.jpg';
import cuellos from '@/components/images/cuellos.jpg';
import hilos from '@/components/images/hilos.jpg';
import cinta from '@/components/images/cinta.jpg';
import bobinas from '@/components/images/bobinas.jpg';
import logo from '@/components/images/logo.jpg';
export const route = [
  {
    label: 'Home',
    // icon: RiHome3Line,
    href: '/',
  },
  {
    label: 'Productos',
    // icon: RiHome3Line,
    href: '/products',
  },
  {
    label: 'Servicios',
    // icon: RiHome3Line,
    href: '/services',
  },
  {
    label: 'Quienes somos',
    // icon: RiHome3Line,
    href: '/about',
  },
  {
    label: 'Contacto',
    // icon: RiHome3Line,
    href: '/contact',
  },
];

export const information = {
  machines: [
    {
      id: 1,
      image: laser,
      category: 'Maquinas',
      title: 'Maquina de Laser',
      description: 'Descripción de las máquinas.',
    },
    {
      id: 2,
      image: bordadora,
      category: 'Maquinas',
      title: 'Maquina de Bordar',
      description: 'Descripción de las máquinas ',
    },
    {
      id: 3,
      image: cuellos,
      category: 'Maquinas',
      title: 'Maquina Tejedora',
      description: 'Descripción de las máquina.',
    },
  ],

  productos: [
    {
      id: 1,
      image: hilos,
      category: 'Hilos',
      title: 'Hilos de Bordar - Lumina - 4000 mts.',
      price: '$1980',
    },
    {
      id: 2,
      image: cinta,
      category: 'Cinta ',
      title: 'Cinta doble Contacto - 25mm - 40mts.',
      price: '$1980',
    },
    {
      id: 3,
      image: bobinas,
      category: 'Hilos',
      title: 'Hilo Bordar Bobina - 30.000mts',
      price: '$1990',
    },
  ],

  photo: { logo },
};

import laser from '@/components/images/maquinalaser.jpg';
import bordadora from '@/components/images/maquinabordar.jpg';
import hilos from '@/components/images/hilos.jpg';
import cinta from '@/components/images/cinta.jpg';
import bobinas from '@/components/images/bobinas.jpg';
import logo from '@/components/images/logo.jpg';
import piquemc from '@/components/images/pique_mc.jpg';
import piqueml from '@/components/images/pique_ml.jpg';
import polarhombre from '@/components/images/polarhombre.jpg';
import polarmujer from '@/components/images/polarmujer.jpg';
import polera from '@/components/images/polera.jpg';
import hilodurafil from '@/components/images/hilosdurafil.jpg';
import { MdOutlineShoppingCart } from 'react-icons/md';

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
  {
    label: 'Cotizar',
    href: '/cotizar',
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
  ],

  categorias: [
    {
      id: 1,
      image: hilos,
      category: 'Hilos',
      title: 'Hilos de Bordar - Lumina - 4000 mts.',
    },
    {
      id: 2,
      image: cinta,
      category: 'Accesorios',
      title: 'Cinta doble Contacto - 25mm - 40mts.',
    },
    {
      id: 3,
      image: polera,
      category: 'Ropas',
      title: 'Polera Pique 60% Algodón Manga Corta Hombre',
    },
  ],

  productos: [
    {
      id: 1,
      image: piquemc,
      category: 'Ropas',
      title: 'Polera Pique 60% Algodón Manga Corta Hombre',
    },
    {
      id: 2,
      image: piqueml,
      category: 'Ropas',
      title: 'Polera Pique 60% Algodón Manga Larga Hombre',
    },
    {
      id: 3,
      image: polarhombre,
      category: 'Ropas',
      title: 'Micropolar Termico Manga Larga Hombre',
    },
    {
      id: 4,
      image: polarmujer,
      category: 'Ropas',
      title: 'Micropolar Termico Manga Larga Mujer',
    },
    {
      id: 5,
      image: polera,
      category: 'Ropas',
      title: 'Polera 100% Algodon Manga Corta Hombre',
    },
    {
      id: 6,
      image: hilodurafil,
      category: 'Hilos',
      title: 'Hilo de bordar Lumina 4000mts.',
    },
    {
      id: 7,
      image: hilos,
      category: 'Hilos',
      title: 'Hilo de bordar Lumina 4000mts.',
    },
    {
      id: 8,
      image: cinta,
      category: 'Accesorios',
      title: 'Cinta doble Contacto - 25mm - 40mts.',
    },
    {
      id: 9,
      image: bobinas,
      category: 'Accesorios',
      title: 'Hilo para Bobina 30.000 yardas.',
    },
  ],

  photo: { logo },
};

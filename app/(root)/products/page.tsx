'use client';

import { information } from '@/assets/data';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/components/ui/CartContext'; // Ajusta la ruta según tu estructura

const categorias = ['Hilos', 'Accesorios', 'Ropas'];

const ProductPage = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const { addToCart } = useCart();
  const productosFiltrados = categoriaSeleccionada
    ? information.productos.filter((p) => p.category === categoriaSeleccionada)
    : information.productos;

  const handleAddToCart = (productId: number): void => {
    addToCart(productId);
    console.log(`Producto agregado al carrito: ID ${productId}`);
  };
  return (
    <div className=" flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-28">
      <aside className="w-full lg:w-1/5 mb-8 lg:mb-0 ">
        <h3 className="text-xl font-semibold mb-4 text-black">Categorías</h3>
        <ul className="space-y-2 text-black">
          {categorias.map((cat) => (
            <li key={cat}>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="categoria"
                  value={cat}
                  checked={categoriaSeleccionada === cat}
                  onChange={() => setCategoriaSeleccionada(cat)}
                  className="accent-blue-600"
                />
                <span>{cat}</span>
              </label>
            </li>
          ))}
          <li>
            <button
              onClick={() => setCategoriaSeleccionada('')}
              className="mt-4 text-blue-600 text-sm hover:underline"
            >
              Limpiar filtro
            </button>
          </li>
        </ul>
      </aside>

      <section className="w-full lg:w-4/5">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
          Productos {categoriaSeleccionada && `- ${categoriaSeleccionada}`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className=" w-full bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col h-full"
            >
              <div className="flex-shrink-0 h-64 flex items-center justify-center p-6">
                <Image
                  className="p-6 rounded-t-lg mx-auto"
                  src={producto.image}
                  alt={producto.title}
                  width={300}
                  height={300}
                />
              </div>
              <div className="px-5 pb-5 flex flex-col flex-grow">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 mb-2 flex-grow">
                  {producto.title}
                </h5>
                <div className="flex items-center justify-between mt-auto">
                  <button
                    onClick={() => handleAddToCart(producto.id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;

'use client';

import Image from 'next/image';
import { useCart } from '@/components/ui/CartContext';

const CotizarPage = () => {
  const { getCartProducts, cartItems, getTotalItems } = useCart();
  const productosEnCarrito = getCartProducts();
  const totalProductos = getTotalItems();

  return (
    <section className="bg-white  antialiased md:py-16 ">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-black  sm:text-2xl py-14">
          Carrito de compras
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 px-4">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {productosEnCarrito.length > 0 ? (
                productosEnCarrito.map((producto) => (
                  <div
                    key={producto.id}
                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
                  >
                    {/* Imagen del producto */}
                    <div className="w-16 h-16 relative">
                      <Image
                        src={producto.image}
                        alt={producto.title}
                        fill
                        className="text-base font-medium text-black hover:underline"
                      />
                    </div>

                    {/* Información del producto */}
                    <div className="flex-grow">
                      <h3 className="font-semibold">{producto.title}</h3>
                      <p className="text-gray-600">
                        Categoría: {producto.category}
                      </p>
                    </div>

                    {/* Cantidad */}
                    <div className="text-right">
                      <p className="font-bold">Cantidad: {producto.quantity}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No hay productos en el carrito
                </p>
              )}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700  sm:p-6">
              <p className="text-xl font-semibold text-gray-900 ">
                Orden de cotizacion
              </p>
              <div className="space-y-4">
                {productosEnCarrito.length > 0 ? (
                  <>
                    <div className="space-y-2">
                      {productosEnCarrito.map((producto, index) => (
                        <dl
                          key={index}
                          className="flex items-center justify-between gap-4"
                        >
                          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                            {producto.title} {/* ✅ Usar datos del producto */}
                          </dt>
                          <dd className="text-base font-medium text-gray-900">
                            {producto.quantity}{' '}
                            {/* ✅ Usar datos del producto */}
                          </dd>
                        </dl>
                      ))}
                    </div>

                    {/* ✅ Total fuera del map */}
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900">
                        Total productos
                      </dt>
                      <dd className="text-base font-bold text-gray-900">
                        {totalProductos}
                      </dd>
                    </dl>
                  </>
                ) : (
                  <p className="text-center text-gray-500">
                    No hay productos en el carrito
                  </p>
                )}
              </div>

              <a
                href="#"
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Proceder a cotizar
              </a>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {' '}
                  o{' '}
                </span>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Continuar comprando
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CotizarPage;

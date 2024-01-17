import Container from '@/components/ui/container';
import hilos from '@/public/hilos.jpg';
import Image from 'next/image';

const SectionCategory = () => {
  return (
    <section className="py-16 px-10">
      <h5 className="mb-2 text-2xl tracking-tight text-black translate-y-9 py-6 ">
        Categorias de Productos
      </h5>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-11 place-items-center ">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="max-w-sm bg-white  border-gray-200 rounded-lg  dark:bg-white dark:border-gray-950 shadow-xl"
          >
            <a href="#">
              <Image
                className="rounded-t-lg object-contain h-48 w-full "
                src={hilos}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <p className="text-gray-700">Hilos</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                  Hilos de Bordar - Lumina - 4000 m.
                </h5>
              </a>
              <p className="mb-3 font-medium  dark:text-gray-400  text-lg ">
                $ 1980
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionCategory;

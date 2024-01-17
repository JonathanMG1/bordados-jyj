import laser from '@/public/maquinalaser.jpg';
import bordadora from '@/public/maquinabordar.jpg';
import Image from 'next/image';

const SectionService = () => {
  return (
    <section className="py-16 px-10">
      <h5 className="mb-2 text-2xl tracking-tight text-black translate-y-9 py-6 ">
        Servicios de Bordados J&J
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
                src={laser}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <p className="text-gray-700">Maquinas</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
                  Maquinas de Bordar & Laser
                </h5>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionService;

import { information } from '@/assets/data';
import Image from 'next/image';

const ServicePage = () => {
  return (
    <section className="flex items-center xl:min-h-screen font-poppins translate-y-3 py-28">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        {information.machines.map((machine) => (
          <div className="flex flex-wrap mb-16" key={machine.id}>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="relative">
                <Image
                  src={machine.image}
                  alt=""
                  className="relative z-40 
                   w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded object-contain shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative">
                <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-950 md:text-5xl">
                  {machine.title}
                </h1>
              </div>
              <p className="mt-6 mb-10 text-base leading-7 text-gray-500">
                {machine.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;

import { information } from '@/assets/data';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="flex items-center   xl:h-screen font-poppins translate-y-3 py-24">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="relative">
              <Image
                src={information.photo.logo}
                alt=""
                className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="relative">
              <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-950 md:text-5xl ">
                Bienvenido a nuestro sitio
              </h1>
            </div>
            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 "></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

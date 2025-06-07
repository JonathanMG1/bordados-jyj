'use client';

import Image from 'next/image';
import banner from '@/components/images/banner.jpg';
import perfil from '@/components/images/imagen1.jpg';
import { useState, useEffect } from 'react';
import ButtonPrevious from '@/components/ui/ButtonPrevious';
import ButtonNext from '@/components/ui/ButtonNext';

const SectionImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [perfil, banner];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  });
  return (
    <div className="relative w-full  overflow-hidden translate-y-24 ">
      <div
        className=" transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 0.3}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? 'block' : 'hidden'
            } duration-700 ease-in-out`}
          >
            <div className="w-full h-full md:w-[700px] lg:w-[900px]  mx-auto flex items-center justify-center">
              <Image src={image} alt={`Image ${index + 1}`} priority />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <ButtonPrevious />
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <ButtonNext />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default SectionImage;

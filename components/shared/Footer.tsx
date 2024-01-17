import { MdLocationOn } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaClock } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            <div className="mb-8 md:mb-0">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                BORDADOS JYJ SPA
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="flex items-center space-x-2 mb-4">
                  <MdLocationOn className="w-4 h-4" />
                  <a href="#" className="hover:underline">
                    Dardignac 440, Recoleta, RM
                  </a>
                </li>

                <li className="flex items-center space-x-2 mb-4">
                  <MdLocalPhone className="w-4 h-4" />
                  <a href="#" className="hover:underline">
                    +56 9 88465482
                  </a>
                </li>

                <li className="flex items-center space-x-2 mb-4">
                  <MdEmail className="w-4 h-4" />
                  <a href="#" className="hover:underline">
                    maldonadocjc@gmail.com
                  </a>
                </li>

                <li className="flex items-center space-x-2 mb-4">
                  <FaClock className="w-4 h-4" />
                  <a href="#" className="hover:underline">
                    Lunes a Viernes 09:00 - 19:00
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0 lg:px-14 md:px-14">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Productos
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Hilos
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Bordados
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Laser
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                NOSOTROS
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Quienes somos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terminos y condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Bordados J&J
            </a>
            . Todo los derechos reservados
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebookSquare />

              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaWhatsapp />

              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

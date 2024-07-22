import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt,  FaMapMarkerAlt } from "react-icons/fa";
import footerLogo from "../../assets/logo7.png";

const Footer = () => {
  return (
    <div className="bg-primary flex flex-col justify-center font-serif">
      <section className="max-w-[1200px] mx-auto px-2 py-4 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-1 py-4 px-2 md:px-12 flex flex-col items-center">
            <div className="mb-4">
              <img src={footerLogo} alt="Logo" className="w-36" />
            </div>
            <p className="text-white opacity-60 text-center text-bold mb-4">Cooking with passion!</p>
            <div className="flex justify-center items-center gap-4">
              <a href="#" className="text-white text-3xl hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61553895167054" className="text-white text-3xl hover:text-gray-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-white text-3xl hover:text-gray-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="col-span-1 py-4 px-2 text-white">
            <h1 className="text-xl font-bold mb-3 text-center md:text-left">Контакти</h1>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl" />
              <p>бул. Александър Малинов 51, 1712 София (Metro city center)</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt className="text-xl" />
              <p>+359 889 97 26 01</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaEnvelope className="text-xl" />
              <p>rosesbgsofia@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow className="text-xl" />
              <p>
                <a
                  href="https://www.google.com/maps/place/VAMOS/@42.6458236,23.3734651,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa87007e7f96e7:0x515f0274f7d22f24!8m2!3d42.6458197!4d23.37604!16s%2Fg%2F11vslmrtt3?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white"
                >
                  Google Maps
                </a>
              </p>
            </div>
          </div>
          <div className="col-span-1 py-4 px-2 text-white">
            <h1 className="text-xl font-bold mb-3 text-center md:text-left">Работно време</h1>
            <p className="opacity-80 text-center md:text-left">Понеделник-Петък: 09:00 ч. - 18:30 ч.</p>
            <p className="opacity-80 text-center md:text-left">Събота-Неделя: Почивни дни/По заявка</p>
          </div>
        </div>
        <div className="text-center mt-8 p-11 bottom-0 left-0 text-white opacity-90">
        © 2024 Designed and Built by <a href="https://github.com/torbalansky" className="text-green-300 hover:text-white">torbalansky</a>
      </div>
      </section>
    </div>
  );
};

export default Footer;

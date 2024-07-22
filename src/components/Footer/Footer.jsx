import React, { useState, useRef } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vamos Sofia",
          from_email: form.email,
          to_email: "torbalansky@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you asap.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please, try again.");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-black/10 p-5 w-[300px] rounded-[5px]">
      <h2 className="text-xl font-bold text-white mb-4 text-center">Свържете се с нас</h2>
      <div className="grid gap-4">
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Име" 
          className="p-2" 
        />
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          placeholder="Имейл" 
          className="p-2" 
        />
        <textarea 
          name="message" 
          value={form.message} 
          onChange={handleChange} 
          placeholder="Съобщение" 
          className="p-2" 
        />
        <button type="submit" className="secondary-btn text-white rounded-none py-2 font-bold">
          {loading ? "Изпращане..." : "Изпрати"}
        </button>
      </div>
    </form>
  );
};

const Footer = () => {
  return (
    <div className="bg-primary flex flex-col justify-center items-center font-serif">
      <section className="max-w-[1000px] mx-auto px-2 py-4 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <h1 className='text-6xl sm:text-5xl md:text-5xl lg:text-[50px] font-bold bg-clip-text text-transparent bg-white font-cursive'>Vamos</h1>
            </div>
            <p className="text-white opacity-60 text-center md:text-left text-bold mb-4">Cooking with passion!</p>
            <div className="text-white">
              <h1 className="text-md font-bold mb-2 text-center md:text-left">Работно време:</h1>
              <p className="opacity-80 text-center md:text-left">Пон-Петък: 09:00-18:30 ч.</p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-4 mt-4 mb-2">
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
          <div className="py-4 px-2 text-white text-center md:text-left">
            <h1 className="text-xl font-bold mb-3">Контакти</h1>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-xl" />
              <p>бул. Александър Малинов 51, София</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
              <FaMobileAlt className="text-xl" />
              <p>+359 889 97 26 01</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
              <FaEnvelope className="text-xl" />
              <p>rosesbgsofia@gmail.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
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
          <div className="flex justify-center">
            <Contact />
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

import React, { useState } from 'react';
import Logo from "../../assets/logo_p.png";
import Logo1 from "../../assets/logo7.png";
import Glovo from "../../assets/Glovo_Logo.svg";
import TakeAway from "../../assets/Takeaway_Logo.svg";
import { IoMenu } from "react-icons/io5";
import { RiCloseLine } from "react-icons/ri";
import { Link } from 'react-scroll';
import { FaEnvelope, FaMobileAlt, FaFacebook, FaInstagram } from "react-icons/fa";

const Menu = [
    {
        id: 1,
        name: "Начало",
        link: "Header"
    },
    {
        id: 2,
        name: "За нас",
        link: "About",
    },
    {
        id: 3,
        name: "Меню",
        link: "Menu"
    },
    {
        id: 4,
        name: "Контакти",
        link: "Footer",
    },
    {
        id: 5,
        name: "Поръчай",
        link: "Order",
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [orderVisible, setOrderVisible] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const toggleOrder = () => {
        setOrderVisible(!orderVisible);
    };

    return (
        <div className="bg-lightBlue font-serif fixed top-0 left-0 w-full z-50">
            <div className="container py-2">
                <div className="flex justify-between text-center">
                    <div data-aos='fade-down' data-aos-once='true' data-aos-delay='200'>
                        <a href='#'>
                            <img src={Logo} alt="Logo" className="w-28 mt-2" />
                        </a>
                    </div>
                    <ul className='hidden lg:flex justify-between items-center gap-4' data-aos='fade-down' data-aos-once='true' data-aos-delay='200'>
                        {
                            Menu.map((menu) => (
                                <li key={menu.id}>
                                    {menu.name === "Поръчай" ? (
                                        <button
                                            onClick={toggleOrder}
                                            className="inline-block text-md font-semibold py-2 px-2 cursor-pointer primary-btn"
                                        >
                                            {menu.name}
                                        </button>
                                    ) : (
                                        <Link 
                                            to={menu.link} 
                                            smooth={true} 
                                            duration={500} 
                                            className={`inline-block text-md font-semibold py-2 px-2 cursor-pointer`}
                                            activeClass="active"
                                            spy={true}
                                        >
                                            {menu.name}
                                        </Link>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                    <div className='lg:hidden'>
                        <button onClick={handleOpen}>
                            <IoMenu className='text-3xl mt-6' data-aos='fade-down'/>
                        </button>
                        {
                            open && (
                                <div>
                                    <ul className='absolute top-full right-0 bg-white space-y-3 p-4 rounded-md shadow-md z-50'>
                                        {
                                            Menu.map((menu) => (
                                                <li key={menu.id}>
                                                    {menu.name === "Поръчай" ? (
                                                        <button
                                                            onClick={() => {
                                                                toggleOrder();
                                                                setOpen(false);
                                                            }}
                                                            className="inline-block text-xl p-4 hover:bg-primary hover:text-white w-full rounded-md cursor-pointer primary-btn"
                                                        >
                                                            {menu.name}
                                                        </button>
                                                    ) : (
                                                        <Link 
                                                            to={menu.link} 
                                                            smooth={true} 
                                                            duration={500} 
                                                            className="inline-block text-xl p-4 hover:bg-primary hover:text-white w-full rounded-md cursor-pointer"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            {menu.name}
                                                        </Link>
                                                    )}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={`bg-secondary fixed top-0 right-0 h-full w-80 shadow-lg transform transition-transform duration-300 ${orderVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='px-4'>
                    <a href='#'>
                        <img src={Logo1} alt="Logo" className="w-28 mt-2" />
                    </a>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-center text-lightBlue">TAKEOUT</h2>
                    <p className='text-center text-lightBlue'>ПОРЪЧАЙ ВКУСНО ХАПВАНЕ ЗА ДОМА И ОФИСА</p>
                    <div className='mt-6'>
                        <div className="flex items-center gap-3 mt-6">
                            <FaMobileAlt className="text-xl text-white" />
                            <p className='text-white'>+359 889 97 26 01</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <FaEnvelope className="text-xl text-white" />
                            <p className='text-white'>rosesbgsofia@gmail.com</p>
                        </div>
                        <div className="flex justify-center items-center gap-4 mt-6 p-1 rounded-[2px] bg-slate-500">
                            <p className='text-white'>Последвай ни в:</p>
                        <a href="#" className="text-white text-3xl hover:text-gray-300">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61553895167054" className="text-white text-3xl hover:text-gray-300">
                            <FaFacebook />
                        </a>
                        </div>
                        <p className='text-center text-lightBlue mt-12 font-bold'>Очаквайте ни скоро и в:</p>
                        <div className='flex flex-col items-center px-4'>
                            <a href='#'>
                                <img src={Glovo} alt="Glovo Logo" className="w-[180px] h-[50px] mt-6 p-1 rounded-[2px] bg-lightBlue" />
                            </a>
                            <a href='#'>
                                <img src={TakeAway} alt="TakeAway Logo" className="w-[180px] h-[50px] mt-6 p-2 rounded-[2px] bg-lightBlue" />
                            </a>
                        </div>                    
                        <button onClick={toggleOrder} className="mt-4 p-2"> 
                            <RiCloseLine className="text-xl absolute top-4 right-2 text-white bg-red-600"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

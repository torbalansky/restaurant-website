import React from 'react';
import Logo from "../../assets/logo_p.png";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-scroll';

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
];

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="bg-lightBlue font-serif">
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
                                    <Link 
                                        to={menu.link} 
                                        smooth={true} 
                                        duration={500} 
                                        className={`inline-block text-md font-semibold py-2 px-2 cursor-pointer ${
                                            menu.name === "Контакти" 
                                            ? "primary-btn" 
                                            : "hover:text-primary"
                                        }`}
                                        activeClass="active"
                                        spy={true}
                                    >
                                        {menu.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='lg:hidden'>
                        <button onClick={handleOpen}>
                            <IoMenu className='text-3xl mt-6'data-aos='fade-down'/>
                        </button>
                        {
                            open && (
                                <div>
                                    <ul className='bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 z-50'>
                                        {
                                            Menu.map((menu) => (
                                                <li key={menu.id}>
                                                    <Link 
                                                        to={menu.link} 
                                                        smooth={true} 
                                                        duration={500} 
                                                        className="inline-block text-xl p-4 hover:bg-primary hover:text-white w-full rounded-md cursor-pointer"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        {menu.name}
                                                    </Link>
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
        </div>
    );
};

export default Navbar;

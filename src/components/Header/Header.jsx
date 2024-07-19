import React from 'react';
import paellaPng from "../../assets/paella.png";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <>
      <div className='min-h-[600px] sm:min-h-[650px] bg-lightBlue flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0' data-aos='fade-up'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
                    <h1 className='text-8xl lg:text-[160px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-purple-400 font-cursive'> ¡Vamos!</h1>
                    <p className='text-dark font-serif'> 
                        Във Vamos обожаваме домашно приготвената и наистина вкусна храна! Почитатели сме на българската кухня, приготвена с пресни и висококачествени продукти. Харесваме също така и бургери с крехко месо, както и свежи салати, овкусени с пресни подправки от градината. Нашата голяма страст е испанската кухня – богата на настроение, вкусове и аромати. Менюто си приготвяме всеки ден на място, като залагаме на първокласни продукти, вкус и разнообразие! </p>
                    <div>
                        <Link to="Menu" smooth={true} duration={500}>
                            <button className='primary-btn'>Нашето меню</button>
                        </Link>
                    </div>
                </div>
                <div className="min-h-[400px] flex justify-center items-center relative order-1 sm:order-2">
                    <img src={paellaPng} className='max-w-[450px] w-full mx-auto sm:scale-125 shadow-1'/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header

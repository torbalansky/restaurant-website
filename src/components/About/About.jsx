import React from 'react';
import sestriImg from "../../assets/sestri.jpg";
import { Link } from 'react-scroll';

const About = () => {
  return (
    <>
    <div className='min-h-[600px] flex justify-center items center py-12 sm:py-0 mt-8' data-aos='zoom-in'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='flex justify-center items-center'>
                    <img src={sestriImg} alt='' className='max-w-[400px] w-full shadow-1 rounded-full'/>
                </div>
                <div className='flex flex-col just gap-6 sm:pt-0'>
                    <p className='uppercase text-3xl font-semibold text-dark font-serif'>За Нас</p>
                    <h1 className='text-7xl text-primary font-bold font-cursive'>Kristina & Elena</h1>
                    <p className='text-gray-500 tracking-wide leading-5 font-serif'>
                    Вложили сме нашето сърце и душа във Vamos. Пренесохме го от слънчева Испания тук през 2023. Съчетаваме своя богат опит и страст към кулинарното изкуство. Вярваме, че храната трябва да бъде не само източник на прехрана, но и израз на творчество и страст. Вярваме в качеството, вниманието към детайлите и удоволствието от всяка хапка. Нашата мисия е да доставяме вкусни и вдъхновяващи ястия, които обединяват хората и тяхната страст към храната.
                    </p>
                    <div>
                        <Link to="Menu" smooth={true} duration={500}>
                            <button className='primary-btn'>Нашето меню</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default About

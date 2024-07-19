import React from 'react';
import Slider from 'react-slick';
import saladImg from '../../assets/salad.png';
import paellaImg from '../../assets/paella1.png';
import cakeImg from '../../assets/cake.png';
import taratorImg from '../../assets/tarator.png';
import soupImg from '../../assets/soup.png';
import musakaImg from '../../assets/musaka.jpg';
import burgerImg from '../../assets/burger.png';
import beefImg from '../../assets/beef_p.png';
import porkImg from '../../assets/pork_p.png';
import lasagnaImg from '../../assets/lasagna.png';
import shopskaImg from '../../assets/shopska.png';
import pileshkaImg from '../../assets/pileshka_s.png';
import wingsImg from '../../assets/wings.png';
import zeleImg from '../../assets/zele_m.png';
import brownieImg from '../../assets/brownie.png';
import chiaImg from '../../assets/chia.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MenuData = [
  { id: 1, name: "Паея с морски дарове", price: "12,50 лв.", img: paellaImg },
  { id: 2, name: "Мусака", price: "7,90 лв.", img: musakaImg },
  { id: 3, name: "Телешки бургер", price: "8,00 лв.", img: burgerImg },
  { id: 4, name: "Телешка плескавица", price: "11,00 лв.", img: beefImg },
  { id: 5, name: "Свинска пържола", price: "10,60 лв.", img: porkImg },
  { id: 6, name: "Пилешки крилца", price: "9,00 лв.", img: wingsImg },
  { id: 7, name: "Лазаня Болонезе", price: "11,00 лв.", img: lasagnaImg },
  { id: 8, name: "Салата Цезар", price: "9,00 лв.", img: saladImg },
  { id: 9, name: "Шопска салата", price: "4,50 лв.", img: shopskaImg },
  { id: 10, name: "Зеле с моркови", price: "1,80 лв./ 100 гр.", img: zeleImg },
  { id: 11, name: "Таратор", price: "4,50 лв.", img: taratorImg },
  { id: 12, name: "Крем Супа", price: "5,00 лв.", img: soupImg },
  { id: 13, name: "Пилешка Супа", price: "5,50 лв.", img: pileshkaImg },
  { id: 14, name: "Чийзкейк", price: "6,00 лв.", img: cakeImg },
  { id: 14, name: "Домашно брауни", price: "6,00 лв.", img: brownieImg },
  { id: 15, name: "Чия пудинг с плодове ", price: "5,00 лв.", img: chiaImg },
];

const Menu = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
  };

  return (
    <div className='bg-primary text-white py-12 font-serif'>
      <div className='container'>
        <div className='space-y-5 mb-10'>
          <h1 className='text-center text-4xl font-bold' data-aos='zoom-in'>Меню</h1>
          <div className='text-center mx-auto sm:max-w-sm text-md opacity-60' data-aos='zoom-in'>
            Обедното ни меню се обновява ежедневно на нашата <a href='https://www.facebook.com/profile.php?id=61553895167054' target='_blank' rel='noopener noreferrer' className='text-yellow-300 text-semibold'>Facebook</a> страница.
          </div>
          <div data-aos='fade-in'>
            <Slider {...settings}>
              {MenuData.map((menu) => (
                <div className='my-16' key={menu.id}>
                  <div className='flex flex-col gap-4 py-8 px-6 rounded-xl'>
                    <div className='mb-3 flex justify-center'>
                      <img src={menu.img} alt={menu.name} style={imageStyle} />
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                      <div className='space-y-3 text-center'>
                        <h1 className='text-xl'>{menu.name}</h1>
                        <p className='text-3xl font-semibold'>{menu.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

import React, { useState } from 'react';
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
import kremImg from '../../assets/karamel.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from '../Modal/Modal.jsx';
import { FiSearch } from 'react-icons/fi';

const MenuData = [
  { id: 1, name: "Паея с морски дарове", price: "12,50 лв.", img: paellaImg, ingredients: "Ориз, морски дарове (миди, калмари, скариди), домати, червен пипер, чесън, лук, зехтин, бяло вино, лимон", allergens: "Миди", quantity: "350 гр.", description: "Традиционна испанска паеля, приготвена с разнообразие от морски дарове, в ароматен оризов сос, с добавка на домати и червен пипер." },
  { id: 2, name: "Мусака", price: "7,90 лв.", img: musakaImg, ingredients: "Картофи, мляно месо (свинско и говеждо), бешамел сос (мляко, масло, брашно), лук, подправки (канела, черен пипер, сол)", allergens: "Лактоза", quantity: "300 гр.", description: "Класическа българска мусака с многослойни картофи и мляно месо, покрита с кремообразен бешамел сос." },
  { id: 3, name: "Телешки бургер", price: "11,50 лв.", img: burgerImg, ingredients: "Телешко месо, хляб (съдържа глутен), салата, домат, пържени картофи, майонеза, кетчуп", allergens: "Глутен", quantity: "350 г", description: "Сочен бургер с телешко месо, гарниран с пресна салата и домат, сервирано с пържени картофи." },
  { id: 4, name: "Телешка плескавица", price: "11,00 лв.", img: beefImg, ingredients: "Телешко месо, подправки (сол, черен пипер, червен пипер), масло", allergens: "Няма", quantity: "300 гр.", description: "Ароматна плескавица от телешко месо, приготвена на скара и сервирана с гарнитури по избор." },
  { id: 5, name: "Свинска пържола", price: "10,60 лв.", img: porkImg, ingredients: "Свинско месо, подправки (сол, черен пипер, розмарин, чесън), зехтин", allergens: "Няма", quantity: "300 гр.", description: "Сочно парче свинска пържола, приготвено на скара с подправки и ароматни билки." },
  { id: 6, name: "Пилешки крилца", price: "9,00 лв.", img: wingsImg, ingredients: "Пилешки крилца, подправки (сол, черен пипер, чили, чесън), растително масло", allergens: "Няма", quantity: "250 гр.", description: "Хрупкави пилешки крилца с пикантна марината, идеални за споделяне." },
  { id: 7, name: "Лазаня Болонезе", price: "11,00 лв.", img: lasagnaImg, ingredients: "Паста за лазаня, месен сос (мляно месо, домати, лук, чесън, подправки), сирене (моцарела, пармезан), зехтин", allergens: "Лактоза, Глутен", quantity: "350 гр.", description: "Традиционна лазаня Болонезе с многослойна паста, месен сос и топено сирене, изпечена до златисто." },
  { id: 8, name: "Салата Цезар", price: "9,00 лв.", img: saladImg, ingredients: "Маруля, пилешко месо (гриловано), крутони (хляб, зехтин, подправки), сирене (пармезан), дресинг Цезар (майонеза, чесън, аншоа, лимонов сок, пармезан)", allergens: "Лактоза, Глутен", quantity: "250 гр.", description: "Свежа салата Цезар с гриловано пилешко месо, хрупкави крутони и настърган пармезан." },
  { id: 9, name: "Шопска салата", price: "4,50 лв.", img: shopskaImg, ingredients: "Домат, краставица, сирене (бяло саламурено), маслини, лук, зехтин, оцет", allergens: "Лактоза", quantity: "200 гр.", description: "Традиционна българска салата с домати, краставици, сирене и маслини, освежаваща и лека." },
  { id: 10, name: "Зеле с моркови", price: "1,80 лв.", img: zeleImg, ingredients: "Зеле, моркови, оцет, сол, захар", allergens: "Няма", quantity: "100 гр.", description: "Здравословна салата от зеле и моркови, с хрупкава текстура и леко кисел вкус." },
  { id: 11, name: "Таратор", price: "4,50 лв.", img: taratorImg, ingredients: "Кисело мляко, краставица, чесън, копър, орехи", allergens: "Лактоза", quantity: "300 гр.", description: "Студена българска супа с кисело мляко, краставица и чесън, идеална за горещи летни дни." },
  { id: 12, name: "Крем Супа", price: "5,00 лв.", img: soupImg, ingredients: "Сметана, смес от зеленчуци (моркови, картофи, целина), сол, черен пипер", allergens: "Лактоза", quantity: "300 гр.", description: "Кремообразна супа от подбрани зеленчуци, приготвена със сметана за допълнителна гладкост и вкус." },
  { id: 13, name: "Пилешка Супа", price: "5,50 лв.", img: pileshkaImg, ingredients: "Пилешко месо, зеленчуци (моркови, целина, картофи), подправки (сол, черен пипер)", allergens: "Няма", quantity: "300 гр.", description: "Класическа пилешка супа, приготвена с пресно пилешко месо и разнообразие от зеленчуци, идеална за всеки сезон." },
  { id: 14, name: "Чийзкейк", price: "6,00 лв.", img: cakeImg, ingredients: "Крем сирене, захар, основа (смлени бисквити, масло), яйца", allergens: "Лактоза, Глутен", quantity: "150 гр.", description: "Кремообразен чийзкейк с основа от смлени бисквити и крем сирене, завършен с гладък захарен крем." },
  { id: 15, name: "Домашно брауни", price: "6,00 лв.", img: brownieImg, ingredients: "Шоколад, брашно, яйца, захар, масло, ванилия", allergens: "Лактоза, Глутен", quantity: "150 гр.", description: "Домашно приготвено шоколадово брауни с богат шоколадов вкус и плътна текстура." },
  { id: 16, name: "Чия пудинг с плодове", price: "5,00 лв.", img: chiaImg, ingredients: "Чия семена, мляко (или растителен заместител), мед, плодове (според сезона)", allergens: "Няма", quantity: "200 гр.", description: "Здравословен чия пудинг, приготвен с чия семена и свежи плодове, перфектен за закуска или десерт." },
  { id: 17, name: "Крем Карамел", price: "4,50 лв.", img: kremImg, ingredients: "Яйца, захар, мляко, ванилия", allergens: "Лактоза", quantity: "150 гр.", description: "Класически крем карамел с гладка текстура и карамелизирана захар отгоре, идеален за сладък завършек." },
];

const Menu = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDish(null);
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', fontSize: '30px', marginLeft: '30px', zIndex: 1 }}
        onClick={onClick}
      >
        ◀
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', fontSize: '30px', marginRight: '30px', zIndex: 1 }}
        onClick={onClick}
      >
        ▶
      </div>
    );
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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

  return (
    <div className='bg-primary text-white py-12 font-serif'>
      <div className='container'>
        <div className='space-y-5 mb-10'>
          <h1 className='text-center text-4xl font-bold' data-aos='zoom-in'>Меню</h1>
          <div className='text-center mx-auto sm:max-w-sm text-md opacity-60' data-aos='zoom-in'>
            Обедното ни меню се обновява ежедневно на нашата <a href='https://www.facebook.com/profile.php?id=61553895167054' target='_blank' rel='noopener noreferrer' className='text-yellow-300 font-semibold'>Facebook</a> страница.
          </div>
          <div data-aos='fade-in'>
            <Slider {...settings}>
              {MenuData.map((menu) => (
                <div
                  key={menu.id}
                  onClick={() => openModal(menu)}
                  className='my-16 cursor-pointer relative'
                >
                  <div className='flex flex-col gap-4 p-8'>
                  <div className='mb-4 flex justify-center relative group'>
                    <img
                      src={menu.img}
                      alt={menu.name}
                      className='w-48 h-48 object-cover rounded-full border-2 border-white transition-transform duration-300 group-hover:scale-105'
                    />
                    <FiSearch
                      className='absolute bg-red-500 rounded-[5px] p-2 text-white text-4xl transition-opacity duration-300 opacity-0 group-hover:opacity-100'
                      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    />
                  </div>
                    <div className='flex flex-col items-center gap-4 text-center'>
                      <h1 className='text-xl'>{menu.name}</h1>
                      <p className='text-2xl font-semibold'>{menu.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} dish={selectedDish} />}
    </div>
  );
};

export default Menu;

import React, { useState, useEffect, useRef } from 'react';
import paellaImg from "../../assets/paella1.png";
import { Link } from 'react-scroll';
import fishImg from '../../assets/fish.png';
import healthImg from '../../assets/health.png';
import homeImg from '../../assets/home.png';

const Header = () => {
  const [imageId, setImageId] = useState(paellaImg);
  const [currentText, setCurrentText] = useState("Във Vamos обожаваме домашно приготвената храна! Нашата голяма страст е испанската кухня – богата на настроение, вкусове и аромати. Предлагаме българска кухня с пресни и висококачествени продукти, включително вкусни бургери и свежи салати.");
  const [overlayText, setOverlayText] = useState("Средиземноморски специалитети");
  const [manualChange, setManualChange] = useState(false);
  const timerRef = useRef(null);

  const ImageList = [
    {
      id: 1,
      img: paellaImg,
      text: "Във Vamos обожаваме домашно приготвената храна! Нашата голяма страст е испанската кухня – богата на настроение, вкусове и аромати. Предлагаме българска кухня с пресни и висококачествени продукти, включително вкусни бургери и свежи салати.",
      overlayText: "Испанска кухня",
    },
    {
      id: 2,
      img: fishImg,
      text: "Менюто си приготвяме всеки ден на място, като залагаме на първокласни продукти, вкус и разнообразие! Нашите ястия са създадени, за да доставят най-доброто качество на нашите клиенти.",
      overlayText: "Внимание към всеки детайл",
    },
    {
      id: 3,
      img: healthImg,
      text: "Здравословни и вкусни ястия, приготвени специално за вашето здраве и удоволствие. Открийте нашето разнообразие от ястия, които ще задоволят всички ваши нужди.",
      overlayText: "Здравословна храна",
    },
    {
      id: 4,
      img: homeImg,
      text: "Поръчайте храна от нас и се насладете на спокойствието на собствения си дом, хапвайки вкусни ястия. Можете също така да поръчате за офиса и да избегнете чакането на опашки.",
      overlayText: "Храна за дома и офиса",
    },
  ]; 

  useEffect(() => {
    const initialImage = ImageList.find(item => item.img === imageId);
    if (initialImage) {
      setCurrentText(initialImage.text);
      setOverlayText(initialImage.overlayText);
    }

    const changeImageAutomatically = () => {
      const currentIndex = ImageList.findIndex((item) => item.img === imageId);
      const nextIndex = (currentIndex + 1) % ImageList.length;
      setImageId(ImageList[nextIndex].img);
      setCurrentText(ImageList[nextIndex].text);
      setOverlayText(ImageList[nextIndex].overlayText);
    };

    if (!manualChange) {
      timerRef.current = setInterval(changeImageAutomatically, 15000);
    } else {
      clearInterval(timerRef.current);
      timerRef.current = setTimeout(() => {
        setManualChange(false);
        timerRef.current = setInterval(changeImageAutomatically, 15000);
      }, 20000);
    }

    return () => clearInterval(timerRef.current);
  }, [imageId, manualChange]);

  const handleImageClick = (img, text, overlayText) => {
    setImageId(img);
    setCurrentText(text);
    setOverlayText(overlayText);
    setManualChange(true);
  };

  return (
    <div className='min-h-[600px] sm:min-h-[650px] bg-lightBlue flex flex-col justify-center items-center pt-[70px]'>
      <div className='container pb-10 sm:pb-0' data-aos='zoom-in'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center md:text-left'>
            <h1 className='text-8xl sm:text-7xl md:text-7xl lg:text-[140px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-purple-400 font-cursive'>¡Vamos!</h1>
            <p className='text-dark font-serif'>
              {currentText}
            </p>
            <div>
              <Link to="Menu" smooth={true} duration={500}>
                <button className='primary-btn'>Нашето меню</button>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center items-center order-2 md:order-1">
            <img src={imageId} className='max-w-[380px] w-full mx-auto sm:scale-125 shadow-1' />
            <div className='absolute inset-0 flex justify-center items-center'>
              <div className='bg-black/60 text-white p-2 rounded-lg absolute top-0 z-10'>
                {overlayText}
              </div>
            </div>
          </div>
          <div className='hidden sm:flex flex-col justify-center gap-2 bg-white/50 rounded-2xl p-1 absolute right-10 bottom-10 z-20'>
            {
              ImageList.map((item) => (
                <div key={item.id} className='cursor-pointer' onClick={() => handleImageClick(item.img, item.text, item.overlayText)}>
                  <img 
                    src={item.img}
                    alt='menu item'
                    className='max-w-[50px] h-[50px] object-contain inline-block hover:scale-105 duration-200'
                  />
                </div>
              ))
            }
          </div>
          <div className='flex sm:hidden justify-center gap-2 bg-white/50 rounded-full p-1 order-4 z-20'>
            {
              ImageList.map((item) => (
                <div key={item.id} className='cursor-pointer' onClick={() => handleImageClick(item.img, item.text, item.overlayText)}>
                  <img 
                    src={item.img}
                    alt='menu item'
                    className='max-w-[50px] h-[50px] object-contain inline-block hover:scale-105 duration-200'
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

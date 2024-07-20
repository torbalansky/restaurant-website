import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.png';

const TestimonialData = [
    {
        id: 1,
        name: "Silvia Aleksandrova",
        text: "Изключително вкусна и приятна храна! Винаги е топла и добре овкусена. Менюто всеки ден е богато и разнообразно – от основните + супи, до салати и десерти.",
        img: img1,
    },
    {
        id: 2,
        name: "Георги Манчев",
        text: "Храната и обслужване 5/5, а атмосферата е създадена за истинско удоволствие със същата оценка. Това място е идеално за всеки, който цени качествена кухня.",
        img: img2,
    },
    {
        id: 3,
        name: "Steve Karrer",
        text: "Изключително вкусна храна! Храня се тук почти всеки ден, откакто отвориха. Силно препоръчвам ежедневните им супи. Техният крем карамел е абсолютно за умиране!",
        img: img3,
    },
    {
        id: 4,
        name: "Kono Dio Da",
        text: "Уникално вкусна храна! Всичките артикули дето се предлагат са страшно вкусни и определено улавят точния смисъл на  домашно приготвена храна. Страхотни готвачи!!",
        img: img4,
    },
    {
        id: 5,
        name: "Даниела Борисова",
        text: "Невероятно вкусна храна, голямо разнообразие! Страхотни супи, богат избор от основни ястия - готвени и на скара, салати и винаги оригинални десерти по домашни рецепти!",
        img: img5,
    },
    {
        id: 6,
        name: "P. Stathis",
        text: "Живея близо и редовно си поръчвам храна от Vamos. Винаги е вкусна и апетитно приготвена. Менюто ежедневно предлага разнообразие - от основни ястия и супи до салати и десерти.",
        img: img6,
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
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

  return (
    <div className="text-white py-10 mb-10">
      <div className="container mx-auto">
        <h1 className="text-center text-dark text-4xl font-bold mb-10" data-aos='fade-in'>Отзиви</h1>
        <Slider {...settings}>
          {TestimonialData.map((testimonial) => (
            <div key={testimonial.id} className="p-4" data-aos='fade-in'>
              <div className="flex flex-col items-center bg-gray-100 text-black p-6 rounded-lg shadow-lg h-full" style={{ minHeight: '300px', maxHeight: '400px' }}>
                <img src={testimonial.img} alt={testimonial.name} className="rounded-full w-24 h-24 mb-4 object-cover" />
                <h2 className="text-xl font-semibold mb-2">{testimonial.name}</h2>
                <p className="text-center overflow-hidden overflow-ellipsis">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

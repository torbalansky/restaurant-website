import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <Router>
      <main className='overflow-x-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Element name="Header">
                <Header />
              </Element>
              <Element name="About">
                <About />
              </Element>
              <Element name="Menu">
                <Menu />
              </Element>
              <Element name="Testimonials">
                <Testimonials />
              </Element>
              <Element name="Footer">
                <Footer />
              </Element>
            </>
          } />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

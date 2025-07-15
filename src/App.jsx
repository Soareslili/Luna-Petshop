import { Hero } from "./components/Hero";
import { Service } from "./components/Service";

import Gallery from "./components/Gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';





function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Hero />
      <Service />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App

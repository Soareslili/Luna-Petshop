import { Hero } from "./components/Hero";
import { Service } from "./components/Service";

import Gallery from "./components/Gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


import { FaWhatsapp } from "react-icons/fa";


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

      <a
        href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20trabalho&type=phone_number&app_absent=0"
        className="fixed bottom-4 right-4 z-[100] group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="fixed w-12 h-12 text-green-600 bottom-4 right-4 z-[1000]" 
        
        />

      </a>

    </>
  )
}

export default App

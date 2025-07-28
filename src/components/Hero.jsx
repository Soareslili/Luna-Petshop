import { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import Cachorro from '../assets/cachorro1.png';
import Pata1 from '../assets/pata1.png';
import Pata2 from '../assets/pata2.png';
import Pata3 from '../assets/pata3.png';
import Pata4 from '../assets/pata4.png';
import Pata5 from '../assets/pata5.png';
import Pata6 from '../assets/Pata6.png';
import Pata7 from '../assets/pata7.png';
import { Menu, X } from 'lucide-react';

export function Hero() {
  const [visiblePaws, setVisiblePaws] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timers = [];
    for (let i = 0; i < 7; i++) {
      timers.push(
        setTimeout(() => {
          setVisiblePaws((prev) => [...prev, i]);
        }, i * 400)
      );
    }

    return () => timers.forEach(clearTimeout);
  }, []);

  const pawImages = [
    { src: Pata1, className: 'left-[40%] top-[2%] rotate-12 opacity-60' },
    { src: Pata2, className: 'right-[5%] top-[10%] -rotate-6 opacity-50' },
    { src: Pata3, className: 'left-[45%] bottom-[25%] rotate-45 opacity-50' },
    { src: Pata4, className: 'right-[4%] bottom-[35%] -rotate-12 opacity-60' },
    { src: Pata5, className: 'right-[30%] top-[0%] -rotate-12 opacity-60' },
    { src: Pata6, className: 'right-[60%] top-[15%] -rotate-12 opacity-30' },
    { src: Pata7, className: 'right-[55%] top-[42%] -rotate-12 opacity-30' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <img  src={Logo} alt="Logo Luna Petshop" className="w-20 h-20" />

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Serviços', 'Galeria', 'Depoimentos', 'Contato'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}`}
                className="text-foreground hover:text-blue-500 font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}

            <a
              className="text-white font-medium text-sm px-4 py-2 bg-blue-500 rounded-md transition-transform duration-300 hover:scale-105"
              href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20Luna%20PetShop&type=phone_number&app_absent=0"
            >
              Entre em Contato
            </a>
          </nav>

      
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-600 focus:outline-none">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

   
        {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 z-50 relative">

            {['Home', 'Serviços', 'Galeria', 'Depoimentos', 'Contato'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20Luna%20PetShop&type=phone_number&app_absent=0"
              className="inline-block w-full text-center text-white font-medium bg-blue-500 px-4 py-2 rounded-md"
            >
              Entre em Contato
            </a>
          </div>
        )}
      </header>

      <section id='home' className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-28 px-6 md:px-12">
    
        {pawImages.map((paw, i) =>
          visiblePaws.includes(i) ? (
            <img
              key={i}
              src={paw.src}
              alt={`pata-${i}`}
              className={`block absolute w-16 md:w-36 pointer-events-none z-0 transition-all duration-700 ease-out opacity-100 ${paw.className}`}
            />
          ) : null
        )}

     
        <div className="hidden md:flex md:w-1/2 mr-10 z-10">
          <img
            src={Cachorro}
            alt="Cachorro"
            className="w-64 lg:w-[340px] max-w-full mt-6 object-cover -ml-12"
          />

        </div>

     
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0 z-10 space-y-6">
          <h1  className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-700 leading-tight">
            Cuidado e Amor <span className="block md:inline">para </span>
            <br className="block md:hidden" />
            <span className="block md:inline bg-gradient-to-r from-blue-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              Seu Pet
            </span>
          </h1>

          <p className="text-gray-700 max-w-md">
            Oferecemos serviços completos de cuidados para seu animal de estimação com profissionais especializados e muito carinho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start ml-10 w-full sm:w-auto">
            <a
              href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20Luna%20PetShop&type=phone_number&app_absent=0"
              className="px-6 py-3 bg-blue-700 rounded-3xl text-white font-medium text-sm sm:text-base text-center transition-transform hover:scale-105"
            >
              Agendar Consulta
            </a>
            <a
              href="#servicos"
              className="px-6 py-3 bg-gradient-to-r from-blue-400 via-pink-300 to-purple-400 rounded-3xl text-white font-medium text-sm sm:text-base text-center transition-transform hover:scale-105"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </section>

    </>
  );
}

import React, { useState, useEffect } from 'react';
import {
  GiShower,
  GiHealthNormal,
  GiDogHouse,
  GiDogBowl,
   GiSittingDog

} from "react-icons/gi"; // Biblioteca temática de pets!

import { FaBox } from "react-icons/fa";




import Banho from "../../assets/banho.jpeg";
import Consulta from "../../assets/consulta.jpeg";
import Hotel from "../../assets/hotel.jpeg";
import Creche from "../../assets/creche.jpeg";
import Adestramento from "../../assets/Adestramento.jpg"; // você pode adicionar essa imagem
import Transporte from "../../assets/Transporte.jpg";     // e essa também, ou imagens que preferir

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 const [animatedOptions, setAnimatedOptions] = useState([]);

  const options = [
    {
      title: "Banho & Tosa",
      description: "Seu pet limpinho, cheiroso e feliz!",
      image: Banho,
      icon: <GiShower size={24} className="text-white hover:text-yellow-400 transition-colors duration-300" />,
    },
    {
      title: "Consulta Veterinária",
      description: "Cuidado e atenção com a saúde do seu melhor amigo.",
      image: Consulta,
      icon: <GiHealthNormal size={24} className="text-white hover:text-yellow-400 transition-colors duration-300 " />,
    },
    {
      title: "Hotelzinho Pet",
      description: "Hospedagem segura, aconchegante e cheia de carinho!",
      image: Hotel,
      icon: <GiDogHouse size={24} className="text-white hover:text-yellow-400 transition-colors duration-300 " />,
    },
    {
      title: "Creche Canina",
      description: "Brincadeiras, socialização e supervisão o dia todo.",
      image: Creche,
      icon: <GiDogBowl size={24} className="text-white hover:text-yellow-400 transition-colors duration-300 " />,
    },
    {
      title: "Adestramento",
      description: "Educação com carinho e reforço positivo!",
      image: Adestramento,
      icon: < GiSittingDog size={24} className="text-white hover:text-yellow-400 transition-colors duration-300" />,
    },
    {
      title: "Transporte Pet",
      description: "Ida e volta com segurança e conforto!",
      image: Transporte,
      icon: <FaBox size={24} className="text-white hover:text-yellow-400 transition-colors duration-300" />,
    },
  ];

  const handleOptionClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    setAnimatedOptions([]); // reset para novo conjunto de opções

    const timers = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 200 * i); // você pode aumentar esse valor para animar mais devagar
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [options.length]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans text-white">
      {/* Header Section */}
      <div className="w-full max-w-2xl px-6 mt-8 mb-2 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-3 tracking-tight drop-shadow-lg animate-fadeInTop delay-300">
          Nossa Galeria
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium max-w-xl mx-auto animate-fadeInTop delay-600">
          Veja alguns momentos especiais dos nossos clientes e conheça nossa estrutura e cuidados especializados.
        </p>
      </div>

      <div className="h-12"></div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[900px] min-w-[600px] h-[400px] mx-0 items-stretch overflow-hidden relative">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out ${
              activeIndex === index ? 'active' : ''
            }`}
            style={{
             backgroundImage: `url(${option.image})`,

              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              borderRadius: 0,
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#fff' : '#292929',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index
                ? '0 20px 60px rgba(0,0,0,0.50)'
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position',
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000'
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000',
              }}
            ></div>

            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full">
              <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div
                  className="main font-bold text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="sub text-base text-gray-300 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;

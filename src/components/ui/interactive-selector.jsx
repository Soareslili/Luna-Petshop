import React, { useState, useEffect } from "react";
import {
  GiShower,
  GiHealthNormal,
  GiDogHouse,
  GiDogBowl,
  GiSittingDog,
} from "react-icons/gi";
import { FaBox } from "react-icons/fa";

import Banho from "../../assets/banho.jpeg";
import Consulta from "../../assets/consulta.jpeg";
import Hotel from "../../assets/hotel.jpeg";
import Creche from "../../assets/creche.jpeg";
import Adestramento from "../../assets/Adestramento.jpg";
import Transporte from "../../assets/Transporte.jpg";

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);

  const options = [
    {
      title: "Banho & Tosa",
      description: "Seu pet limpinho, cheiroso e feliz!",
      image: Banho,
      icon: <GiShower size={24} className="text-white" />,
    },
    {
      title: "Consulta Veterinária",
      description: "Cuidado e atenção com a saúde do seu melhor amigo.",
      image: Consulta,
      icon: <GiHealthNormal size={24} className="text-white" />,
    },
    {
      title: "Hotelzinho Pet",
      description: "Hospedagem segura, aconchegante e cheia de carinho!",
      image: Hotel,
      icon: <GiDogHouse size={24} className="text-white" />,
    },
    {
      title: "Creche Canina",
      description: "Brincadeiras, socialização e supervisão o dia todo.",
      image: Creche,
      icon: <GiDogBowl size={24} className="text-white" />,
    },
    {
      title: "Adestramento",
      description: "Educação com carinho e reforço positivo!",
      image: Adestramento,
      icon: <GiSittingDog size={24} className="text-white" />,
    },
    {
      title: "Transporte Pet",
      description: "Ida e volta com segurança e conforto!",
      image: Transporte,
      icon: <FaBox size={24} className="text-white" />,
    },
  ];

  const handleOptionClick = (index) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  useEffect(() => {
    setAnimatedOptions([]);
    const timers = [];
    options.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setAnimatedOptions((prev) => [...prev, i]);
        }, 200 * i)
      );
    });
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [options.length]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-2xl px-4 mt-8 mb-4 text-center">
        <h1 id="option" className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-3 tracking-tight animate-fadeInTop delay-300">
          Nossa Galeria
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium max-w-xl mx-auto animate-fadeInTop delay-600">
          Veja alguns momentos especiais dos nossos clientes e conheça nossa estrutura e cuidados especializados.
        </p>
      </div>

      <div className="h-12" />

      <div className="flex w-full max-w-7xl overflow-x-auto sm:overflow-hidden px-4 gap-2 snap-x scroll-smooth">
        {options.map((option, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-end transition-all duration-700 ease-in-out snap-start"
            style={{
              backgroundImage: `url(${option.image})`,
              backgroundSize: activeIndex === index ? "auto 100%" : "auto 120%",
              backgroundPosition: "center",
              backgroundColor: "#18181b",
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index)
                ? "translateX(0)"
                : "translateX(-60px)",
              flex: activeIndex === index ? "7 1 0%" : "2 1 0%",
              minWidth: "180px",
              height: "400px",
              borderRadius: "0.75rem",
              border: `2px solid ${
                activeIndex === index ? "#ffffff" : "#292929"
              }`,
              cursor: "pointer",
              boxShadow:
                activeIndex === index
                  ? "0 20px 60px rgba(0,0,0,0.5)"
                  : "0 10px 30px rgba(0,0,0,0.3)",
              overflow: "hidden",
              position: "relative",
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Sombra inferior */}
            <div
              className="absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? "0" : "-40px",
                height: "120px",
                boxShadow:
                  activeIndex === index
                    ? "inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000"
                    : "inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000",
              }}
            ></div>

            {/* Label */}
            <div className="absolute left-0 right-0 bottom-5 flex items-center px-4 gap-3 pointer-events-none">
              <div className="min-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] border-2 border-[#444] shadow-lg">
                {option.icon}
              </div>
              <div className="text-white">
                <div
                  className="font-bold text-lg transition-all duration-700"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index
                      ? "translateX(0)"
                      : "translateX(25px)",
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="text-sm text-gray-300 transition-all duration-700"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index
                      ? "translateX(0)"
                      : "translateX(25px)",
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <style jsx>{`
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

        .options::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;

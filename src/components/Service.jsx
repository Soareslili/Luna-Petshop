
import { Phone } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const servicos = [
    {
        titulo: "Banho e Tosa",
        descricao: "Cuidados completos de higiene e estética para seu pet ficar sempre limpo e bonito.",
        itens: [
            "Banho relaxante",
            "Tosa profissional",
            "Corte de unhas",
            "Limpeza de ouvidos"
        ],
        preco: "R$ 45",
        link: "https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20Banho%20e%20Tosa&type=phone_number&app_absent=0"
    },
    {
        titulo: "Consultas Veterinárias",
        descricao: "Atendimento médico especializado com veterinários experientes e equipamentos modernos.",
        itens: [
            "Consultas gerais",
            "Vacinação",
            "Exames preventivos",
            "Emergências"
        ],
        preco: "R$ 80",
        link: "https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20Consulta%20Veterinária&type=phone_number&app_absent=0"
    },
    {
        titulo: "Hotel para Pets",
        descricao: "Hospedagem confortável e segura para quando você precisar viajar.",
        itens: [
            "Acomodações individuais",
            "Recreação supervisionada",
            "Alimentação personalizada",
            "Cuidados 24h"
        ],
        preco: "R$ 60/dia",
        link: "https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20Hotel%20para%20Pets&type=phone_number&app_absent=0"
    },
    {
        titulo: "Adestramento",
        descricao: "Treinamento comportamental para pets mais obedientes e felizes.",
        itens: [
            "Comandos básicos",
            "Socialização",
            "Correção de comportamentos"
        ],
        preco: "",
        link: "https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20Adestramento&type=phone_number&app_absent=0"
    },
    {
        titulo: "Pet Taxi",
        descricao: "Transporte seguro e confortável para seu pet ir a consultas ou passeios.",
        itens: [
            "Veículo climatizado",
            "Motorista especializado",
            "Segurança garantida"
        ],
        preco: "",
        link: "https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20Pet%20Taxi&type=phone_number&app_absent=0"
    },
    {
        titulo: "Cuidados Especiais",
        descricao: "Atendimento especializado para pets idosos ou com necessidades especiais.",
        itens: [
            "Fisioterapia",
            "Medicação controlada",
            "Acompanhamento nutricional"
        ],
        preco: "",
        link: "https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20Cuidados%20Especiais&type=phone_number&app_absent=0"
    }
];




export function Service() {
     useEffect(() => {
            AOS.init({ duration: 1200, easing: "ease-out-cubic", once: true });
        }, [])

    return (
        <section id="servicos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2  className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                    Nossos Serviços
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto text-center mb-10 px-4">
                    Oferecemos uma gama completa de serviços para cuidar do seu pet com todo o carinho e profissionalismo que ele merece.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                    {servicos.map((servico, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 250}
                            data-aos-once="true"
                            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105 flex flex-col justify-between"
                            
                        >
                            <div>
                                <h3 className="text-xl font-bold text-blue-700 mb-2">{servico.titulo}</h3>
                                <p className="text-sm text-gray-500 mb-4">{servico.descricao}</p>

                                <ul className="space-y-2 mb-4">
                                    {servico.itens.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-muted-foreground gap-2">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {servico.preco && (
                                    <p className="text-sm text-blue-700 font-medium mt-4">
                                        A partir de <strong>{servico.preco}</strong>
                                    </p>
                                )}
                            </div>

                            <a
                                href={servico.link}
                                className="mt-6 inline-flex items-center justify-center gap-2 text-sm rounded-md py-2 px-4 bg-gray-200 hover:bg-blue-500 hover:text-white transition"
                            >
                                <Phone size={16} />
                                Agendar Agora
                            </a>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16 px-4">
                    <a
                        className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium px-6 py-4 rounded-full text-white shadow-lg hover:from-blue-800 hover:to-cyan-500 transition-transform hover:scale-105"
                        href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20trabalho&type=phone_number&app_absent=0" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Fale conosco pelo WhatsApp!
                    </a>
                </div>
            </div>
        </section>
    );
}

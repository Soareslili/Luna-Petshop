
import { Phone } from "lucide-react";



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
        link: "#"
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
        link: "#"
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
        link: "#"
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
        link: "#"
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
        link: "#"
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
        link: "#"
    }
];




export function Service() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                    Nossos Serviços
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto text-center mb-10">
                    Oferecemos uma gama completa de serviços para cuidar do seu pet com todo o carinho e profissionalismo que ele merece.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicos.map((servico, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105"
                        >
                            <h3 className="text-xl font-bold text-blue-700 mb-2">{servico.titulo}</h3>
                            <p className="text-sm text-gray-400 mb-4">{servico.descricao}</p>

                            <ul className="space-y-2 mb-4">
                                {servico.itens.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-muted-foreground gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {servico.preco && (
                                <p className="text-sm text-blue-700 font-medium mb-3 mt-6">
                                    A partir de <strong>{servico.preco}</strong>
                                </p>
                            )}

                            <a
                                href={servico.link}
                                className="w-full inline-flex items-center justify-center gap-2 text-sm rounded-md py-2 px-4 bg-gray-200 shadow  hover:bg-blue-500 hover:text-white hover:border-transparente transition"
                            >
                                <Phone size={16} />
                                Agendar Agora
                            </a>
                        </div>
                    ))}
                </div>
                <a
                    className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium px-6 py-4 rounded-full mt-20 ml-[38%] text-white shadow-lg hover:from-blue-800 hover:to-cyan-500 transition cursor-pointer transition-transform duration-400 transform hover:scale-110"
                >
                    Fale conosco pelo WhatsApp.!
                </a>
            </div>
        </section>
    );
}

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
    {
        nome: "Maria Silva",
        iniciais: "MS",
        pet: "Luna (Golden Retriever)",
        texto:
            "A equipe da Luna PetShop é simplesmente maravilhosa! Minha Luna fica sempre feliz quando vem aqui. O cuidado e carinho são evidentes em cada detalhe.",
        estrelas: 5,
    },
    {
        nome: "João Santos",
        iniciais: "JC",
        pet: "Tutor(a) do Thor (Labrador)",
        texto:
            "Profissionais extremamente competentes e atenciosos. O Thor teve uma emergência e fomos atendidos prontamente. Recomendo de olhos fechados!",
        estrelas: 5,
    },
    {
        nome: "Ana Costa",
        iniciais: "AC",
        pet: "Tutor(a) do Mimi (Persa)",
        texto:
            "Minha gatinha é bem medrosa, mas aqui ela se sente segura. A estrutura é impecável e os preços são justos. Já indiquei para várias amigas!",
        estrelas: 5,
    },
    {
        nome: "Carlos Oliveira",
        iniciais: "CO",
        pet: "Tutor(a) do Buddy (Vira-lata)",
        texto:
            "O serviço de hotel foi perfeito para nossa viagem. Ficamos tranquilos sabendo que o Buddy estava sendo bem cuidado. Voltamos clientes fiéis!",
        estrelas: 5,
    },
    {
        nome: "Fernanda Lima",
        iniciais: "FL",
        pet: "Tutor(a) do Simba (Siamês)",
        texto:
            "O adestramento transformou a vida do meu Simba! Agora ele é muito mais obediente e sociável. Equipe nota 10. Estamos muito Felizes.!",
        estrelas: 5,
    },
    {
        nome: "Roberto Martins",
        iniciais: "RM",
        pet: "Tutor(a) do Lola (Poodle)",
        texto:
            "Já tentei outros lugares, mas nenhum se compara ao cuidado da Luna PetShop. A Lola sempre volta para casa feliz e cheirosa! Melhor equipe do mundo.!",
        estrelas: 5,
    },

];






export function Testimonials() {
    useEffect(() => {
        AOS.init({ duration: 1200, easing: "ease-out-cubic", once: true });
    }, []);

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
                    O Que Nossos Clientes Dizem
                </h2>
                <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
                    A satisfação dos nossos clientes e a felicidade dos pets<br />
                    são nossa maior recompensa. Veja alguns depoimentos:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 250}
                            data-aos-once="true"
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transition-shadow duration-300 ease-out hover:scale-105 hover:shadow-2xl group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <span className="flex h-full items-center justify-center rounded-full px-4 py-4 bg-blue-500 text-white font-bold">
                                        {item.iniciais}
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                                            {item.nome}
                                        </h3>
                                        <p className="text-gray-600 text-sm mt-4">
                                            Tutor(a) do {item.pet}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-yellow-500 text-lg">
                                        {"⭐".repeat(item.estrelas)}
                                    </span>
                                </div>
                                <blockquote className="mt-4 text-gray-500 italic leading-relaxed">
                                    "{item.texto}"
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 rounded-2xl text-white">
                    <h3 className="text-2xl font-bold mb-4">Mais de 500 Famílias Confiam em Nós</h3>
                    <p className="text-lg opacity-90 mb-6">Junte-se à nossa família de clientes e proporcione o melhor cuidado para se pet.</p>

                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div className="flex flex-col">
                            <p className="text-3xl font-bold">500+</p>
                            <p className="text-sm opacity-90">Pets Atendidos</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold">98%</p>
                            <p className="text-sm opacity-90">Satisfação</p>
                        </div>

                        <div>
                            <p  className="text-3xl font-bold">5⭐</p>
                            <p className="text-sm opacity-90">Avaliação Média</p>
                        </div>

                        <div>
                            <p  className="text-3xl font-bold">3+</p>
                            <p className="text-sm opacity-90">Anos de Experiência</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

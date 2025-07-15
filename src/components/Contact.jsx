import { Phone } from "lucide-react";



export function Contact() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 id="Contato" className="text-3xl sm:text-4xl font-bold mb-4">Entre em Contato</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Estamos sempre prontos para atender você e seu pet. Entre em contato conosco através dos canais abaixo:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>

                        <div className="flex items-start bg-white p-6 border border-gray-200 rounded-lg shadow-lg transition-transform transition-shadow duration-300 ease-out hover:scale-105 hover:shadow-2xl group">
                            <img
                                className="h-10 w-10 p-2 rounded-full bg-gray-300 "
                                src="https://img.icons8.com/color/48/phone.png"
                                alt="Ícone telefone"
                            />

                            <div className="flex flex-col gap-1 ml-4">
                                <p className="font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300">WhatsApp</p>
                                <p className="text-foreground font-lg">(11) 99999-9999</p>
                                <p className="text-sm text-gray-400">Atendimento rápido e direto</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-white p-6 border border-gray-200 rounded-lg shadow-lg transition-transform transition-shadow duration-300 ease-out hover:scale-105 hover:shadow-2xl group">

                            <img
                                className="h-10 w-10 p-2 rounded-full bg-gray-300 "
                                src="https://img.icons8.com/color/48/place-marker--v1.png"
                                alt="Ícone endereço"
                            />

                            <div className="flex flex-col gap-1 ml-4">
                                <p className="font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300">Endereço</p>
                                <p className="text-foreground font-lg">Rua das Flores, 123 - Centro</p>
                                <p className="text-sm text-gray-400">São Paulo, SP - CEP 01234-567</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-white p-6 border border-gray-200 rounded-lg shadow-lg transition-transform transition-shadow duration-300 ease-out hover:scale-105 hover:shadow-2xl group">

                            <img
                                className="h-10 w-10 p-2 rounded-full bg-gray-300 "
                                src="https://img.icons8.com/color/48/new-post.png"
                                alt="Ícone email"
                            />

                            <div className="flex flex-col gap-1 ml-4">
                                <p className="font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300">E-mail</p>
                                <p className="text-foreground font-lg">contato@lunapetshop.com.br</p>
                                <p className="text-sm text-gray-400">Resposta em até 24h</p>
                            </div>
                        </div>



                        <div className="border border-gray-200 rounded-2xl">
                            <div className="flex space-y-1.5 p-6 gap-2 ">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mt-2"></div>
                                <h3 className="text-2xl font-semibold leading-none tracking-tight items-center gap-3">Horário de Funcionamento</h3>
                            </div>

                            <div className="p-6 pt-0">
                                <div className="flex justify-between items-center py-2 border-b border-gray-400 last:border-b-0">
                                    <span className="text-gray-600 font-medium">Segunda a Sexta</span>
                                    <span className="text-blue-400 font-semibold">08:00 - 18:00</span>
                                </div>

                                <div className="flex justify-between items-center py-2 border-b border-gray-400 last:border-b-0">
                                    <span className="text-gray-600 font-medium">Sábado</span>
                                    <span className="text-blue-400 font-semibold">08:00 - 16:00</span>
                                </div>

                                <div className="flex justify-between items-center py-2 border-b border-gray-400 last:border-b-0">
                                    <span className="text-gray-600 font-medium">Domingo</span>
                                    <span className="text-blue-400 font-semibold">09:00 - 14:00</span>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-xl p-4 w-full text-sm text-gray-700 shadow-sm">
                                💡 <strong className="text-gray-800">Emergências 24h:</strong> Entre em contato pelo WhatsApp para atendimentos urgentes
                            </div>

                        </div>

                    </div>


                    <div className="space-y-6 ">
                        <div className=" bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 rounded-2xl p-8 text-white text-center animate-sxale-in">
                            <h3 className="text-2xl font-bold mb-4">
                                Pronto para Cuidar do Seu Pet?
                            </h3>
                            <p className="text-white/90 mb-6 leading-relaxed">
                                Nossa equipe está esperando para oferecer o melhor cuidado para seu animal de estimação. Agende uma consulta agora mesmo!
                            </p>

                            <a className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium px-6 py-4 rounded-full mt-5 text-white shadow-lg animate-pulse">
                                <Phone size={16} />
                                Agende pelo WhatsApp
                            </a>

                        </div>

                        <div className="border border-gray-200 rounded-2xl overflow-hidden">
                            <div className="flex items-center gap-2 p-6">
                                <img
                                    className="h-8 w-8"
                                    src="https://img.icons8.com/color/48/place-marker--v1.png"
                                    alt="Ícone localização"
                                />
                                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                    Nossa Localização
                                </h3>
                            </div>

                            <div className="px-6 pb-6">
                                <div className="w-full h-66 rounded-xl overflow-hidden mb-4">
                                    <iframe
                                        className="w-full h-full border-0"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.47978193545!2d-46.63343292548797!3d-23.551206061217584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5900b15a1739%3A0xa04ba02905756f1!2sR.%20das%20Fl%C3%B4res%2C%20123%20-%20S%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001019-010!5e0!3m2!1spt-BR!2sbr!4v1752446697296!5m2!1spt-BR!2sbr"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p>📍 <strong>Endereço:</strong> Rua das Flores, 123 - Centro</p>
                                    <p>🏙️ <strong>Cidade:</strong> São Paulo, SP - CEP 01234-567</p>
                                    <p>🚗 <strong>Estacionamento:</strong> Disponível em frente</p>
                                    <p>🚌 <strong>Transporte:</strong> Próximo ao metrô e pontos de ônibus</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    )
}
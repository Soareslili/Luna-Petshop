
import Logo from '../assets/logo.png'


export function Footer() {
    return (
        <section className="w-full h-full bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Coluna 1 - Sobre */}
                    <div className="space-y-4">
                        <img src={Logo} alt="Logo Luna Petshop" className="w-16 h-16 mb-2 rounded-full" />
                        <p className="text-gray-400 leading-relaxed">
                            Cuidamos do seu pet com todo amor e profissionalismo que ele merece.
                            Mais de 500 famílias já confiam em nossos serviços.
                        </p>

                        <div className="flex items-center gap-4 mt-4">
                            <a href="https://wa.me/SEUNUMEROAQUI" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com/SEUINSTAGRAM" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="Instagram" className="w-6 h-6" />
                            </a>
                            <a href="https://facebook.com/SEUFACEBOOK" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2 - Links Rápidos */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
                        <ul className="flex flex-col gap-2">
                            <li><a href="#inicio" className="text-white hover:text-blue-500 transition-colors duration-200">Início</a></li>
                            <li><a href="#servicos" className="text-white hover:text-blue-500 transition-colors duration-200">Serviços</a></li>
                            <li><a href="#galeria" className="text-white hover:text-blue-500 transition-colors duration-200">Galeria</a></li>
                            <li><a href="#depoimentos" className="text-white hover:text-blue-500 transition-colors duration-200">Depoimentos</a></li>
                            <li><a href="#contato" className="text-white hover:text-blue-500 transition-colors duration-200">Contato</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3 - Nossos Serviços */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Nossos Serviços</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li>Banho e Tosa</li>
                            <li>Consultas Veterinárias</li>
                            <li>Hotel para Pets</li>
                            <li>Adestramento</li>
                            <li>Pet Taxi</li>
                            <li>Cuidados Especiais</li>
                        </ul>
                    </div>

                    {/* Coluna 4 - Contato */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contato</h4>
                        <p className="text-sm text-gray-400 flex items-center gap-2">
                            <img className="h-5 w-5" src="https://img.icons8.com/color/48/phone.png" alt="Telefone" />
                            (11) 99999-9999
                        </p>
                        <p className="text-sm text-gray-400 flex items-center gap-2">
                            <img className="h-5 w-5" src="https://img.icons8.com/color/48/new-post.png" alt="E-mail" />
                            contato@lunapetshop.com.br
                        </p>
                        <p className="text-sm text-gray-400 flex items-start gap-2">
                            <img className="h-5 w-5 mt-1" src="https://img.icons8.com/color/48/place-marker--v1.png" alt="Localização" />
                            <span>
                                Rua das Flores, 123 - Centro<br />
                                São Paulo, SP - CEP 01234-567
                            </span>
                        </p>

                        <div className="pt-4 border-t border-gray-500">
                            <p className="text-sm text-white font-semibold">Horário de Funcionamento:</p>
                            <p className="text-sm text-gray-400">Seg-Sex: 08:00-18:00</p>
                            <p className="text-sm text-gray-400">Sáb: 08:00-16:00 | Dom: 09:00-14:00</p>
                        </div>
                    </div>
                </div>


                <div className="border-t border-gray-600 mt-12 pt-8">
                   
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                      
                        <p className="text-sm text-gray-400 text-center md:text-left w-full md:w-auto">
                            © 2025 LunaPetShop. Todos os direitos reservados.
                        </p>

                       
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                            <span>🏆 Nota 5⭐ no Google</span>
                            <span>📱 500+ Clientes Satisfeitos</span>
                            <span>🩺 Profissionais Certificados</span>
                        </div>
                    </div>

                
                    <div className="mt-6">
                        <p className="text-sm text-gray-300 text-center">
                            Desenvolvido por Lidiane Santos - Desenvolvedora Front-End
                        </p>
                    </div>
                </div>

            </div>
        </section>

    )
}
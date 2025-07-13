

export function Contact() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Entre em Contato</h2>
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
                                alt="Ícone telefone"
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
                                alt="Ícone telefone"
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
                </div>
            </div>
        </section>

    )
}
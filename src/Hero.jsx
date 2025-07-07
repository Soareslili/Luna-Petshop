import Logo from './assets/logo.png'
import Cachorro from './assets/cachorro1.png';
import Pata1 from './assets/pata1.png';
import Pata2 from './assets/pata2.png';
import Pata3 from './assets/pata3.png';
import Pata4 from './assets/pata4.png';




export function Hero() {
    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white  z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-25">
                    <img src={Logo} alt="Logo Luna Petshop" className="w-25 h-25 mb-2" />

                    <nav className="hidden md:flex items-center space-x-8">
                        <a className="text-foreground hover:text-blue-500 transition-colors duration-200 font-medium" href="#home">Home</a>
                        <a className="text-foreground hover:text-blue-500 transition-colors duration-200 font-medium" href="#sobre">Sobre</a>
                        <a className="text-foreground hover:text-blue-500 transition-colors duration-200 font-medium" href="#servicos">Serviços</a>
                        <a className="text-foreground hover:text-blue-500 transition-colors duration-200 font-medium" href="#contato">Contato</a>
                        <a
                            className="text-white font-medium text-sm px-3 py-2 bg-blue-500 rounded-md transition-transform duration-400 transform hover:scale-110"
                            href="#contato"
                        >
                            Entre em Contato
                        </a>
                    </nav>
                </div>
            </header>

            <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-32 overflow-hidden">
                <img src={Pata1} alt="pata-do-cachorro"
                    className="hidden md:block absolute left-[35%] top-[5%] w-40 opacity-60 rotate-12 pointer-events-none z-0"
                />
                <img src={Pata2} alt="pata-do-cachorro"
                    className="hidden md:block absolute right-[8%] top-[10%] w-40 opacity-50 -rotate-6 pointer-events-none z-0"
                />
                <img src={Pata3} alt="pata-do-cachorro"
                    className="hidden md:block absolute left-[45%] bottom-[10%] w-40 opacity-50 rotate-45 pointer-events-none z-0"
                />
                <img src={Pata4} alt="pata-do-cachorro"
                    className="hidden md:block absolute right-[4%] bottom-[17%] w-40 opacity-60 -rotate-12 pointer-events-none z-0"
                />

                <div className="md:w-1/2 flex justify-center z-20">
                    <img className="w-100 mt-6 mr-20" src={Cachorro} alt="Cachorro lateral direito" />
                </div>
                <div className="md:w-1/2 flex flex-col items-center md:items-center text-center mr-40 z-20">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-700 mb-6 leading-right">
                        Cuidado e Amor para
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
                            Seu Pet
                        </span>
                    </h1>
                    <p className="text-gray-700">
                        Oferecemos serviços completos de cuidados para seu animal de estimação com profissionais especializados e muito carinho.
                    </p>
                    <div className='mt-6 flex flex-col sm:flex-row gap-4'>
                        <a className='px-4 py-3 bg-blue-700 rounded-3xl text-white font-medium cursor-pointer transition-transform duration-400 transform hover:scale-110'>Agendar Consulta</a>
                        <a className=' px-4 py-3 bg-gradient-to-r from-blue-400 via-pink-300 to-purple-400 rounded-3xl text-white font-medium cursor-pointer transition-transform duration-400 transform hover:scale-110'>Nossos Serviços</a>
                    </div>
                </div>
            </section>
        </>
    )
}

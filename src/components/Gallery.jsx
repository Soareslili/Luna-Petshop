import InteractiveSelector from "../components/ui/interactive-selector";

const Galeria = () => {
  return (
    <section id="galeria" className="w-full min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
       

        <InteractiveSelector />
        <p className="text-lg text-gray-500 mt-10">✨ Mais de <span className="text-blue-600 font-bold">500 pets felizes</span> já passaram por nossos cuidados!</p>
      </div>
    </section>
  );
};

export default Galeria;

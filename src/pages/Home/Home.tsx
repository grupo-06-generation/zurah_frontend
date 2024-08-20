import { Link } from "react-router-dom";
import ListCategory from "../../components/Categories/ListCategory/ListCategory";
import Slider from "../../components/slider/Slider";

function Home() {
    return (
        <div className="min-h-screen bg-[#FAEBD7] flex flex-col items-center">
            <main className="flex-grow w-full p-12"> 
                
              
                <section id="home" className="mb-12">
                    <h2 className="font text-[#A0522D] text-3xl font-bold text-center pb-6">Novidades</h2>
                    <Slider />
                </section>

                <Link to={'/adicionar-categoria'}>
                    <button>
                        <a href="#categorias" className="text-[#A0522D] text-3xl font-bold">Categorias</a>
                    </button>
                </Link>

                <section id="categorias" className="mb-14">
                  
                    <div className="grid grid-cols-3 gap-10 mt-6">
                        <div className="relative">
                            <img src="src/assets/cenouras.jpg" alt="Cenouras" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-green-800 text-white text-center">Vegetais</div>
                        </div>
                        <div className="relative">
                            <img src="src/assets/couveflor.jpg" alt="Verduras" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-green-800 text-white text-center">Verduras</div>
                        </div>
                        <div className="relative">
                            <img src="src/assets/macaverde.jpg" alt="Frutas" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-green-800 bg-opacity-1 text-white text-center">Frutas</div>
                        </div>
                    </div>
                </section>

                <section id="promocoes">
                    <h2 className="text-[#A0522D] text-3xl font-bold">Promoções</h2>
                    <div className="grid grid-cols-3 gap-8 mt-4">
                        <div className="relative">
                            <img src="src/assets/frutinhas-veg.jpg" alt="Vegetais e frutas" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">Mix de frutas e vegetais</div>
                        </div>

                        <div className="relative">
                            <img src="src/assets/bananas.jpg" alt="Bananas" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">Frutas em época de colheita</div>
                        </div>

                        <div className="relative">
                            <img src="src/assets/legumes-verduras.png" alt="Cenouras" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">Oferta de combos</div>
                        </div>
                    </div>
                </section>
            </main>
            <ListCategory />
        </div>
    );
}

export default Home;
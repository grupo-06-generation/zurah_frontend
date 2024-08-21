import { Link } from "react-router-dom";
import ListCategory from "../../components/Categories/ListCategory/ListCategory";
import Slider from "../../components/slider/Slider";
import ListProduct from "../../components/Products/ListProduct/ListProduct";

function Home() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-[##FFF8EB] flex flex-col items-center">
      <main className="flex-grow w-full p-0">
        <section id="home" className="mb-12">
          <Slider />

        </section>
        <div className="flex-grow w-full p-14">
          <Link to={"/adicionar-categoria"}>
            <button>
              <a
                href="#categorias"
                className="text-[#A0522D] text-3xl font-bold"
              >
                Categorias
              </a>
            </button>
          </Link>

          <section id="categorias" className="mb-14">
            <div className="grid grid-cols-3 gap-10 mt-6">
              <div className="relative">
                <img
                  src="src/assets/cenouras.jpg"
                  alt="Cenouras"
                  className="w-full h-40 object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-green-800 text-white text-center opacity-65">
                  Vegetais
                </div>
              </div>
              <div className="relative">
                <img
                  src="src/assets/couveflor.jpg"
                  alt="Verduras"
                  className="w-full h-40 object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-green-800 text-white text-center">
                  Verduras
                </div>
              </div>
              <div className="relative">
                <img
                  src="src/assets/macaverde.jpg"
                  alt="Frutas"
                  className="w-full h-40 object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-green-800 bg-opacity-1 text-white text-center">
                  Frutas
                </div>
              </div>
            </div>
          </section>

          <section id="promocoes">
            <h2 className="text-[#A0522D] text-3xl font-bold">Promoções</h2>
            <div className="grid grid-cols-3 gap-8 mt-4">
              <div className="relative">
                <img
                  src="src/assets/frutinhas-veg.jpg"
                  alt="Vegetais e frutas"
                  className="w-full h-40 object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">
                  Mix de frutas e vegetais
                </div>
              </div>

              <div className="relative">
                <img
                  src="src/assets/bananas.jpg"
                  alt="Bananas"
                  className="w-full h-40 object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">
                  Frutas em época de colheita
                </div>
              </div>

              <div className="relative">
                <img
                  src="src/assets/legumes-verduras.png"
                  alt="Cenouras"
                  className="w-full h-40 object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">
                  Oferta de combos
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ListCategory />
=======
    <div className="min-h-screen bg-[#FFFBF7] flex flex-col items-center">
      <main className=" w-full p-0"></main>
          <Slider />
      <ListProduct />
>>>>>>> a60217f6bedf9910eb3d9182298231f9ec75baad
    </div>
  );
}

export default Home;

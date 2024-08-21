import { Link } from "react-router-dom";
import CarroselProduct from "../../components/Carrosel/CarroselProduct";
import ListCategory from "../../components/Categories/ListCategory/ListCategory";
import Slider from "../../components/slider/Slider";

function Home() {
  return (
    <div className="min-h-screen bg-[#FAEBD7] flex flex-col items-center">
      <main className="flex-grow w-full p-0">
        <section id="home" className="mb-12">
          <Slider />
        </section>

        <div className="flex-grow w-full p-14 flex flex-col items-center pb-6">
          <Link to={"/adicionar-categoria"}>
            <button>
              <a
                href="#categorias"
                className="text-[#A0522D] text-3xl font-bold m-5"
              >
                Categorias
              </a>
            </button>
          </Link>

          {/* Produtos */}
          <div className="w-full flex flex-col items-center">
            {/* Grid de Produtos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-3/4 ">
              {/* Produto 1 */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Produto"
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="absolute bottom-0 left-0 w-full bg-green-800 text-white text-center">
                  Vegetais
                </div>
              </div>

              {/* Produto 3 */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                <img
                  src="https://i.pinimg.com/564x/61/a3/14/61a31493dab5031c56fb79d232aacc4f.jpg"
                  alt="Produto"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Manga</h3>
                <p className="text-gray-700 mb-2">R$ 150,00</p>
                <button className="w-full p-2 bg-orange-500 text-white rounded">
                  Comprar
                </button>
              </div>

              {/* Produto 4 */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Produto"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Manga</h3>
                <p className="text-gray-700 mb-2">R$ 250,00</p>
                <button className="w-full p-2 bg-orange-500 text-white rounded">
                  Comprar
                </button>
              </div>

              {/* Adicione mais produtos conforme necessário */}
            </div>
          </div>

          <CarroselProduct />

          {/* Produtos */}
          <div className="w-full flex flex-col items-center">
            {/* Grid de Produtos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-3/4 ">
              {/* Produto 1 */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Produto"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Banana</h3>
                <p className="text-gray-700 mb-2">R$ 100,00</p>
                <button className="w-full p-2 bg-orange-500 text-white rounded">
                  Comprar
                </button>
              </div>

              {/* Produto 2 */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Produto"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Manga</h3>
                <p className="text-gray-700 mb-2">R$ 200,00</p>
                <button className="w-full p-2 bg-orange-500 text-white rounded">
                  Comprar
                </button>
              </div>

              {/* Produto 3 */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Produto"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Manga</h3>
                <p className="text-gray-700 mb-2">R$ 150,00</p>
                <button className="w-full p-2 bg-orange-500 text-white rounded">
                  Comprar
                </button>
              </div>

              {/* Produto 4 */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Produto"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Manga</h3>
                <p className="text-gray-700 mb-2">R$ 250,00</p>
                <button className="w-full p-2 bg-orange-500 text-white rounded">
                  Comprar
                </button>
              </div>

              {/* Adicione mais produtos conforme necessário */}
            </div>
          </div>
        </div>
      </main>
      <ListCategory />
      </div>
  );
}

export default Home;
import { Link } from "react-router-dom";
import CarroselProduct from "../../components/Carrosel/CarroselProduct";
import ListCategory from "../../components/Categories/ListCategory/ListCategory";
import Slider from "../../components/slider/Slider";
import CategoryConsumer from "../../components/categoryConsumer/CategoryConsumer";
import ListProduct from "../../components/Products/ListProduct/ListProduct";


function Home() {
  return (
    
    <div className="min-h-screen bg-[#FFFBF7] flex flex-col items-center">
      <main className="flex-grow w-full p-0">
        <section id="home" className="mb-12">
          <Slider />
        </section>

       
        <CategoryConsumer />

        
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

      

          <CarroselProduct />

          <ListProduct />
        </div>
      </main>
      <ListCategory />
    </div>
  );
}

export default Home;
import { Link } from "react-router-dom";
import CarroselProduct from "../../components/Carrosel/CarroselProduct";
import ListCategory from "../../components/Categories/ListCategory/ListCategory";
import CategoryConsumer from "../../components/categoryConsumer/CategoryConsumer";
import Rolagem from "../../components/Slider/Rolagem";
import ListaProductHome from "@/components/Products/ListProduct/ListaProductHome";
import { Search } from "lucide-react";
import ProductsByCategory from "@/components/productsByCategory/ProductsByCategory";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#ffffff] flex flex-col items-center">
        <main className="flex-grow w-5/6 p-0">
          <section id="home" className="mb-12">
            <Rolagem />
          </section>

          <div className="flex-grow w-full p-14 flex flex-col items-center pb-6">
            <CategoryConsumer />

            <ListaProductHome />

            <CarroselProduct />
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;

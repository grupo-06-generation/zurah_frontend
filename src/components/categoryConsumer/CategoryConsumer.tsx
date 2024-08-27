import { BadgePercent, Bean, Beef, Carrot, Milk, Vegan } from "lucide-react";
import { Link } from "react-router-dom";

function CategoryConsumer() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap mb-24">
        <div className="flex flex-col border-b-[1px] w-96 sm:w-full mb-6 sm:mb-3 ml-10">
          <h2 className="text-xl text-olive leading-3 font-medium">
            Compre por
          </h2>
          <h1 className="text-3xl text-[#757575] font-medium">Categorias</h1>
        </div>
        <div className="md:w-11/12 md:h-48 h-20 w-72 flex sm:flex-row flex-wrap justify-between items-center sm:mt-6 sm:mb-1 mb-28">
          <div className="flex flex-col items-center">
            <Link to={`/products-cat/56`}>
              <div className="sm:w-36 sm:h-36 w-20 h-20 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105">
                <BadgePercent className="text-olive sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]" />
              </div>
            </Link>
            <h2 className="sm:text-[14px] text-[10px] py-6 font-semibold text-olive">
              OFERTAS
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <Link to={"/products-cat/57"}>
              <div className="md:w-36 md:h-36 w-20 h-20 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105">
                <Vegan className="text-olive sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]" />
              </div>
            </Link>
            <h2 className="sm:text-[14px] text-[10px] py-6 font-semibold text-olive">
              ORGÂNICOS
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <Link to={"/products-cat/58"}>
              <div className="sm:w-36 sm:h-36 w-20 h-20 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105">
                <Carrot className="text-olive sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]" />
              </div>
            </Link>
            <h2 className="sm:text-[14px] text-[10px] py-6 font-semibold text-olive">
              HORTIFRUTI
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <Link to={"/products-cat/55"}>
              <div className="sm:w-36 sm:h-36 w-20 h-20 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105">
                <Bean className="text-olive sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]" />
              </div>
            </Link>
            <h2 className="sm:text-[14px] text-[10px] py-6 font-semibold text-olive">
              CEREAIS
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <Link to={"/products-cat/59"}>
              <div className="sm:w-36 sm:h-36 w-20 h-20 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105">
                <Milk className="text-olive sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]" />
              </div>
            </Link>
            <h2 className="sm:text-[14px] text-[10px] py-6 font-semibold text-olive">
              FRIOS E LATICÍNIOS
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryConsumer;

import { BadgePercent, Bean, Beef, Carrot, Milk, Vegan } from "lucide-react";
import { Link } from "react-router-dom";

function CategoryConsumer() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap mb-24">
        <div className="flex flex-col flex-wrap border-b-[1px] w-[1200px] mb-9">
          <h2 className="text-[20px] text-olive leading-3 font-medium">
            Compre por
          </h2>
          <h1 className="text-[30px] text-[#757575] font-medium">Categorias</h1>
        </div>
        <div className="w-[1200px] h-[200px] flex flex-row justify-between items-center mt-4">
          <div className="flex flex-col items-center">
            <Link to={`/products-cat/56`}>
              <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105">
                <BadgePercent className="text-olive w-[80px] h-[80px]" />
              </div>
            </Link>
            <h2 className="text-[14px] py-4 font-semibold text-olive">
              OFERTAS
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <Link to={"/products-cat/57"}>
              <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105">
                <Vegan className="text-olive w-[80px] h-[80px]" />
              </div>
            </Link>
            <h2 className="text-[14px] py-4 font-semibold text-olive">
              ORGÂNICOS
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <Link to={"/products-cat/58"}>
              <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105">
                <Carrot className="text-olive w-[80px] h-[80px]" />
              </div>
            </Link>
            <h2 className="text-[14px] py-4 font-semibold text-olive">
              HORTIFRUTI
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <Link to={"/products-cat/55"}>
              <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105">
                <Bean className="text-olive w-[80px] h-[80px]" />
              </div>
            </Link>
            <h2 className="text-[14px] py-4 font-semibold text-olive">
              CEREAIS
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <Link to={"/products-cat/59"}>
              <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out hover:scale-105">
                <Milk className="text-olive w-[80px] h-[80px]" />
              </div>
            </Link>
            <h2 className="text-[14px] py-4 font-semibold text-olive">
              FRIOS, QUEIJOS E<br />
              LATICÍNIOS
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryConsumer;

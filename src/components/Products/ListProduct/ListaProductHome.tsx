import { useEffect, useState } from "react";
import Product from "../../../models/Product";
import { buscar } from "../../../services/Service";
import { TailSpin } from "react-loader-spinner";
import CardProductHome from "../CardProduct/CardProductHome";
import { Separator } from "@/components/ui/separator";
import { toastAlert } from "@/utils/toastAlert";

function ListaProductHome() {
  const [products, setProducts] = useState<Product[]>([]);

  async function buscarProducts() {
    try {
      await buscar("/product", setProducts, {});
    } catch (error: any) {
      toastAlert("Erro ao buscar produtos", "erro");
    }
  }

  useEffect(() => {
    buscarProducts();
  }, []);

  return (
    <>
      <div className="sm:mt-32 lg:mt-1">
        <h1 className="font-semibold tracking-tight text-olive text-[30px]">
          CONFIRA ALGUNS PRODUTOS
        </h1>
        <p className="text-[17px] text-muted-foreground flex justify-center">
          Uma lista especial de produtos selecionados
        </p>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full my-6"
      ></div>
      {products.length === 0 && (
        <div className="flex justify-center items-center m-5">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <div className="lg:flex lg:flex-wrap grid grid-cols-2 columns-2 md:grid-cols-4 md:columns-4 mt-4 mb-30 md:gap-6 gap-8 justify-between">
        {products.map((product) => (
          <div key={product.id} className="lg:h-[400px] lg:min-w-[200px] ">
            <CardProductHome product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ListaProductHome;

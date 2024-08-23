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
            await buscar('/product', setProducts, {});
        } catch (error: any) {
            toastAlert('Erro ao buscar produtos', 'erro');
        }
    }
  
    useEffect(() => {
        buscarProducts();
    }, []);

    return (
        <>
            <div className="m-5">
                <h1 className="font-semibold tracking-tight text-olive text-[30px]">CONFIRA ALGUNS PRODUTOS</h1>
                <p className="text-[17px] text-muted-foreground flex justify-center">Uma lista especial de produtos selecionados</p>
            </div>
            <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-6"></div>
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
            <div className='container mt-4 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products.map((product) => (
                    <CardProductHome key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default ListaProductHome;

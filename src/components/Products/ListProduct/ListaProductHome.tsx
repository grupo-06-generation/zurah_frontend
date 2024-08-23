import { useEffect, useState } from "react";
import Product from "../../../models/Product";
import { buscar } from "../../../services/Service";
import { TailSpin } from "react-loader-spinner";
import CardProductHome from "../CardProduct/CardProductHome";
import { Separator } from "@/components/ui/separator";

function ListaProductHome() {
    const [products, setProducts] = useState<Product[]>([]);
  
    async function buscarProducts() {
        try {
            await buscar('/product', setProducts, {});
        } catch (error: any) {
            alert('Erro ao buscar produtos');
        }
    }
  
    useEffect(() => {
        buscarProducts();
    }, []);

    return (
        <>
            <Separator className="mt-40"></Separator>
            <div className="m-5 space-y-3">
                <h1 className="text-5xl font-semibold tracking-tight">Confira alguns produtos</h1>
                <p className="text-lg text-muted-foreground">Uma lista especial de produtos selecionados</p>
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

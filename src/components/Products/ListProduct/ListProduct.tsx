import { useEffect, useState } from "react";
import Product from "../../../models/Product";
import CardProduct from "../CardProduct/CardProduct";
import { buscar } from "../../../services/Service";
import { TailSpin } from "react-loader-spinner";

function ListProduct() {
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

    // Função que será chamada após a exclusão
    const handleDeleteSuccess = () => {
        buscarProducts(); // Atualiza a lista de produtos
    };

    return (
        <>
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
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {products.map((product) => (
                    <CardProduct 
                        key={product.id} 
                        product={product} 
                        onDeleteSuccess={handleDeleteSuccess} // Passa a função para os cards
                    />
                ))}
            </div>
        </>
    );
}

export default ListProduct;

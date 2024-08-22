import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../models/Product";
import { buscar } from "../../services/Service";
import CardProduct from "../../components/../components/Products/CardProduct/CardProduct";
import { TailSpin } from "react-loader-spinner";

function ListProductByCategory() {
    const { id } = useParams<{ id: string }>(); // Pegando o ID da categoria via URL
    const [products, setProducts] = useState<Product[]>([]);

    async function buscarProdutos() {
        try {
            await buscar(`/category/${id}/products`, setProducts, {});
        } catch (error: any) {
            alert('Erro ao buscar produtos');
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [id]);

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
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {products.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default ListProductByCategory;

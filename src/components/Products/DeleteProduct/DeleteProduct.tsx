import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Product from "../../../models/Product";
import { buscar, deletar } from "../../../services/Service";


function DeleteProduct() { 
    const [product, setProduct] = useState<Product>({} as Product);

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        try {
            await buscar(`/product/${id}`, setProduct, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente.');
                handleLogout();
            } else {
                alert('Erro ao buscar produto.');
            }
        }
    }

    useEffect(() => {
        if (!token) {
            alert('Você precisa estar logado.');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate("/produtos");
    }

    async function deletarProduct() {
        try {
            await deletar(`/product/${id}`, {
                headers: {
                    'Authorization': token
                }
            });

            alert('Produto deletado com sucesso.');
        } catch (error) {
            alert('Erro ao apagar o produto.');
        }

        retornar();
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a produto a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-[#843C0A] text-white font-bold text-2xl'>Produto</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{product.name}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-orange-500 hover:bg-orange-800 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-green-800 hover:bg-orange-800 flex items-center justify-center' onClick={deletarProduct}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteProduct;

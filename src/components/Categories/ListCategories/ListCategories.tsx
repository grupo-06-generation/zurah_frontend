import { useContext, useEffect, useState } from "react"
import Categoria from "../../../models/Category"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from 'react-loader-spinner';

function ListCategories() {

    const [categories, setCategories] = useState<Categoria[]>([]);

    let navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function getCategories() {
        try {
            await buscar('/categorias', setCategories, {
                headers: { Authorization: token},
            });
        } catch (error : any) {
            if(error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        getCategories();
    }, [categories.length]);
    
  return (
    <>
        {categories.length === 0 && (
        <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}

        <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat) => (
                <>
                    {/* <CardCategories key={cat.id} category={cat} /> */}
                    <p>adsd</p>
                </>
                ))}
            </div>
            </div>
        </div>
    </>
  )
}

export default ListCategories
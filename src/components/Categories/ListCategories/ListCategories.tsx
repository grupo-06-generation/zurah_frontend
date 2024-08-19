import { useEffect, useState } from "react"
import Categoria from "../../../models/Category"
import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { DNA } from 'react-loader-spinner';

function ListCategories() {

    const [categories, setCategories] = useState<Categoria[]>([]);

    let navigate = useNavigate();

    async function getCategories() {
        try {
            await buscar('/categorias', setCategories, {
            });
        } catch (error : any) {
            alert(error);
        }
    }

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
                    
                </>
                ))}
            </div>
            </div>
        </div>
    </>
  )
}

export default ListCategories
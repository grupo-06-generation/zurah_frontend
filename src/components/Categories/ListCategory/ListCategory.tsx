import { useEffect, useState } from "react";
import Category from "../../../models/Category";
// import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardCategory from "../cardCategory/CardCategory";


function ListCategory() {

    const [category, setCategory] = useState<Category[]>([]);

    // let navigate = useNavigate();

    async function getCategory() {
        try {
            await buscar('/category', setCategory, {
            });
        } catch (error : any) {
            alert(error);
        }
    }

    useEffect(() => {
        getCategory();
    }, [category.length]);
    
  return (
    <>
        {category.length === 0 && (
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
                {category.map((category) => (
                <>
                    {<CardCategory key={category.id} category={category} /> }
                    
                </>
                ))}
            </div>
            </div>
        </div>
    </>
  )
}

export default ListCategory;
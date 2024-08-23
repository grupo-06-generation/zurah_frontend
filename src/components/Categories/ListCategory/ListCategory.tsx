import { useEffect, useState } from "react";
import Category from "../../../models/Category";
// import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { TailSpin } from "react-loader-spinner";
import CardCategory from "../cardCategory/CardCategory";
import { toastAlert } from "@/utils/toastAlert";


function ListCategory() {

    const [category, setCategory] = useState<Category[]>([]);

    async function getCategory() {
        try {
            await buscar('/category', setCategory )
        } catch (error: any) {
            toastAlert(error, 'erro');
        }
    }

    useEffect(() => {
        getCategory();
    }, [category.length]);
    console.log(category);

    return (
        <>
            {category.length === 0 && (
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
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.map((category) => (
                            <>
                                {<CardCategory key={category.id} category={category} />}

                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListCategory;
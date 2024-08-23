// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Product from "../../../models/Product";
// import { buscar } from "../../services
// import { TailSpin } from "react-loader-spinner";
// import CardProduct from "../Products/CardProduct/CardProduct";

// function ListProductsByCategory() {
//     const { categoryId } = useParams<{ categoryId: string }>();
//     const [products, setProducts] = useState<Product[]>([]);

//     async function getProductsByCategory() {
//         try {
//             await buscar(`/category/${categoryId}/products`, setProducts);
//         } catch (error: any) {
//             alert(error);
//         }
//     }

//     useEffect(() => {
//         if (categoryId) {
//             getProductsByCategory();
//         }
//     }, [categoryId]);

//     return (
//         <>
//             {products.length === 0 && (
//                 <TailSpin
//                     visible={true}
//                     height="80"
//                     width="80"
//                     color="#4fa94d"
//                     ariaLabel="tail-spin-loading"
//                     radius="1"
//                     wrapperStyle={{}}
//                     wrapperClass=""
//                 />
//             )}

//             <div className="flex justify-center w-full my-4">
//                 <div className="container flex flex-col">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {products.map((product) => (
//                             <CardProduct key={product.id} product={product} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ListProductsByCategory;

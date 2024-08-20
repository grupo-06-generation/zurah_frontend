import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import Product from "../../../models/Product";
import CardProduct from "../CardProduct/CardProduct";
import { buscar } from "../../../services/Service";
import { TailSpin } from "react-loader-spinner";


function ListProduct() {
    const [Product, setProduct] = useState<Product[]>([]);
  
    // let navigate = useNavigate();
  
    async function buscarProduct() {
      try {
        await buscar('/product', setProduct, {});
      } catch (error: any) {
        alert('Erro ao buscar produtos');
        }
    }
  
    useEffect(() => {
      buscarProduct();
    }, []);
  
    return (
      <>
        {Product.length === 0 && (
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
          {Product.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
       
      </>
    );
  }
  
  export default ListProduct;
import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import Product from "../../../models/Product";
import CardProduct from "../CardProduct/CardProduct";
import { buscar } from "../../../services/Service";
import { Dna } from "react-loader-spinner";


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
          <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
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
import { AuthContext } from "@/contexts/AuthContext";
import Product from "@/models/Product";
import { buscar } from "@/services/Service";
import { toastAlert } from "@/utils/toastAlert";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import CardTest from "./CardTest";
import { TailSpin } from "react-loader-spinner";

function ProductsByCategory() {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const idNumber: number = parseInt(id);
  const { usuario } = useContext(AuthContext);

  async function buscarProducts() {
    try {
      await buscar("/product", setProducts, {});
    } catch (error: any) {
      toastAlert("Erro ao buscar produtos", "erro");
    }
  }

  useEffect(() => {
    buscarProducts();
  }, []);

  return (
    <Card className="container mx-auto max-w-screen-lg px-4 md:px-6 py-2 my-8">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="font-semibold tracking-tight text-olive text-[24px] sm:text-[30px]">
          Produtos por Categoria
        </CardTitle>
      </CardHeader>
      {products.length === 0 && (
        <div className="flex justify-center items-center">
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
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((product) => product.category?.id === idNumber)
          .map((filteredProduct) => (
            <CardTest key={filteredProduct.id} product={filteredProduct} />
          ))}
      </CardContent>
    </Card>
  );
}

export default ProductsByCategory;
import { Button } from "@/components/ui/button";
import Product from "../../models/Product";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { toastAlert } from "@/utils/toastAlert";

function ProductAbout() {
  const location = useLocation();
  const { product } = location.state || {}; // Pegando o produto do estado passado

  const navigate = useNavigate();
  const { adicionarProduto, authenticated } = useContext(AuthContext);

  function addToCart() {
    if (authenticated) {
      adicionarProduto(product);
      toastAlert("Produto adicionado ao carrinho", "sucesso");
    } else {
      toastAlert("Você precisa estar logado", "error");
    }
  }

  // Verifique se o produto está presente, senão redirecione ou exiba uma mensagem de erro
  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="">
        <img src={product.photo} alt={product.name} />
      </div>

      <Card>
        <CardHeader className="p-4">
          <CardTitle>{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2">
          <p className="text-xl font-semibold">R$ {product.price}</p>
        </CardContent>
        <CardFooter className="flex justify-center p-2 pb-4">
          <Button className="bg-[#843c0a]" onClick={addToCart}>
            <FaShoppingCart className="mr-2" />
            Adicionar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductAbout;

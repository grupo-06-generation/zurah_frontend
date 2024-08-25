import { Button } from "@/components/ui/button";
import Product from "../../models/Product";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { toastAlert } from "@/utils/toastAlert";
import { buscar } from "@/services/Service";

function ProductAbout() {
  const [product, setProduct] = useState<Product>({} as Product);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { adicionarProduto, authenticated } = useContext(AuthContext);

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
                toastAlert('O token expirou, favor logar novamente.', 'info');
                handleLogout();
            } else {
                toastAlert('Erro ao buscar produto.','erro');
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

  function addToCart() {
    if (authenticated) {
      adicionarProduto(product);
      toastAlert("Produto adicionado ao carrinho", "sucesso");
    } else {
      toastAlert("Você precisa estar logado", "error");
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex-col">
        <img src={product.photo} alt={product.name} />
      </div>

      <div>
        <h1>{product.name}</h1>
      </div>

      <CardHeader className="p-4">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <p className="text-xl font-semibold">R$ {product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex justify-center p-2 pb-4">
        <Button className="bg-[#843c0a]" onClick={addToCart}>
          <FaShoppingCart className="mr-2" />
          Adicionar
        </Button>
      </CardFooter>
    </div>
  );
}

export default ProductAbout;

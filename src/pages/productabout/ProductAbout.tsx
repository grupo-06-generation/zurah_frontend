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
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { toastAlert } from "@/utils/toastAlert";
import { buscar } from "@/services/Service";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

function ProductAbout() {
  const [product, setProduct] = useState<Product>({} as Product);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { adicionarProduto, authenticated } = useContext(AuthContext);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/product/${id}`, setProduct, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlert("O token expirou, favor logar novamente.", "info");
        handleLogout();
      } else {
        toastAlert("Erro ao buscar produto.", "erro");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setTotalPrice(product.price * quantity);
  }, [product.price, quantity]);

  function addToCart() {
    if (authenticated) {
      adicionarProduto({ ...product, quantity });
      toastAlert("Produto adicionado ao carrinho", "sucesso");
    } else {
      toastAlert("Você precisa estar logado", "error");
    }
  }

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev) => prev - 1);
  }
  // Verifique se o produto está presente, senão redirecione ou exiba uma mensagem de erro
  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="flex flex-col items-center pt-20 pb-14">
      <div className="w-full max-w-screen-lg flex flex-row">
        <div className="flex-1 max-w-md rounded-lg">
          <img
            src={product.photo}
            alt={product.name}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 mx-5">
          <Card className="rounded-sm max-w-full pt-10 ">
            <CardHeader className="p-4">
              <CardTitle className="text-[#843C0A]">{product.name}</CardTitle>
              <CardDescription className="line-clamp-2 pt-5">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2">
              <p className="text-xl font-semibold">
                R$ {totalPrice.toFixed(2)}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-2 pb-4">
              <div className="flex items-center">
                <Button
                  className="bg-gray-700 hover:bg-orange-500 "
                  onClick={decreaseQuantity}
                >
                  <FaMinus />
                </Button>
                <span className="px-4 text-xl">{quantity}</span>
                <Button
                  className="bg-gray-700 hover:bg-orange-500 "
                  onClick={increaseQuantity}
                >
                  <FaPlus />
                </Button>
              </div>
              <Button
                className="bg-[#843c0a] hover:bg-orange-500 ml-4"
                onClick={addToCart}
              >
                <FaShoppingCart className="mr-2" />
                Adicionar
              </Button>
            </CardFooter>
          </Card>

          <Alert className="mt-5 w-full max-w-screen-lg">
            <Terminal className="mr-2" />
            <AlertTitle>PRODUTO COM PESO VARIÁVEL</AlertTitle>
            <AlertDescription>
              O preço e a quantidade deste produto podem variar de acordo com o
              peso médio. O valor indicado é uma estimativa, e a quantidade
              final pode ser ajustada conforme o peso exato do produto no
              momento da pesagem.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default ProductAbout;

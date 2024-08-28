import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { toastAlert } from "@/utils/toastAlert";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

function ProductAbout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { adicionarProduto } = useContext(AuthContext);

  const { product } = location.state || {};
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * quantity);
    } else {
      navigate("/home");
      toastAlert("Produto não encontrado.", "erro");
    }
  }, [product, quantity, navigate]);

  function addToCart() {
    adicionarProduto({ ...product, quantity });
    toastAlert("Produto adicionado ao carrinho", "sucesso");
  }

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  return (
    <div className="flex flex-col items-center pt-[5rem] pb-[3.5rem]">
      <div className="w-full max-w-screen-lg flex flex-col lg:flex-row">
        <div className="flex-1 max-w-full lg:max-w-[25rem] rounded-lg">
          <img
            src={product.photo}
            alt={product.name}
            className="rounded-[rem] object-cover w-full h-auto px-[2rem]"
            
          />
        </div>
        <div className="flex-1 mx-[1.25rem] mt-[2rem] lg:mt-0">
          <Card className="rounded-sm max-w-full pt-[2.5rem]">
            <CardHeader className="p-[1rem]">
              <CardTitle className="text-[#843C0A] text-[2rem]">
                {product.name}
              </CardTitle>
              <CardDescription className="line-clamp-2 pt-[1.25rem] text-[1rem]">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-[0.5rem]">
              <p className="text-[1.5rem] font-semibold">
                R$ {totalPrice.toFixed(2)}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-[0.5rem] pb-[1rem]">
              <div className="flex items-center">
                <Button
                  className="bg-gray-700 hover:bg-orange-500"
                  onClick={decreaseQuantity}
                >
                  <FaMinus />
                </Button>
                <span className="px-[1rem] text-[1.5rem]">{quantity}</span>
                <Button
                  className="bg-gray-700 hover:bg-orange-500"
                  onClick={increaseQuantity}
                >
                  <FaPlus />
                </Button>
              </div>
              <Button
                className="bg-[#843c0a] hover:bg-orange-500 ml-[1rem]"
                onClick={addToCart}
              >
                <FaShoppingCart className="mr-[0.5rem]" />
                Adicionar
              </Button>
            </CardFooter>
          </Card>

          <Alert className="mt-[1.25rem] w-full max-w-screen-lg">
            <Terminal className="mr-[0.5rem]" />
            <AlertTitle className="text-[1.25rem]">PRODUTO COM PESO VARIÁVEL</AlertTitle>
            <AlertDescription className="text-[1rem]">
              O preço e a quantidade deste produto podem variar de acordo com
              o peso médio. O valor indicado é uma estimativa, e a quantidade
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

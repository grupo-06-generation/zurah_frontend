import { Button } from "@/components/ui/button";
import Product from "../../../models/Product";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext"; // Importando o AuthContext
import { toastAlert } from "@/utils/toastAlert";
import Img from "@/components/Img/Img";
import { useNavigate } from "react-router-dom";

interface CardProductHomeProps {
  product: Product;
}

function CardProductHome({ product }: CardProductHomeProps) {
  const navigate = useNavigate();
  const { adicionarProduto } = useContext(AuthContext); // Usando o AuthContext

  const [quantity, setQuantity] = useState(1);

  // Função para adicionar o produto ao carrinho usando o contexto
  function addToCart() {
    adicionarProduto({ ...product, quantity });
    toastAlert("Produto adicionado ao carrinho", "sucesso");
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  function handleCardClick() {
    navigate(`/informacaoproduto/${product.id}`, { state: { product } });
  }

  return (
    <div className="w-[270px]">
      <Card className="flex flex-col border border-gray-400 h-[388px]">
        <div
          className="relative w-full hover:cursor-pointer"
          onClick={handleCardClick}
        >
          <img
            className="w-full px-0 h-48 object-cover rounded-md"
            src={product.photo}
            alt={product.name}
          />
          <div className="absolute top-2 left-2 flex items-center bg-white rounded-lg py-1 px-2 bg-opacity-60">
            <Img
              notfoundsrc="https://i.pinimg.com/originals/e5/df/45/e5df457e8de5d0aae37691c00e8a672e.jpg"
              src={product.usuario?.photo}
              alt={product.usuario?.name}
              className="w-6 h-6 rounded-full border-2 border-white"
            />
            <span className="ml-2 text-gray-600 font-bold">
              {product.usuario?.name}
            </span>
          </div>
        </div>
        <CardHeader className="p-4">
          <CardTitle>{product.name}</CardTitle>
          <CardDescription className=" line-clamp-1">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2">
          <p className="text-xl font-semibold ml-2">
            R$ {product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center p-2">
          <div className="flex items-center bg-[#D1B69A] text-gray-700 rounded-lg mr-3">
            <button onClick={handleDecrease} className="pl-4 pr-2 py-1">
              <FaMinus size={10} />
            </button>
            <div className="relative flex items-center">
              <input
                type="text"
                value={quantity}
                id="quantidade"
                readOnly
                className="w-12 text-center py-2 bg-[#D1B69A] text-gray-800 pr-6"
              />
              <span className="absolute right-2 text-gray-700">kg</span>
            </div>
            <button onClick={handleIncrease} className="pr-4 pl-2 py-1">
              <FaPlus size={10} />
            </button>
          </div>
          <Button className="bg-[#843c0a]" onClick={addToCart}>
            <FaShoppingCart className="mr-2" />
            Adicionar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardProductHome;

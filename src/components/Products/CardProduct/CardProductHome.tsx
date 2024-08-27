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
import { ImgHTMLAttributes, useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { toastAlert } from "@/utils/toastAlert";
import Img from "@/components/Img/Img";
import { Link, useNavigate } from "react-router-dom";

interface CardProductHomeProps {
  product: Product;
}

function CardProductHome({ product }: CardProductHomeProps) {
  const navigate = useNavigate();
  const { adicionarProduto, authenticated } = useContext(AuthContext);

  const [quantity, setQuantity] = useState(1);

  function addToCart() {
    adicionarProduto(product);
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
    <div className="lg:w-72 w-28">
      <Card className="flex flex-col border border-gray-400 lg:h-96 h-56">
        <div
          className="relative w-full hover:cursor-pointer"
          onClick={handleCardClick}
        >
          <img
            className="lg:w-full w-72 px-0 lg:h-48 h-24 object-cover rounded-md"
            src={product.photo}
            alt={product.name}
          />
          <div className="absolute top-2 left-1 flex items-center bg-white rounded-lg py-1 px-1 lg:px-2 bg-opacity-60">
            <Img
              notfoundsrc="https://i.pinimg.com/originals/e5/df/45/e5df457e8de5d0aae37691c00e8a672e.jpg"
              src={product.usuario?.photo}
              alt={product.usuario?.name}
              className="lg:w-6 w-3 lg:h-6 h-3 rounded-full border-2 border-white"
            />
            <span className="ml-2 text-gray-600 font-bold text-[10px]">
              {product.usuario?.name}
            </span>
          </div>
        </div>
        <CardHeader className="lg:p-4 px-2 py-1">
          <CardTitle className="lg:text-lg text-sm font-semibold line-clamp-1 lg:line-clamp-3">
            {product.name}
          </CardTitle>
          {}
          <CardDescription className="line-clamp-1 text-xs">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="lg:px-4 px-2 py-1">
          <p className="lg:text-lg text-sm font-semibold ">
            R$ {product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="flex lg:p-2 p-1 lg:justify-center">
          <div className="flex items-center bg-[#D1B69A] text-gray-700 rounded-lg lg:mr-3  text-sm">
            <button
              onClick={handleDecrease}
              className="lg:pl-4 lg:pr-2 pl-2 pr-1 py-1"
            >
              <FaMinus size={6} />
            </button>
            <div className="relative flex items-center">
              <input
                type="text"
                value={quantity}
                id="quantidade"
                readOnly
                className="w-8 text-center py-2 bg-[#D1B69A] text-gray-800 pr-6 text-sm"
              />
              <span className="absolute right-0 text-gray-700 text-sm">kg</span>
            </div>
            <button
              onClick={handleIncrease}
              className="lg:pl-4 lg:pr-2 pl-2 pr-1 py-1"
            >
              <FaPlus size={6} />
            </button>
          </div>
          <Button className="bg-[#843c0a] w-9 h-9 lg:w-32" onClick={addToCart}>
            <FaShoppingCart className="content-center lg:mr-2 scale-150" />
            {}
            <span className="hidden lg:inline">Adicionar</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardProductHome;

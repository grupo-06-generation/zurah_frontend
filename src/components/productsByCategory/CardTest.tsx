import { Button } from "@/components/ui/button";
import Product from "@/models/Product";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { toastAlert } from "@/utils/toastAlert";

interface CardTestProps {
  product: Product;
}

export default function CardTest({ product }: CardTestProps) {
  const navigate = useNavigate();
  const { adicionarProduto, authenticated } = useContext(AuthContext);

  function handleCardClick() {
    navigate(`/informacaoproduto/${product.id}`, { state: { product } });
  }

  function addToCart() {
    adicionarProduto(product);
    toastAlert("Produto adicionado ao carrinho", "sucesso");
  }

  return (
    <div
      key={product.id}
      className="flex flex-col bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-xs sm:max-w-sm mx-auto" // Adicionando max-w-xs para largura menor em responsivo
    >
      <div onClick={handleCardClick} className="flex-shrink-0">
        <img
          src={product.photo}
          alt={product.name}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg md:text-2xl">{product.name}</h3>
        <p className="text-muted-foreground line-clamp-1">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-semibold text-xl">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <Button 
            onClick={addToCart}
            variant="outline"
            className="bg-green-700 text-white hover:bg-green-400"
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
}

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
      className="grid gap-4 bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg"
    >
      <div onClick={handleCardClick}>
        <img
          src={product.photo}
          alt={product.name}
          width={200}
          height={200}
          className="w-full aspect-square object-cover"
        />
      </div>
      <div className="p-4 grid gap-2">
        <h3 className="font-semibold text-2xl">{product.name}</h3>
        <p className="text-muted-foreground line-clamp-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between my-4">
          <span className="font-semibold text-xl">
            R$ {product.price.toFixed(2)}
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

import { Button } from "@/components/ui/button";
import Product from "../../../models/Product";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaShoppingCart } from "react-icons/fa";
import { ImgHTMLAttributes, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { toastAlert } from "@/utils/toastAlert";
import Img from "@/components/Img/Img";
interface CardProductHomeProps{
    product: Product;
}

function CardProductHome({product}: CardProductHomeProps) {

    const { adicionarProduto, authenticated } = useContext(AuthContext);

    function addToCart(){
        if( authenticated ){
            adicionarProduto(product);
            toastAlert("Produto adicionado ao carrinho", 'sucesso')
        } else {
            toastAlert("Você precisa estar logado", "error")
        }
    }


  return (
    <div className="w-[270px]">
        <Card className="flex flex-col items-center border border-gray-400">
            <div className="relative w-full">
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
                    <span className="ml-2 text-gray-600 font-bold">{product.usuario?.name}</span>
                </div>
            </div>
            <CardHeader className="p-4">
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
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
        </Card>
    </div>
  )
}

export default CardProductHome
import { Button } from "@/components/ui/button";
import Product from "../../../models/Product";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaShoppingCart } from "react-icons/fa";
interface CardProductHomeProps{
    product: Product;
}

function CardProductHome({product}: CardProductHomeProps) {
  return (
    <div className="w-[270px]">
        <Card className="flex flex-col items-center border border-gray-400">
            <div className="relative">
                <img 
                    className="w-full h-48 object-cover" 
                    src={product.photo} 
                    alt={product.name} 
                />
                <div className="absolute top-2 left-2 flex items-center bg-white rounded-lg py-1 px-2 bg-opacity-60">
                    <img 
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
                <Button className="bg-[#843c0a]">
                    <FaShoppingCart className="mr-2" />
                    Adicionar
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default CardProductHome
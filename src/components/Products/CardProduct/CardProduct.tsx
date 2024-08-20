import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Product from "../../../models/Product";

interface CardProductProps {
    product: Product;
}

function CardProduct({ product }: CardProductProps) {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white">
            <div className="relative">
                <img 
                    className="w-full h-48 object-cover" 
                    src={product.photo} 
                    alt={product.name} 
                />
                <div className="absolute top-2 left-2 flex items-center bg-white rounded-xl py-1 px-2 opacity-90">
                    <img 
                        src={product.user?.photo} 
                        alt={product.user?.name} 
                        className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <span className="ml-2 text-gray-700 font-bold">{product.user?.name}</span>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="flex flex-col py-2 justify-center">
                    <span className="font-bold text-xl mb-2">{product.name}</span>
                    <p className="font-bold text-sm mb-2 text-gray-600">{product.category?.name}</p>
                </div>
                <p className="text-gray-700 text-base text-center">{product.description}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span className="font-bold text-3xl mb-2">R$ {product.price.toFixed(2)}</span>
                <p className="text-gray-600 text-xs">Validade: {new Date(product.expire).toLocaleDateString()}</p>
            </div>
            <div className="px-6 pt-4 pb-4 flex justify-evenly">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {`Quantidade: ${product.quantity}`}
                </span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                    {`Região: ${product.region}`}
                </span>
            </div>
            <div className="px-6 pb-4 flex items-center justify-between">
                <div className="flex items-center">
                    <button onClick={handleDecrease} className="bg-gray-200 text-gray-700 pl-4 pr-2 py-1 rounded-l-lg">-</button>
                    <input 
                        type="text" 
                        value={quantity} 
                        readOnly 
                        className="w-12 text-center bg-gray-200 text-gray-700 py-1"
                    />
                    <button onClick={handleIncrease} className="bg-gray-200 text-gray-700 pr-4 pl-2 py-1 rounded-r-lg">+</button>
                </div>
                <button className="flex items-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700">
                    <FaShoppingCart className="mr-2" />
                    Adicionar
                </button>
            </div>
        </div>
    );
}

export default CardProduct;

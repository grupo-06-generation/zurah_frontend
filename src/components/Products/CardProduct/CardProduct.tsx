import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Product from "../../../models/Product";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface CardProductProps {
    product: Product;
}

function CardProduct({ product }: CardProductProps) {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(product.price);

    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setTotalPrice((prevTotal) => prevTotal + product.price);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setTotalPrice((prevTotal) => prevTotal - product.price);
        }
    };

    return (
        <div className="w-[300px] rounded-lg overflow-hidden shadow-lg m-4 bg-white">
            <div className="relative">
                <img 
                    className="w-full h-48 object-cover" 
                    src={product.photo} 
                    alt={product.name} 
                />
                <div className="absolute top-2 left-2 flex items-center bg-white rounded-xl py-1 px-2 opacity-90">
                    <img 
                        src={product.usuario?.photo} 
                        alt={product.usuario?.name} 
                        className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <span className="ml-2 text-gray-700 font-bold">{product.usuario?.name}</span>
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-4">
                    <Link to={`/deletar-produto/${product.id}`} className="bg-white rounded-xl py-1 px-2 opacity-90">
                        <FaTrashAlt />
                    </Link>
                    <Link to={`/editar-produto/${product.id}`} className="bg-white rounded-xl py-1 px-2 opacity-90">
                        <FaPen />
                    </Link>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="flex flex-col py-2 justify-center items-center">
                    <span className="font-bold text-3xl mb-2">{product.name}</span>
                    <p className="font-bold text-xs mb-2 text-gray-400">{product.category?.name}</p>
                </div>
                <p className="text-gray-700 text-base text-center">{product.description}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span className="font-bold text-3xl mb-2">R$ {totalPrice.toFixed(2)}</span>
                <p className="text-gray-600 text-xs">Validade: {new Date(product.expire).toLocaleDateString()}</p>
            </div>
            <div className="px-6 pt-4 pb-4 flex justify-evenly">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {`Quantidade: ${product.quantity}`}
                    <span>kg</span>
                </span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                    {`Região: ${product.region}`}
                </span>
            </div>
            <div className="px-6 pb-4 flex items-center justify-between ">
                <div className="flex items-center bg-gray-200 text-gray-700 rounded-lg">
                    <button onClick={handleDecrease} className="pl-4 pr-2 py-1">
                        <FaMinus size={20}/>
                    </button>
                    <div className="relative flex items-center">
                        <input 
                            type="text" 
                            value={quantity} 
                            readOnly 
                            className="w-12 text-center py-1 bg-gray-200 text-gray-700 pr-6" 
                        />
                        <span className="absolute right-2 text-gray-700">kg</span>
                    </div>
                    <button onClick={handleIncrease} className="pr-4 pl-2 py-1">
                        <FaPlus size={20}/>
                    </button>
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

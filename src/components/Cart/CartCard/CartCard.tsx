import { useContext, useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa6"
import Product from "../../../models/Product";
import { AuthContext } from "../../../contexts/AuthContext";

interface CartCardProps {
    item: Product;
}

function CartCard({ item }: CartCardProps) {

    function recalculatePrice(){
        const input = document.getElementById('kilos-quatidade') as HTMLInputElement | null;

        if(input !== null){
            let value = parseFloat(input.value);
            const newPrice = document.getElementById("price-cart-card") as HTMLElement | null;
    
            if(newPrice !== null) {
                newPrice.innerHTML = `R$${value * item.price}`;
            }
        }
    }

  return (
    <div className="p-2 flex items-center">
        <div className="flex items-center w-2/3">
            <img src={item.photo} alt="" className="w-[60px] h-[40px] rounded"/>
            <p className="ml-2 text-sm text-gray-500 font-medium truncate overflow-ellipsis ">{item.name}</p>
        </div>
        <div className="flex items-center gap-4 w-1/3 justify-end">
            <p className="ml-2 text-sm text-gray-500 font-medium" id="price-cart-card">R${item.price.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default CartCard;
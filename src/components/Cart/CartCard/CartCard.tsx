import { useContext, useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa6"
import Product from "../../../models/Product";
import { AuthContext } from "../../../contexts/AuthContext";

interface CartCardProps {
    id: number;
    item: Product;
}

function CartCard({ item, id }: CartCardProps) {
    
    const { diminuirQtdKg, aumentarQtdKg, kgItems } = useContext(AuthContext);
    const [kilos, setKilos] = useState<number>(kgItems[id]);

    const decreaseKilos = () => {
        diminuirQtdKg(item.id);
        setKilos(kgItems[id]);
        recalculatePrice();
    }

    const increaseKilos = () => {
        aumentarQtdKg(item.id);
        setKilos(kgItems[id]);
        recalculatePrice();
    }

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
            <img src={item.photo} alt="" className="min-w-[50px] h-[40px] rounded"/>
            <p className="ml-2 text-sm text-gray-500 font-medium truncate overflow-ellipsis ">{item.name}</p>
        </div>
        <div className="flex items-center gap-4 w-1/3 justify-end">
            <div className="flex items-center bg-gray-200 rounded px-2 text-xs">
            <FaMinus 
                size={10}
                onClick={decreaseKilos}    
            />
            <input type="text" className="bg-gray-200 w-[25px] h-[25px] text-center focus:outline-none text-black" value={kilos} id="kilos-quatidade"/>
            <p className='pr-2 text-gray-500'>Kg</p>
            <FaPlus 
                size={10} 
                onClick={increaseKilos}
            />
            </div>
            <p className="ml-2 text-sm text-gray-500 font-medium" id="price-cart-card"></p>
        </div>
    </div>
  )
}

export default CartCard;
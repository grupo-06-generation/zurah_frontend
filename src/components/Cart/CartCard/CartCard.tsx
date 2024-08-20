import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa6"

function CartCard() {

    const [kilos, setKilos] = useState<number>(0);

    const decreaseKilos = () => {
        setKilos((kilos) => kilos - 1)
    }

    const increaseKilos = () => {
        setKilos((kilos) => kilos + 1)
    }

  return (
    <div className="p-2 flex items-center">
        <div className="flex items-center w-2/3">
            <img src='src\assets\bananas.jpg' alt="" className="min-w-[50px] h-[40px] rounded"/>
            <p className="ml-2 text-sm text-gray-500 font-medium truncate overflow-ellipsis ">Banana nanica bem madura</p>
        </div>
        <div className="flex items-center gap-4 w-1/3 justify-end">
            <div className="flex items-center bg-gray-200 rounded px-2 text-xs">
            <FaMinus 
                size={10}
                onClick={decreaseKilos}    
            />
            <input type="text" className="bg-gray-200 w-[25px] h-[25px] text-center focus:outline-none after:content-['kg'] text-black" value={kilos}/>
            <p className='pr-2'>Kg</p>
            <FaPlus 
                size={10} 
                onClick={increaseKilos}
            />
            </div>
            <p className="ml-2 text-sm text-gray-500 font-medium">R$ 70,69</p>
        </div>
    </div>
  )
}

export default CartCard
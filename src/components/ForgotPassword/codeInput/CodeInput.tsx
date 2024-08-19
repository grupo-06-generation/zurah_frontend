import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

function CodeInput() {

  const {isLoading} = useContext(AuthContext);

  return (
    <>
      <div className="hidden lg:block lg:w-1/2 bg-cover"
              style={{ backgroundImage: "url('https://blog.7mboots.com.br/wp-content/uploads/2021/01/working-on-plantation-UJ9W6ZA-scaled.jpg')" }}>
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-3xl text-green-800 text-center font-medium mt-4 mb-8">Verificar sua identidade</p>
            <div className="mt-4 mb-6 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <p className="text-xs text-center text-gray-500 uppercase">Digite o código recebido em seu email</p>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
          <form action="">
          <div className="flex justify-center gap-4">
            <input type="number" className="px-1 py-4 w-[40px] text-center text-xl border-solid border-slate-300 border-2 rounded"/>
            <input type="number" className="px-1 py-4 w-[40px] text-center text-xl border-solid border-slate-300 border-2 rounded"/>
            <input type="number" className="px-1 py-4 w-[40px] text-center text-xl border-solid border-slate-300 border-2 rounded"/>
            <input type="number" className="px-1 py-4 w-[40px] text-center text-xl border-solid border-slate-300 border-2 rounded"/>
            <input type="number" className="px-1 py-4 w-[40px] text-center text-xl border-solid border-slate-300 border-2 rounded"/>
            <input type="number" className="px-1 py-4 w-[40px] text-center text-xl border-solid border-slate-300 border-2 rounded"/>
          </div>
          <div className="mb-2 mt-6 flex justify-center">
            <button className="font-bold py-2 px-4 w-56 text-white bg-green-500 rounded-md hover:bg-green-700 flex justify-center">
            {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
            /> :
                <span>Confirmar código</span>}
            </button>
          </div>
          </form>
      </div>
    </>
  )
}

export default CodeInput;
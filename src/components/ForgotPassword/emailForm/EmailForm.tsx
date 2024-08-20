import { ChangeEvent, Dispatch, useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

interface setEmailFoundProps {
    setEmailFound: (e: ChangeEvent<HTMLFormElement>) => void;
}

function emailForm({ setEmailFound } : setEmailFoundProps) {
    
    const {isLoading} = useContext(AuthContext);

    function teste(e: ChangeEvent<HTMLFormElement>){
        let valor = true;
        setEmailFound(e, valor);
        return true;
    }

    return (
        <>
            <div className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{ backgroundImage: "url('https://blog.7mboots.com.br/wp-content/uploads/2021/01/working-on-plantation-UJ9W6ZA-scaled.jpg')" }}>
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-3xl text-green-800 text-center font-medium mt-4 mb-8">Esqueceu sua senha?</p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <p className="text-xs text-center text-gray-500 uppercase">digite seu email para resetar a senha</p>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <form action="" onSubmit={() => setEmailFound()}>
                        <div className="mt-4">
                            <label className="block text-green-900 text-sm font-bold mb-2">E-mail</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" required />
                        </div>
                        <div className="m-8 flex justify-center">
                            <button className="font-bold py-2 px-4 w-56 text-white bg-green-500 rounded-md hover:bg-green-700 flex justify-center">
                            {isLoading ? <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                                <span>Resetar senha</span>}
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <Link to={'/login'} className="text-xs text-green-900 hover:text-green-500 uppercase">ou voltar para login</Link>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>

                    
                </div>
        </>
  )
}

export default emailForm
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  let navigate = useNavigate();

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
      {} as UsuarioLogin
    );
  
    const { usuario, handleLogin } = useContext(AuthContext);
  
    const {isLoading} = useContext(AuthContext);
  
    useEffect(() => {
      if (usuario.token !== "") {
          navigate('/home')
      }
  }, [usuario])
  
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-12 bg-[#FAEBD7]">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-3/4">
            <div className="hidden lg:block lg:w-1/2 bg-cover"
                style={{ backgroundImage: "url('https://blog.7mboots.com.br/wp-content/uploads/2021/01/working-on-plantation-UJ9W6ZA-scaled.jpg')" }}>
            </div>
            <div className="w-full p-8 lg:w-1/2">
                <img src="src/assets/zurah-logo-green.PNG" alt="" className="h-auto w-[150px] mx-auto"/>
                <p className="text-xl text-gray-600 text-center mt-4 mb-8">Bem vindo de volta!</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <p className="text-xs text-center text-gray-500 uppercase">faça o login com e-mail</p>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <form action="" onSubmit={login}>
                    <div className="mt-4">
                        <label className="block text-green-900 text-sm font-bold mb-2">E-mail</label>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" required value={usuarioLogin.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-green-900 text-sm font-bold mb-2">Senha</label>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" required value={usuarioLogin.password} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                    </div>
                    
                    <div className="flex justify-between mt-3">
                        <label className="inline-flex items-center text-xs text-gray-500">
                            <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4"/>
                            <span className="ml-2">Lembrar de mim</span>
                        </label>
                        <a href="#" className="text-xs text-green-900 hover:text-green-500">Esqueceu a senha?</a>
                    </div>
                    <div className="m-8 flex justify-center">
                        <button className="font-bold py-2 px-4 w-56 text-white bg-green-500 rounded-md hover:bg-green-700">
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span>}
                        </button>
                    </div>
                </form>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <Link to={'/register'} className="text-xs text-green-900 hover:text-green-500 uppercase">Ou Cadastrar-se</Link>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;

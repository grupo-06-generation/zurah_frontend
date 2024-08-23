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
    const { isLoading } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token !== "") {
            navigate("/home");
        }
    }, [usuario, navigate]);

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
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-3/4 relative">
        
                <div className="hidden lg:block lg:w-1/2 relative">
                    <div
                        className="bg-cover w-full h-full"
                        style={{
                            backgroundImage:
                                "url('https://blog.7mboots.com.br/wp-content/uploads/2021/01/working-on-plantation-UJ9W6ZA-scaled.jpg')",
                        }}
                    ></div>
                </div>

  
                <div className="w-full p-8 lg:w-1/2 relative z-20 bg-[#ffff]">
                    <img
                        src="https://i.imgur.com/KIEEiTe.png"
                        alt="Logo Zurah"
                        className="h-auto w-[200px] mx-auto relative z-20"
                    />
                    <p className="text-xl text-gray-700 text-center mt-4 mb-8 relative z-20">
                        Bem vindo de volta!
                    </p>
                    <div className="mt-4 flex items-center justify-between relative z-20">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <p className="text-xs text-center text-gray-500 uppercase">
                            Faça o login com e-mail
                        </p>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>

                    <form action="" onSubmit={login} className="relative z-20">
                        <div className="mt-4">
                            <label className="block text-gray-800 text-sm font-semibold mb-2">
                                E-mail
                            </label>
                            <input
                                className="bg-[#f3f3f3] text-gray-800 outline-none py-2 px-4 block w-full appearance-none"
                                type="email"
                                required
                                value={usuarioLogin.usuario}
                                name="usuario"
                                placeholder="email@email.com"
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    atualizarEstado(e)
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-800 text-sm font-semibold mb-2">
                                Senha
                            </label>
                            <input
                                className="bg-[#f3f3f3] text-gray-800 outline-none py-2 px-4 block w-full appearance-none"
                                type="password"
                                name="password"
                                required
                                value={usuarioLogin.password}
                                placeholder="Senha"
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    atualizarEstado(e)
                                }
                            />
                        </div>

                        <div className="flex justify-between mt-3">
                            <label className="inline-flex items-center text-xs text-gray-500">
                                <input type="checkbox" className="form-checkbox h-4 w-4" />
                                <span className="ml-2">Lembrar de mim</span>
                            </label>
                            <Link
                                to="/recuperar-senha"
                                className="text-xs text-orange-600 hover:text-orange-400"
                            >
                                Esqueceu a senha?
                            </Link>
                        </div>
                        <div className="m-8 flex justify-center">
                            <button className="font-bold py-2 px-4 w-56 text-[#ffff] rounded-md hover:bg-orange-500 flex justify-center bg-[#843c0a]">
                                {isLoading ? (
                                    <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    />
                                ) : (
                                    <span>Entrar</span>
                                )}
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-between relative z-20">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link
                            to="/register"
                            className="text-xs uppercase transition-transform duration-300 hover:scale-105 text-[#14532D] hover:text-[#22c55e] "
                        >
                            Ou Cadastrar-se
                        </Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#fffbf7] text-[#843C0A] pt-9">
            <div className="container mx-auto p-6">
                <div className="flex justify-between items-start space-x-6">


                    <div className="flex-1">
                        <Link to="/" className="block mb-3">
                            <img src="https://i.imgur.com/KIEEiTe.png" alt="Zurah Logo" className="h-[60px] w-auto" />
                        </Link>
                        <p className="text-[#843C0A]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nihil consequatur eaque.</p>
                    </div>

  
                    <div className="flex-1">
                        <h3 className="text-[#843C0A] mb-4 font-semibold">Páginas</h3>
                        <ul className="text-[#843C0A]">
                            <li className="mb-1 hover:text-[#a77e639d]">
                                <Link to={'/home'}>Principal</Link>
                            </li>
                            <li className="mb-1 hover:text-white">
                                <Link to={'/contact'}>Contato</Link>
                            </li>
                            <li className="mb-1 hover:text-white">
                                <Link to={'/sobre'}>Sobre Nós</Link>
                            </li>
                        </ul>
                    </div>

    
                    <div className="flex-1">
                        <h3 className="text-gray-50 mb-4 font-semibold">Newsletter</h3>
                        <form action="">
                            <input type="email" className="rounded-sm font-sans px-2 py-1 w-2/3 text-gray-800 mb-2" placeholder="email@email.com" required />
                            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-sm">Inscrever-se</button>
                        </form>
                    </div>
                </div>

                <div className="flex justify-center py-6">
                    <a href="#">
                        <img src="src/assets/redes-sociais/facebook.svg" alt="Facebook" className="w-8 h-8 mx-4 transition-transform transform hover:scale-125 duration-300 ease-in-out" />
                    </a>
                    <a href="#">
                        <img src="src/assets/redes-sociais/instagram.svg" alt="Instagram" className="w-8 h-8 mx-4 transition-transform transform hover:scale-125 duration-300 ease-in-out" />
                    </a>
                    <a href="#">
                        <img src="src/assets/redes-sociais/github.svg" alt="GitHub" className="w-8 h-8 mx-4 transition-transform transform hover:scale-125 duration-300 ease-in-out" />
                    </a>
                </div>

                <div className="text-center py-4 border-t-2">
                    <p>© Zurah 2024. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

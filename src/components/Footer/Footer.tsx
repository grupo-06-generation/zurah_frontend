
import { Link } from 'react-router-dom';

function Footer(){
    return(

        <footer className="bg-[#843C0A] text-white">

            <img src="" alt="" />

            <div className="grid grid-cols-12 p-14 pb-10 justify-center">

                <div className="col-span-4">
                    <span className="text-gray-100 font-bold font-['Linden_Hill'] text-[28px] hover:text-gray-300">
                        <Link to="/" className='h-full w-full'>
                            <img src="src/assets/zurah-logo.PNG" alt="" className="h-[40px] w-auto"/>
                        </Link>
                    </span>
                    <p className='w-3/4 mt-3 text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error nihil consequatur eaque. </p>
                </div>

                <div className="col-span-2">
                    {/* <h3 className="text-gray-50 mb-4 font-semibold">Categorias</h3> */}
                    {/* <ul className="text-gray-300">
                        <li className="mb-1 hover:text-white">
                            Sobre Nós
                        </li>
                        <li className="mb-1 hover:text-white">
                            Contato
                        </li>
                        <li className="mb-1 hover:text-white">
                            Frutas
                            
                        </li>
                    </ul> */}
                </div>

                <div className="col-span-2">
                    <h3 className="text-gray-50 mb-4 font-semibold">Páginas</h3>
                    <ul className="text-gray-300">
                        <li className="mb-1 hover:text-white">
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

                <div className="col-span-4">
                    <h3 className="text-gray-50 mb-4 font-semibold ">Newsletter</h3>
                    <form action="" >
                        <input type="email" className="mr-3 rounded-sm font-sans px-2 py-1 w-2/3 text-gray-800" placeholder='email@email.com' required/>
                        <button type="submit" className='bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-sm'>Inscrever-se</button>
                    </form>
                </div>
            </div>

            <div className='flex justify-center pb-10'>
                <a href="#">
                    <img src="src/assets/redes-sociais/facebook.svg" alt="" className="w-10 h-10 mx-4 transition-transform transform hover:scale-125 duration-300 ease-in-out"/>
                </a>
                <a href="#">
                    <img src="src/assets/redes-sociais/instagram.svg" alt="" className="w-10 h-10 mx-4 transition-transform transform hover:scale-125 duration-300 ease-in-out"/>
                </a>
                <a href="#">
                    <img src="src/assets/redes-sociais/github.svg" alt="" className="w-10 h-10 mx-4 transition-transform transform hover:scale-125 duration-300 ease-in-out"/>
                </a>
            </div>

            <div className="flex items-center justify-center p-6">
                <p>© 2024 Zurah. All rights reserved.</p>
            </div>

        </footer>
    )
}

export default Footer;
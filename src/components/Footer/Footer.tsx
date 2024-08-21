import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#fffbf7] text-white pt-9">
            <div className="container mx-auto p-6">
                <div className="flex justify-between items-start space-x-6">


                    <div className="flex-1">
                        <Link to="/" className="block mb-3">
                            <img
                                src="https://i.imgur.com/KIEEiTe.png"
                                alt="Zurah Logo"
                                className="h-[55px] w-auto"
                            />
                        </Link>
                        <p>
                        Conectando Sabor e Sustentabilidade<br/>
                        do Campo à Mesa.
                        </p>
                    </div>


                    <div className="flex-1">
                        <h3 className="mb-4 font-semibold text-[#843C0A]">Páginas</h3>
                        <ul className="text-white">
                            <li className="mb-1 hover:text-[#843C0A]">
                                <Link to={'/home'}>Principal</Link>
                            </li>
                            <li className="mb-1 hover:text-[#843C0A]">
                                <Link to={'/sobre'}>Sobre Nós</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="flex-wrap">
                        <h3 className="mb-4 font-semibold text-[#843C0A]">Newsletter</h3>
                        <form action="">
                            <input type="text" className=" bg-[#f3f3f3] font-sans px-2 py-1 w-2/3 text-[#843C0A] mb-2 outline-none  " placeholder="email@email.com " required />

                            <button type="submit" className="bg-[#843C0A] hover:bg-[#72401de0] text-[#ffff] px-3 py-1 rounded-lg mt-1 ">Inscrever-se</button>
                        </form>
                    </div>
                </div>

                <div className="flex justify-center py-6 ">

                    <ul className='flex flex-row gap-4'>
                        <li className='transition-transform transform hover:scale-125 duration-300 ease-in-out cursor-pointer'>
                            <a href="https://linktr.ee/projetozurah" target='_blank'>
                                <LinkedinLogo size={32} />
                            </a>
                        </li>

                        <li className='transition-transform transform hover:scale-125 duration-300 ease-in-out cursor-pointer'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                            <GithubLogo size={32} />
                            </a>
                            
                        </li>
                    </ul>
                </div>

                <div className="text-center py-4 border-t-[0.2px] border-[#c59e82a9]">
                    <p>© Zurah 2024. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

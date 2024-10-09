import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#FFFBF7] text-white pt-9">
            <div className="mx-auto p-6">
                <div className="flex flex-wrap flex-col md:flex-row justify-between items-start md:space-y-0 space-y-6">

                    <div className="flex-1 text-center sm:text-left">
                        <Link to="/" className="block mb-3">
                            <img
                                src="https://i.imgur.com/KIEEiTe.png"
                                alt="Zurah Logo"
                                className="h-[45px] w-auto mx-0 md:mx-0 "
                            />
                        </Link>
                        <p className='text-[#843C0A] text-justify'>
                            Conectando Sabor e Sustentabilidade<br />
                            do Campo à Mesa.
                        </p>
                    </div>


                    <div className="flex-1 text-center md:text-left">
                        <h3 className="mb-4 font-semibold text-[#843C0A]">Páginas</h3>
                        <ul className="text-[#843C0A]">
                            <li className="mb-1 hover:text-[#c45e16]">
                                <Link to={'/home'}>Principal</Link>
                            </li>
                            <li className="mb-1 hover:text-[#c45e16]">
                                <Link to={'/sobre'}>Sobre Nós</Link>
                            </li>
                            <li className="mb-1 hover:text-[#c45e16]">
                                <Link to={'/categorias'}>Categorias</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h3 className="mb-4 font-semibold text-[#843C0A]">Newsletter</h3>
                        <form action="">
                            <input type="email" className="bg-[#f3f3f3] font-sans px-2 py-1 w-full text-[#843C0A] mb-2 outline-none" placeholder="email@email.com" required />
                            <button type="submit" className="bg-[#843C0A] hover:bg-orange-500 text-white px-3 py-1 rounded-lg mt-1 w-full md:w-auto">Inscrever-se</button>
                        </form>
                    </div>
                </div>


                <div className="mt-8">
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-8 md:space-y-0">


                        <div className="text-center">
                            <h4 className="text-[#843C0A] mb-2 font-semibold">Formas de Pagamento</h4>
                            <img
                                src="https://img.irroba.com.br/filters:format(webp):fill(transparent):quality(80)/santinoj/catalog/bandeira2.png"
                                alt="Formas de Pagamento"
                                className="h-12 mx-auto"
                            />
                        </div>


                        <div className="text-center">
                            <h4 className="text-[#843C0A] mb-2 font-semibold">Loja Segura</h4>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0724/6171/3683/files/site_blindado_480x480.png?v=1678149994"
                                alt="Loja Segura"
                                className="h-12 mx-auto"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center py-6">
                    <ul className="flex flex-row gap-4">
                        <li className="transition-transform transform hover:scale-125 duration-300 ease-in-out cursor-pointer">
                            <a href="https://linktr.ee/projetozurah" target='_blank' rel="noopener noreferrer">
                                <LinkedinLogo size={32} color='#843C0A' />
                            </a>
                        </li>
                        <li className="transition-transform transform hover:scale-125 duration-300 ease-in-out cursor-pointer">
                            <a href="http://https://github.com/grupo-06-generation" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={32} color='#843C0A' />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-center text-gray-700 py-4 border-t-[0.2px] border-[#c59e82a9]">
                    <p>© Zurah 2024. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

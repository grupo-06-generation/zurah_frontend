import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#C9B09F] text-white pt-9">
            <div className="container mx-auto p-6">
                <div className="flex justify-between items-start space-x-6">


                    <div className="flex-1">
                        <Link to="/" className="block mb-3">
                            <img src="https://i.imgur.com/KIEEiTe.png" alt="Zurah Logo" className="h-[55px] w-auto" />
                        </Link>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsam error nihil consequatur eaque.</p>
                    </div>


                    <div className="flex-1">
                        <h3 className="mb-4 font-semibold text-[#843C0A]">Páginas</h3>
                        <ul className="text-white">
                            <li className="mb-1 hover:text-[#b3632d]">
                                <Link to={'/home'}>Principal</Link>
                            </li>
                            <li className="mb-1 hover:text-[#b3632d]">
                                <Link to={'/sobre'}>Sobre Nós</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="flex-wrap">
                        <h3 className="mb-4 font-semibold text-[#843C0A]">Newsletter</h3>
                        <form action="">
                            <input type="text" className="rounded-lg font-sans px-2 py-1 w-2/3 text-[#843C0A] mb-2 outline-none" placeholder="email@email.com " required />
                            <button type="submit" className="bg-[#843C0A] hover:bg-[#b3632d] text-white px-3 py-1 rounded-lg">Inscrever-se</button>
                        </form>
                    </div>
                </div>

                <div className="flex justify-center py-6 ">

                    <ul className='flex flex-row gap-4'>
                        <li className='transition-transform transform hover:scale-125 duration-300 ease-in-out cursor-pointer'>
                        <LinkedinLogo size={32} />
                        </li>

                        <li className='transition-transform transform hover:scale-125 duration-300 ease-in-out cursor-pointer'>
                        <GithubLogo size={32} />
                        </li>
                    </ul>
                </div>

                <div className="text-center py-4 border-t-[1px] border-[#843C0A] text-[#843C0A]">
                    <p>© Zurah 2024. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

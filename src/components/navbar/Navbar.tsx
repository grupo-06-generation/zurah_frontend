import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircle, MagnifyingGlass, Basket } from '@phosphor-icons/react';
import { toastAlert } from '../../utils/toastAlert';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const { authenticated, handleLogout } = useContext(AuthContext);
    let navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const logout = () => {
        handleLogout();
        toastAlert('Usuário deslogado com sucesso!', 'info');
        navigate('/login');
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
            buttonRef.current && !buttonRef.current.contains(event.target as Node)
        ) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='w-full bg-[#fffbf7] text-[#843C0A] py-4 px-8'>
                <div className="flex items-center justify-between">
                    <div className='flex items-center h-full w-[200px]'>
                        <Link to="/" className='h-full w-full'>
                            <img src="https://i.imgur.com/KIEEiTe.png" alt="Logo Zurah" className="h-[60px] w-auto" />
                        </Link>
                    </div>

                    <form action="">
                        <div className='relative flex items-center'>
                            <input
                                type="text"
                                placeholder="Digite o que você procura"
                                className="w-[440px] h-10 px-4 placeholder-[#843C0A] border-b-[1px] bg-transparent outline-none border-[#c59e82a9]"
                            />
                            <button
                                className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-transparent z-10'
                                type="submit"
                            >
                                <MagnifyingGlass size={24} />
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center space-x-4'>
                        <div className='relative'>
                            <div
                                className="hover:bg-[#e4e4e41e] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <Basket className="w-8 h-8 text-[#843C0A] flex items-center" />
                            </div>
                        </div>
                        <div className='relative'>
                            <div
                                className="hover:bg-[#e4e4e41e] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                                onClick={toggleDropdown}
                                ref={buttonRef}
                            >
                                <UserCircle className="w-8 h-8 text-[#843C0A] flex items-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {dropdownOpen && (
                <div ref={dropdownRef} className="absolute right-4 w-[150px] bg-gray-800 text-white rounded-lg mt-2">
                    <ul className="flex flex-col">
                        {authenticated ? (
                            <>
                                <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer rounded-lg">Configurações</li>
                                <li
                                    onClick={logout}
                                    className="border-t border-gray-700 hover:bg-gray-700 py-2 px-4 cursor-pointer rounded-lg"
                                >
                                    Sair
                                </li>
                            </>
                        ) : (
                            <Link to="/login" className="text-white no-underline">
                                <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer rounded-lg">
                                    Entrar
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            )}
            <div>
                <nav className="bg-[#a77e639d] text-white font-normal text-center py-2">
                    <ul className="flex justify-center">
                        <Link to={'/categorias'}>
                            <li className="hover:bg-[#8C5438] hover:scale-105 transition-transform py-2 px-4 cursor-pointer rounded-lg">Categorias</li>
                        </Link>
                        <li className="hover:bg-[#8C5438] hover:scale-105 transition-transform py-2 px-4 cursor-pointer rounded-lg">Promoções</li>
                        <Link to={'/cadastrar-produto'}>
                            <li className="hover:bg-[#8C5438] hover:scale-105 transition-transform py-2 px-4 cursor-pointer rounded-lg">Produtores</li>
                        </Link>
                        <Link to={'/produtos'}>
                            <li className="hover:bg-[#8C5438] hover:scale-105 transition-transform py-2 px-4 cursor-pointer rounded-lg">Produtos</li>
                        </Link>
                        <Link to={'/admin/zurah'}>
                            <li className="hover:bg-[#8C5438] hover:scale-105 transition-transform py-2 px-4 cursor-pointer rounded-lg">Cupons</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;

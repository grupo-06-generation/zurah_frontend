import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircle, MagnifyingGlass, Basket, OrangeSlice, Grains, Barn, Carrot, Cow } from '@phosphor-icons/react';
import { toastAlert } from '../../utils/toastAlert';
import { AuthContext } from '../../contexts/AuthContext';
import { Leaf, Tag } from 'phosphor-react';

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
            <div className='w-full bg-[#fffbf7] text-[#843C0A] py-4 px-8 pb-3'>
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
                                className="w-[440px] h-10 px-4 placeholder-[#843C0A] bg-[#f3f3f3] outline-none "
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
                            <Link
                                to="/carrinho"
                                className="hover:bg-[#e4e4e41e] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <Basket className="w-8 h-8 text-[#843C0A] flex items-center" />
                            </Link>
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
                <div ref={dropdownRef} className="absolute right-4 w-[150px] text-white rounded-lg bg-olive">
                    <ul className="flex flex-col">
                        {authenticated ? (
                            <>
                            <Link to='/admin/zurah'>
                                <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer rounded-lg">Configurações</li>
                                </Link>
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
            <section className='flex justify-center bg-[#fffbf7] border-b-[0.2px] border-[#c59e82a9] mb-5'>
                <div className=''>
                    <nav>
                        <ul className='flex flex-row gap-10'>


                        <Link to={'/categorias'}><li className='flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2'>
                                <Tag size={20} className='font-[21px] text-[#843C0A]' />
                                <p className='font-[21px] text-[#843C0A]'>Ofertas</p>
                            </li></Link>
                            
                            <li className='flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2'>
                                <Carrot size={20} className='font-[21px] text-[#843C0A]' />
                                <p className='font-[21px] text-[#843C0A]'>Hortifruti</p>
                            </li>

                            <li className='flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2'>
                                <Leaf size={20} className='font-[21px] text-[#843C0A]' />
                                <p className='font-[21px] text-[#843C0A]'>Orgânicos</p>
                            </li>
                            <li className='flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2'>
                                <Cow size={20} className='font-[21px] text-[#843C0A]' />
                                <p className='font-[21px] text-[#843C0A]'>Frios, Queijos e Laticínios</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircle, MagnifyingGlass, Basket } from '@phosphor-icons/react';
//.
function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    return (
        <>
            <div className='w-full bg-[#843C0A] text-white py-4 px-8' style={{ fontFamily: 'Linden Hill, sans-serif' }}>
                <div className="flex items-center justify-between">
                    <div className='font-normal text-[40px] flex items-center'>
                        <Link to="/" className="text-white no-underline">
                            Zurah
                        </Link>
                    </div>

                    <form action="" className='flex mx-4'>
                        <div className='relative flex items-center'>
                            <input
                                type="search"
                                placeholder="Digite o que você procura"
                                className="w-[440px] h-10 px-4 rounded-full bg-[#e4e4e41e] border-none focus:outline-none focus:border-none placeholder-[#ffffff5d] pr-12"
                            />
                            <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-transparent'>
                                <MagnifyingGlass size={24} />
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center space-x-4'>
                        <div className='text-[19px] flex items-center'>
                            <Link to="/sobre" className="">
                                Sobre
                            </Link>
                        </div>
                        <div className='text-[19px] flex items-center'>
                            <Link to="/contato" className="">
                                Contato
                            </Link>
                        </div>
                        <div className='text-[19px] flex items-center'>
                            <Link to="/login" className="">
                                Entrar
                            </Link>
                        </div>
                        <div className='relative'>
                            <div
                                className="hover:bg-[#e4e4e41e] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <UserCircle className="w-9 h-9 text-white flex items-center" />
                            </div>
                        </div>
                        <div className='relative'>
                            <div
                                className="hover:bg-[#e4e4e41e] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <Basket className="w-7 h-7 text-white flex items-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>
                {dropdownOpen && (
                    <div className="absolute right-4 w-[150px] bg-gray-800 text-white rounded-lg mt-2">
                        <ul className="flex flex-col">
                            <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer rounded-lg">Configurações</li>

                            <Link to="/login" className="text-white no-underline">
                                <li className="border-t border-gray-700 hover:bg-gray-700 py-2 px-4 cursor-pointer rounded-lg">
                                    Sair
                                </li>
                            </Link>

                        </ul>
                    </div>
                )}
            </div >
        </>
    );
};

export default Navbar;
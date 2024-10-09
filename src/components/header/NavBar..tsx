import React, { useState, useRef, useEffect, useContext } from 'react';
import { Leaf, MagnifyingGlass, Tag, UserCircle } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import { Basket, Carrot, CoffeeBean, Cow } from '@phosphor-icons/react';
import { LogOut, Menu } from 'lucide-react';
import { toastAlert } from '@/utils/toastAlert';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { authenticated, handleLogout } = useContext(AuthContext);  // Verifica o estado de autenticação
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const logout = () => {
    handleLogout();
    toastAlert("Usuário deslogado com sucesso!", "info");
    navigate("/login");
  };

  return (
    <nav className='bg-[#fffbf7] text-[#843C0A] py-4 px-4 hidden md:flex items-center justify-between'>
      <Link to="/">
        <img src="https://i.imgur.com/KIEEiTe.png" alt="Logo Zurah" className="h-[50px] w-auto" />
      </Link>
      <form action="/produtos" className="relative flex-grow max-w-lg mx-4">
        <input
          type="text"
          placeholder="Digite o que você procura"
          className="w-full h-10 px-4 placeholder-[#843C0A] bg-[#f3f3f3] outline-none rounded-xl"
        />
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-transparent z-10"
          type="submit"
          aria-label="Buscar"
        >
          <MagnifyingGlass size={24} />
        </button>
      </form>
      <div className="flex items-center space-x-4">
        <Link to="/carrinho">
          <Basket className="w-8 h-8 text-[#843C0A]" aria-label="Carrinho" />
        </Link>
        <div className="relative" ref={menuRef}>
          {authenticated ? (
            <>
              <button
                ref={buttonRef}
                onClick={() => setMenuOpen(!menuOpen)}
                className="hover:bg-[#e4e4e41e] rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="User Menu"
              >
                <UserCircle size={32} className="text-[#843C0A]" />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  <ul className="py-2">
                    <li>
                      <Link to="/perfil" className="block px-4 py-2 text-sm text-[#843C0A] hover:bg-gray-100">
                        Meu Perfil
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-[#843C0A] hover:bg-gray-100"
                      >
                        Sair
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 hover:bg-[#e4e4e41e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
            >
              <UserCircle size={32} className="text-[#843C0A]" />
              <p className="text-[#843C0A] text-sm">Entrar</p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavBarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const { authenticated, handleLogout } = useContext(AuthContext);

  const toggleMenu = () => setOpenMenu(prev => !prev);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setOpenMenu(false); 
  };

  return (
    <nav className="bg-[#fffbf7] text-[#843C0A] py-4 px-4 md:hidden flex items-center justify-between">
      <button
        onClick={toggleMenu}
        className="w-12 h-12 flex items-center justify-center rounded-full"
        aria-label="Abrir Menu"
      >
        <Menu className="w-8 h-8 text-[#843C0A]" />
      </button>
      <Link to="/" onClick={handleLinkClick}>
        <img src="https://i.imgur.com/ngKnHT7.png" alt="Logo Zurah" className="w-auto h-[60px] mb-6 mr-3 ml-2" />
      </Link>
      <Link to="/carrinho" onClick={handleLinkClick}>
        <Basket className="w-8 h-8 text-[#843C0A]" aria-label="Carrinho" />
      </Link>
      {openMenu && (
        <div className="fixed inset-0 bg-[#00000096]" onClick={() => setOpenMenu(false)}></div>
      )}
      <div
        ref={menuRef}
        className={`fixed h-full left-0 top-0 bg-[#fffbf7] text-[#843C0A] transition-all duration-300 overflow-hidden z-10 ${openMenu ? 'w-[280px]' : 'w-0'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            {authenticated ? (
              <>
                <Link
                  to="/perfil"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
                >
                  <UserCircle size={22} className="text-[#843C0A]" />
                  <p className="text-[#843C0A] text-[19px] hover:text-[#c45e16]">Configurações</p>
                </Link>
                <div
                  onClick={() => {
                    handleLogout();
                    toastAlert("Usuário deslogado com sucesso!", "info");
                    setOpenMenu(false);
                  }}
                  className="py-2 flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
                >
                  <LogOut size={22} className="text-[#843C0A]" />
                  <p className="text-[#843C0A] text-[19px] hover:text-[#c45e16]">Sair</p>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
              >
                <UserCircle size={25} className="text-[#843C0A]" />
                <p className="text-[#843C0A] text-[22px] hover:text-[#c45e16]">Entrar</p>
              </Link>
            )}
          </div>
          <div className="flex-1 p-4">
            <ul className="space-y-2 ">
              <li>
                <Link
                  to="/products-cat/62"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 p-2 cursor-pointer transition-colors duration-200"
                >
                  <Tag size={25} className="text-[#843C0A]" />
                  <p className="text-[22px] text-[#843C0A] hover:text-[#c45e16]">Ofertas</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/products-cat/58"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 hover:bg-[#e4e4e1e] p-2 cursor-pointer transition-colors duration-200"
                >
                  <Carrot size={25} className="text-[#843C0A]" />
                  <p className="text-[#843C0A] text-[22px] hover:text-[#c45e16]">Hortifruti</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/products-cat/55"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
                >
                  <CoffeeBean size={25} className="text-[#843C0A]" />
                  <p className="text-[#843C0A] text-[22px] hover:text-[#c45e16]">Cereais</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/products-cat/59"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
                >
                  <Cow size={25} className="text-[#843C0A]" />
                  <p className="text-[#843C0A] text-[22px] hover:text-[#c45e16]">Laticínios</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/products-cat/63"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
                >
                  <Leaf size={25} className="text-[#843C0A]" />
                  <p className="text-[#843C0A] text-[22px] hover:text-[#c45e16] ">Orgânicos</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar, NavBarMobile };
import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle, MagnifyingGlass, Basket, CoffeeBean, Cow } from "@phosphor-icons/react";
import { toastAlert } from "../../utils/toastAlert";
import { AuthContext } from "../../contexts/AuthContext";
import { Carrot, Leaf, LogOut, Menu, Tag } from "lucide-react";
import classNames from "classnames";

const DropdownMenu = ({ authenticated, onLogout }) => (
  <div className="z-[100] absolute right-4 w-[150px] text-[#fffbf7] rounded-xl bg-[#808000]">
    <ul className="flex flex-col">
      {authenticated ? (
        <>
          <Link
            to="/admin/zurah"
            className="flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
          >
            <UserCircle size={20} className="text-[#843C0A]" />
            <p className="text-[#843C0A]">Configurações</p>
          </Link>
          <li
            onClick={onLogout}
            className="border-t border-[#80800057] hover:bg-[#80800057] py-2 px-4 cursor-pointer rounded-xl"
          >
            Sair
          </li>
        </>
      ) : (
        <Link
          to="/login"
          className="flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
        >
          <UserCircle size={20} className="text-[#843C0A]" />
          <p className="text-[#843C0A]">Entrar</p>
        </Link>
      )}
    </ul>
  </div>
);

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const { authenticated, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const logout = () => {
    handleLogout();
    toastAlert("Usuário deslogado com sucesso!", "info");
    navigate("/login");
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-[#fffbf7] text-[#843C0A] py-4 px-4 hidden md:flex">
        <ul className="flex items-center space-x-8 justify-between w-full">
          <Link to="/">
            <img src="https://i.imgur.com/KIEEiTe.png" alt="Logo Zurah" className="h-[60px] w-auto" />
          </Link>
          <form action="/produtos" className="relative">
            <input
              type="text"
              placeholder="Digite o que você procura"
              className="w-[440px] h-10 px-4 placeholder-[#843C0A] bg-[#f3f3f3] outline-none rounded-xl"
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
            <div
              className="relative hover:bg-[#e4e4e41e] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
              onClick={toggleDropdown}
              ref={buttonRef}
              aria-label="Menu do Usuário"
            >
              <UserCircle className="w-8 h-8 text-[#843C0A]" />
            </div>
          </div>
        </ul>
      </nav>
      {dropdownOpen && (
        <DropdownMenu authenticated={authenticated} onLogout={logout} ref={dropdownRef} />
      )}
    </>
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

  return (
    <nav className="bg-[#fffbf7] text-[#843C0A] py-4 px-4 md:hidden">
      <ul className="flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="w-12 h-12 flex items-center justify-center rounded-full"
          aria-label="Abrir Menu"
        >
          <Menu className="w-8 h-8 text-[#843C0A]" />
        </button>
        <Link to="/">
          <img src="https://i.imgur.com/KIEEiTe.png" alt="Logo Zurah" className="h-[60px] w-auto" />
        </Link>
        <Link to="/carrinho">
          <Basket className="w-8 h-8 text-[#843C0A]" aria-label="Carrinho" />
        </Link>
      </ul>
      {openMenu && (
        <div className="fixed inset-0 bg-[#00000096]" onClick={() => setOpenMenu(false)}></div>
      )}
      <div
        ref={menuRef}
        className={classNames(
          "fixed h-full left-0 top-0 bg-[#fffbf7] text-[#843C0A] transition-all duration-300 overflow-hidden z-10",
          { "w-[280px]": openMenu, "w-0": !openMenu }
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            {authenticated ? (
              <>
                <Link
                  to="/admin/zurah"
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
                  className="py-2 flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200 bg"
                >
                  <LogOut size={22} className="text-[#843C0A] " />
                  <p className="text-[#843C0A] text-[19px] hover:text-[#c45e16]">Sair</p>
                </div>
              </>
            ) : (
              <Link
                to="/login"
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
                  to="/products-cat/56"
                  className="flex items-center gap-2 p-2 cursor-pointer transition-colors duration-200"
                >
                  <Tag size={25} className="text-[#843C0A]" />
                  <p className="text-[22px] text-[#843C0A] hover:text-[#c45e16]  ">Ofertas</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/products-cat/58"
                  className="flex items-center gap-2 hover:bg-[#e4e4e1e] p-2 cursor-pointer transition-colors duration-200"
                >
                  <Carrot size={25} className="text-[#843C0A]" />
                  <p className="text-[#843C0A] text-[22px] hover:text-[#c45e16]">Hortifruti</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/products-cat/55"
                  className="flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
                >
                  <CoffeeBean size={25} className="text-[#843C0A]" />
                  <p className="text-[#843C0A] text-[22px] hover:text-[#c45e16]">Cereais</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/products-cat/59"
                  className="flex items-center gap-2 hover:bg-[#e4e4e1e] rounded-lg p-2 cursor-pointer transition-colors duration-200"
                >
                  <Cow size={25} className="text-[#843C0A]" />
                  <p className="text-[#843C0A] text-[22px] hover:text-[#c45e16]">Laticínios</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/products-cat/57"
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

export { NavBar, NavBarMobile };

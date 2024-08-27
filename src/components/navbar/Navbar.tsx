import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserCircle,
  MagnifyingGlass,
  Basket,
  OrangeSlice,
  Grains,
  Barn,
  Carrot,
  Cow,
  CoffeeBean,
} from "@phosphor-icons/react";
import { toastAlert } from "../../utils/toastAlert";
import { AuthContext } from "../../contexts/AuthContext";
import { Leaf, Tag } from "phosphor-react";
import Product from "@/models/Product";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const { authenticated, handleLogout } = useContext(AuthContext);
  let navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const logout = () => {
    handleLogout();
    toastAlert("Usuário deslogado com sucesso!", "info");
    navigate("/login");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-11/12 bg-[#fffbf7] text-[#843C0A] py-4 sm:px-8 px-4">
        <div className="flex items-center  space-x-8 sm:justify-between">
          <div className="flex items-center h-full w-[200px]">
            <Link to="/" className="h-full w-full">
              <img
                src="https://i.imgur.com/KIEEiTe.png"
                alt="Logo Zurah"
                className="h-[60px] w-auto"
              />
            </Link>
          </div>

          <form action="/produtos">
            {}
            <div className="hidden relative sm:flex items-center">
              <input
                type="text"
                placeholder="Digite o que você procura"
                className="w-[440px] h-10 px-4 placeholder-[#843C0A] bg-[#f3f3f3] outline-none rounded-xl "
              />
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-transparent z-10"
                type="submit"
              >
                <MagnifyingGlass size={24} />
              </button>
            </div>
          </form>

          <div className="flex items-center sm:space-x-4 space-x-2">
            <div className="relative">
              <Link to={"/carrinho"}>
                <div>
                  <Basket className="w-8 h-8 text-[#843C0A] flex items-center" />
                </div>
              </Link>
            </div>

            <div className="relative">
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
        <div
          ref={dropdownRef}
          className=" z-[100] absolute right-4 w-[150px] text-white rounded-xl bg-olive"
        >
          <ul className="flex flex-col">
            {authenticated ? (
              <>
                <Link to="/perfil">
                  <li className="hover:bg-[#80800057] py-2 px-4 cursor-pointer rounded-lg">
                    Configurações
                  </li>
                </Link>
                <li
                  onClick={logout}
                  className="border-t border-[#80800057] hover:bg-[#80800057] py-2 px-4 cursor-pointer rounded-xl"
                >
                  Sair
                </li>
              </>
            ) : (
              <Link to="/login" className="text-white no-underline">
                <li className="hover:bg-[#80800057] py-2 px-4 cursor-pointer rounded-xl">
                  Entrar
                </li>
              </Link>
            )}
          </ul>
        </div>
      )}

      {}
      <section className="hidden sm:flex justify-center bg-[#fffbf7] border-b-[0.2px] border-[#c59e82a9] mb-5">
        <div className="">
          <nav>
            <ul className="flex flex-row gap-20">
              <Link to={"/products-cat/56"}>
                <li className="flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2">
                  <Tag size={20} className="font-[21px] text-[#843C0A]" />
                  <p className="font-[21px] text-[#843C0A]">Ofertas</p>
                </li>
              </Link>

              <Link to="products-cat/58">
                <li className="flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2">
                  <Carrot size={20} className="font-[21px] text-[#843C0A]" />
                  <p className="font-[21px] text-[#843C0A]">Hortifruti</p>
                </li>
              </Link>

              <Link to={"/products-cat/55"}>
                <li className="flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2 ">
                  <CoffeeBean
                    size={20}
                    className="font-[21px] text-[#843C0A]"
                  />
                  <p className="font-[21px] text-[#843C0A]">Cereais</p>
                </li>
              </Link>

              <Link to={"/products-cat/57"}>
                <li className="flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2">
                  <Leaf size={20} className="font-[21px] text-[#843C0A]" />
                  <p className="font-[21px] text-[#843C0A]">Orgânicos</p>
                </li>
              </Link>

              <Link to={"/products-cat/59"}>
                <li className="flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2">
                  <Cow size={20} className="font-[21px] text-[#843C0A]" />
                  <p className="font-[21px] text-[#843C0A]">
                    Frios, Queijos e Laticínios
                  </p>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { CaretDown, CaretRight, List, Trash, Pencil, Plus } from "@phosphor-icons/react";
import Popup from "reactjs-popup";
import ProductForm from "../../components/Products/productForm/ProductForm";
import '../../components/Products/productModal/ProductModal.css'
import '../../index.css';
import ProductModal from "../../components/Products/productModal/ProductModal";

Chart.register(...registerables);

function SellerHome() {
  const [data, setData] = useState({
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
    datasets: [
      {
        label: "Visulizações do Site",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Vendas Diárias",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: "rgba(153,102,255,0.2)",
        borderColor: "rgba(153,102,255,1)",
        tension: 0.1,
      },
    ],
  });

  const [isCategoriasOpen, setIsCategoriasOpen] = useState(false);
  const [isProdutosOpen, setIsProdutosOpen] = useState(false);
  const [isClientesOpen, setIsClientesOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    if (menu === 'categorias') setIsCategoriasOpen(!isCategoriasOpen);
    if (menu === 'produtos') setIsProdutosOpen(!isProdutosOpen);
    if (menu === 'clientes') setIsClientesOpen(!isClientesOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 px-5 py-5">
      <aside className="w-64 bg-[#9b5d45] text-white p-6 absolute h-[800px] rounded-lg shadow-lg">
        <h2 className="text-[23px] font-bold mb-6 flex justify-center border-b-2 pb-2 ">MENU</h2>
        <ul>

          <li className="">
            <Link to={'/'}>
              <div className="cursor-pointer flex items-center justify-between text-[19px] hover:bg-[#b68d7ca2] rounded-lg p-2">
                <h3>HOME</h3>
              </div>
            </Link>
          </li>

          <li className="">
            <div onClick={() => toggleMenu('categorias')} className="cursor-pointer flex items-center justify-between text-[19px]   hover:bg-[#b68d7ca2] rounded-lg p-2">
              <h3>CATEGORIAS</h3>
              {isCategoriasOpen ? <CaretDown size={20} /> : <CaretRight size={20} />}
            </div>
            {isCategoriasOpen && (
              <ul className="ml-4 space-y-2">
                <li>
                  <Link to="/adicionar-categoria" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <Plus size={19} className="mr-2" />
                    Adicionar
                  </Link>
                </li>
                <li>
                  <Link to="/categorias" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <List size={19} className="mr-2" />
                    Listar
                  </Link>
                </li>
                <li>
                  <Link to="/editar-categoria/:id" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <Pencil size={19} className="mr-2" />
                    Editar
                  </Link>
                </li>
                <li>
                  <Link to="/deletar-categoria/:id" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <Trash size={19} className="mr-2" />
                    Deletar
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="">
            <div onClick={() => toggleMenu('produtos')} className="cursor-pointer flex items-center justify-between text-[19px] hover:bg-[#b68d7ca2] rounded-lg p-2">
              <h3>PRODUTOS</h3>
              {isProdutosOpen ? <CaretDown size={20} /> : <CaretRight size={20} />}
            </div>
            {isProdutosOpen && (
              <ul className="ml-4 space-y-2">
                <li>
                  <Link to="/cadastrar-produto" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <Plus size={19} className="mr-2" />
                    Adicionar
                  </Link>
                </li>
                <li>
                  <Link to="/produtos" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <List size={19} className="mr-2" />
                    Listar
                  </Link>
                </li>
                <li>
                  <Link to="/editar-produto/:id" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <Pencil size={19} className="mr-2" />
                    Editar
                  </Link>
                </li>
                <li>
                  <Link to="/deletar-produto" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <Trash size={19} className="mr-2" />
                    Deletar
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="">
            <div onClick={() => toggleMenu('produtos')} className="cursor-pointer flex items-center justify-between text-[19px] hover:bg-[#b68d7ca2] rounded-lg p-2">
              <h3>VENDAS</h3>
              {isClientesOpen ? <CaretDown size={20} /> : <CaretRight size={20} />}
            </div>
            {isClientesOpen && (
              <ul className="ml-4 space-y-2">

                <Popup
                 trigger={<button className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                      <Plus size={19} className="mr-2" />
                      Adicionar
                    </button>} modal>
                  <div>
                    <ProductForm />
                  </div>
                </Popup>



                <li>
                  <Link to="/produtos" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <List size={19} className="mr-2" />
                    Listar
                  </Link>
                </li>
                <li>
                  <Link to="/editar-produto/:id" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <Pencil size={19} className="mr-2" />
                    Editar
                  </Link>
                </li>
                <li>
                  <Link to="/deletar-produto" className="flex items-center text-md hover:text-[#ffff] transition-colors duration-300 hover:bg-[#b68d7ca2] rounded-lg p-2">
                    <Trash size={19} className="mr-2" />
                    Deletar
                  </Link>
                </li>
              </ul>
            )}
          </li>

        </ul>
      </aside>

      <div className="flex-grow ml-64 px-4">

        <header className="bg-[#9b5d45] text-white p-4 mb-8 rounded-lg shadow-lg flex justify-center ">
          <h1 className="text-3xl font-bold">Visão Geral</h1>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Visualizações na Loja</h2>
              <div className="w-full">
                <Line data={data} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Vendas do Dia</h2>
              <div className="w-full">
                <Line data={data} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Pedidos Completos</h2>
              <div className="w-full">
                <Line data={data} />
              </div>
            </div>
          </div>
          <ProductModal />
        </main>
      </div>
    </div>
  );
}

export default SellerHome;

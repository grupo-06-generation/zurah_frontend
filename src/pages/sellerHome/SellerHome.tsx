import { Link } from "react-router-dom";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { CaretDown, CaretRight, Tag, ShoppingCart, User, List } from "@phosphor-icons/react";
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
      <aside className="w-64  bg-[#9B5D45] text-white p-6 absolute h-[80vh] px-14 rounded-lg">
        <h2 className="text-xl font-bold mb-6 flex justify-center py-3">DASHBOARD</h2>
        <ul>
          <li className="mb-6">
            <div onClick={() => toggleMenu('categorias')} className="cursor-pointer flex items-center justify-between text-sm mb-2">
              <h3 className="font-semibold">Categorias</h3>
              {isCategoriasOpen ? <CaretDown size={20} /> : <CaretRight size={20} />}
            </div>
            {isCategoriasOpen && (
              <ul className="ml-4 space-y-2">
                <li>
                  <Link to="/adicionar-categoria" className="flex items-center text-sm hover:text-yellow-400 transition-colors duration-300">
                    <Tag size={18} className="mr-2" />
                    Adicionar
                  </Link>
                </li>
                <li>
                  <Link to="/categorias" className="flex items-center text-sm hover:text-yellow-400 transition-colors duration-300">
                    <List size={18} className="mr-2" />
                    Listar
                  </Link>
                </li>
                <li>
                  <Link to="/editar-categoria/:id" className="flex items-center text-sm hover:text-yellow-400 transition-colors duration-300">
                    <Tag size={18} className="mr-2" />
                    Editar
                  </Link>
                </li>
                <li>
                  <Link to="/deletar-categoria/:id" className="flex items-center text-sm hover:text-yellow-400 transition-colors duration-300">
                    <Tag size={18} className="mr-2" />
                    Deletar
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-6">
            <div onClick={() => toggleMenu('produtos')} className="cursor-pointer flex items-center justify-between text-sm mb-2">
              <h3 className="font-semibold">Produtos</h3>
              {isProdutosOpen ? <CaretDown size={20} /> : <CaretRight size={20} />}
            </div>
            {isProdutosOpen && (
              <ul className="ml-4 space-y-2">
                <li>
                  <Link to="/cadastrar-produto" className="flex items-center text-sm hover:text-yellow-400 transition-colors duration-300">
                    <ShoppingCart size={18} className="mr-2" />
                    Adicionar
                  </Link>
                </li>
                <li>
                  <Link to="/produtos" className="flex items-center text-sm hover:text-yellow-400 transition-colors duration-300">
                    <List size={18} className="mr-2" />
                    Listar
                  </Link>
                </li>
                <li>
                  <Link to="/editar-produto/:id" className="flex items-center text-sm hover:text-yellow-400 transition-colors duration-300">
                    <ShoppingCart size={18} className="mr-2" />
                    Editar
                  </Link>
                </li>
                <li>
                  <Link to="/deletar-produto" className="flex items-center text-sm hover:text-yellow-400 transition-colors duration-300">
                    <ShoppingCart size={18} className="mr-2" />
                    Deletar
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-6">
            <div onClick={() => toggleMenu('clientes')} className="cursor-pointer flex items-center justify-between text-sm mb-2">
              <h3 className="font-semibold">Clientes</h3>
              {isClientesOpen ? <CaretDown size={20} /> : <CaretRight size={20} />}
            </div>
            {isClientesOpen && (
              <ul className="ml-4 space-y-2">
                <li>
                  <Link to="/clientes" className="flex items-center text-sm hover:text-yellow-400 transition-colors duration-300">
                    <User size={18} className="mr-2" />
                    Todos Clientes
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
              <ProductModal />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SellerHome;

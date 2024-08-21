import { Link } from "react-router-dom";
import Category from "../../../models/Category";

interface CardCategoryProps {
  category: Category;
}

function CardCategory({ category }: CardCategoryProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden shadow-lg max-w-xs mx-auto bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Imagem Grande */}
      <div className="relative h-40 bg-gray-300">
        <img 
          src="../src/assets/frutinhas-veg.jpg" alt={category.name} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Cabeçalho */}
      <header className="py-3 px-6 bg-[#843C0A] text-white font-bold text-2xl">
        {category.name}
      </header>

      {/* Botões de Ação */}
      <div className="flex space-x-2 p-4">
        <Link
          to={`/editar-categoria/${category.id}`}
          className="flex-1 text-white bg-orange-500 hover:bg-orange-700 transition-colors duration-300 rounded-lg flex items-center justify-center py-2"
        >
          Editar
        </Link>
        <Link
          to={`/deletar-categoria/${category.id}`}
          className="flex-1 text-white bg-red-500 hover:bg-red-700 transition-colors duration-300 rounded-lg flex items-center justify-center py-2"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategory;

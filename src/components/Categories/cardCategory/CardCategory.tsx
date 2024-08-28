import { Link } from "react-router-dom";
import { List } from "phosphor-react";
import Category from "../../../models/Category";

interface CardCategoryProps {
  category: Category;
}

function CardCategory({ category }: CardCategoryProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden shadow-lg max-w-xs w-80 mx-auto bg-white hover:shadow-xl transition-shadow duration-300">
      <header className="py-3 px-6 text-[#843C0A] font-bold text-2xl flex items-center justify-center space-x-2">
        <List size={32} color="#843C0A" weight="bold" />
        <span>{category.name}</span>
      </header>

      <div className="flex space-x-2 p-4">
        <Link
          to={`/editar-categoria/${category.id}`}
          className="flex-1 text-white bg-olive hover:bg-orange-500 transition-colors duration-300 rounded-lg flex items-center justify-center py-2"
        >
          Editar
        </Link>
        <Link
          to={`/deletar-categoria/${category.id}`}
          className="flex-1 text-white bg-[#843c0a] hover:bg-orange-500 transition-colors duration-300 rounded-lg flex items-center justify-center py-2"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategory;
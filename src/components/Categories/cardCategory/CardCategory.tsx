import { Link } from "react-router-dom";
import Category from "../../../models/Category";



interface CardCategoryProps {
  category: Category;
}

function CardCategory({ category }: CardCategoryProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-3 px-6 bg-[#843C0A] text-black font-bold text-2xl">
        {category.name}
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{category.description}</p>
      <div className="flex">
        <Link
          to={`/editarCategory/${category.id}`}
          className="w-full text-slate-100 bg-orange-500 hover:bg-orange-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarCategory/${category.id}`}
          className="text-slate-100 bg-green-800 hover:bg-orange-800 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategory;
import Category from '@/models/Category';
import { buscar } from '@/services/Service';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ProductsByCategory() {
    
    const [categorias, setCategorias] = useState<Category[]>([]);
    async function buscarCategorias() {
      await buscar("/categorias", setCategorias);
    }

    
  return (
    <div>
       <h2 className="text-2xl  border-b-2 flex justify-center font-semibold mb-4">
            Categorias
          </h2>
          <ul className="space-y-2">
            {categorias.map((categoria) => (
              <li
                key={categoria.id}
                className="p-2 rounded-lg hover:bg-gray-600"
              >
                <Link to={`/categorias/${categoria.id}`} className="block">
                  {categoria.name}
                </Link>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default ProductsByCategory

import { AuthContext } from '@/contexts/AuthContext';
import Category from '@/models/Category';
import Product from '@/models/Product';
import { buscar } from '@/services/Service';
import { toastAlert } from '@/utils/toastAlert';
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CardProductHome from '../Products/CardProduct/CardProductHome';

function ProductsByCategory() {
    
  const [category, setCategory] = useState<Category>({} as Category);
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const idNumber: number = parseInt(id)
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario?.token;

  async function buscaCategoria(id: string) {
    try {
        await buscar(`/category/${id}`, setCategory, {
            headers: {
                'Authorization': token
            }
        });
    } catch (error: any) {
        if (error.toString().includes('403')) {
            toastAlert('O token expirou, favor logar novamente.', 'erro');
            handleLogout();
        } else {
            toastAlert('Erro ao buscar categoria.', 'erro');
        }
    }
  }

    useEffect(() => {
      if (id !== undefined) {
        buscaCategoria(id);
      }
    }, [id]);

  async function buscarProducts() {
    try {
        await buscar('/product', setProducts, {});
    } catch (error: any) {
        toastAlert('Erro ao buscar produtos', 'erro');
    }
  }

    useEffect(() => {
        buscarProducts();
    }, []);

  return (
    <div>
      <h2 className="text-2xl border-b-2 flex justify-center font-semibold mb-4">
        {category.name}
      </h2>
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {products
          .filter((product) => product.category?.id === idNumber)
          .map((filteredProduct) => (
            <CardProductHome 
              key={filteredProduct.id} 
              product={filteredProduct}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProductsByCategory

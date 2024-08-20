import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Category from "../../../models/Category";
import Product from "../../../models/Product";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { toastAlert } from "../../../utils/toastAlert";

function ProductForm() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category>({ id: 0, name: '', description: '' });
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: '',
    expire: '',
    price: 0,
    quantity: 0,
    region: '',
    description: '',
    photo: '',
    category: null,
    usuario: null,
  });

  useEffect(() => {
    if (token === '') {
      toastAlert('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchCategories = async () => {
      await buscar('/category', setCategories, {
        headers: {
          Authorization: token,
        },
      });
    };

    fetchCategories();
  }, [token]);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        await buscar(`/product/${id}`, setProduct, {
          headers: {
            Authorization: token,
          },
        });
      };

      const fetchCategory = async () => {
        await buscar(`/category/${id}`, setCategory, {
          headers: {
            Authorization: token,
          },
        });
      };

      fetchProduct();
      fetchCategory();
    }
  }, [id, token]);

  useEffect(() => {
    setProduct((prevProduct) => ({ ...prevProduct, category }));
  }, [category]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
      category: category,
      user: usuario,
    }));
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (id) {
        await atualizar(`/product`, product, setProduct, {
          headers: {
            Authorization: token,
          },
        });
        toastAlert('Produto atualizado com sucesso', 'success');
      } else {
        await cadastrar(`/product`, product, setProduct, {
          headers: {
            Authorization: token,
          },
        });
        toastAlert('Produto cadastrado com sucesso', 'success');
      }
      navigate('/produtos');
      
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlert('O token expirou, favor logar novamente', 'info');
        handleLogout();
      } else {
        toastAlert('Erro ao processar o produto', 'error');
        
      }
    }
  };

  return (
    <div className="container flex flex-col items-center">
      <h1 className="text-2xl text-center py-3">{id ? 'Editar Produto' : 'Cadastrar Produto'}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name"></label>
          <input
            value={product.name}
            onChange={handleInputChange}
            type="text"
            placeholder="Nome"
            name="name"
            required
            className="border-b-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description"></label>
          <input
            value={product.description}
            onChange={handleInputChange}
            type="text"
            placeholder="Descrição"
            name="description"
            required
            className="border-b-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="price"></label>
          <input
            value={product.price}
            onChange={handleInputChange}
            type="number"
            placeholder="Preço"
            name="price"
            required
            className="border-b-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="expire"></label>
          <input
            value={product.expire}
            onChange={handleInputChange}
            type="text"
            placeholder="Expiração"
            name="expire"
            required
            className="border-b-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="quantity"></label>
          <input
            value={product.quantity}
            onChange={handleInputChange}
            type="number"
            placeholder="Quantidade"
            name="quantity"
            required
            className="border-b-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="region"></label>
          <input
            value={product.region}
            onChange={handleInputChange}
            type="text"
            placeholder="Região"
            name="region"
            required
            className="border-b-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Foto"></label>
          <input
            value={product.photo}
            onChange={handleInputChange}
            type="string"
            placeholder="Foto do Produto:"
            name="photo"
            required
            className="border-b-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Categoria</p>
          <select
            name="category"
            id="category"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => setCategory(categories.find((cat) => cat.id === Number(e.target.value)) || category)}
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="rounded bg-[#843C0A] hover:bg-[#9B5D45] text-white font-bold w-1/2 mx-auto block py-2"
        >
          {id ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;

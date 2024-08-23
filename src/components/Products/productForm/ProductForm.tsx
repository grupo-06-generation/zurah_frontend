import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Category from "../../../models/Category";
import Product from "../../../models/Product";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { toastAlert } from "../../../utils/toastAlert";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectGroup, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react"

function ProductForm() {
  let navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category>({ id: 0, name: '', description: '' });
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: '',
    expire: '',
    price: 1,
    quantity: 1,
    region: '',
    description: '',
    photo: '',
    category: null,
    usuario: null,
  });

  const mudandoPagina = (() => {
    setProduct(
      {id: 0,
      name: '',
      expire: '',
      price: 1,
      quantity: 1,
      region: '',
      description: '',
      photo: '',
      category: null,
      usuario: null}
    )
  })

  useEffect(() => {
    // Define o valor inicial do Select com a categoria atual do produto
    if (product.category) {
      setSelectedCategory(product.category.name);
    }
  }, [product.category]);

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
      usuario: usuario,
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
    <div className="w-full flex flex-col items-center my-[50px]">
      <div className="flex justify-between">
        <div className="mx-28">
          <h1 className="text-[30px] text-left">{id ? 'Editar Produto ' : 'Cadastrar Produto '}</h1>
          <p className="text-[20px]">Confira todas as informações antes de salvar.</p>
        </div>
        <div className="flex items-center">
          <Link to="/cadastrar-produto" onClick={mudandoPagina}>
            {id ? <Button className="bg-[#843c0a]">Cadastrar Novo</Button> : ''}
          </Link>
        </div>
      </div>
      <div>
        <Separator className="m-10 "/>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-full">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>
              {id ? `Editando Produto ${product.id}` : 'Cadastrando Produto'}
            </AlertTitle>
          </Alert>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-6 w-96">

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              value={product.name}
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
              name="name"
              className="col-span-3"
              required
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="description">Descrição</Label>
            <Input
              value={product.description}
              onChange={handleInputChange}
              type="text"
              placeholder="Descrição"
              name="description"
              className="col-span-3"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="price">Preço</Label>
            <Input
              value={product.price}
              onChange={handleInputChange}
              type="number"
              placeholder="Preço"
              name="price"
              className="col-span-3"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="expire">Expiração</Label>
            <Input
              value={product.expire}
              onChange={handleInputChange}
              type="text"
              placeholder="Expiração"
              name="expire"
              className="col-span-3"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="quantity">Quantidade</Label>
            <Input
              value={product.quantity}
              onChange={handleInputChange}
              type="number"
              placeholder="Quantidade"
              name="quantity"
              className="col-span-3"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="region">Região</Label>
            <Input
              value={product.region}
              onChange={handleInputChange}
              type="text"
              placeholder="Região"
              name="region"
              className="col-span-3"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="photo">Foto</Label>
            <Input
              value={product.photo}
              onChange={handleInputChange}
              type="text"
              placeholder="Foto do Produto"
              name="photo"
              className="col-span-3"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="category">Categoria</Label>
            <Select 
              onValueChange={(value) => {
                setSelectedCategory(value); // Atualiza o estado local com a nova seleção
                setCategory(categories.find((cat) => cat.name === value) || category);
              }}
              value={selectedCategory} // Vincula o valor do Select ao estado local
            >
              <SelectTrigger id="category" className=" rounded col-span-3">
                <SelectValue placeholder="Selecione uma categoria"/>
              </SelectTrigger>
              <SelectGroup>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectGroup>
            </Select>
          </div>

          <Button
            type="submit" className="w-1/3 bg-[#843c0a]"
          >
            {id ? 'Editar' : 'Cadastrar'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;

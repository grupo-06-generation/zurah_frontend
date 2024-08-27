import * as React from "react"
import { format, addDays } from "date-fns"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { useContext, useEffect, useState, ChangeEvent } from "react"
import Category from "../../../models/Category"
import Product from "../../../models/Product"
import { atualizar, buscar, cadastrar } from "../../../services/Service"
import { toastAlert } from "../../../utils/toastAlert"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectGroup, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from "react-router-dom"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function ProductForm() {
  let navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams<{ id: string }>()
  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [category, setCategory] = useState<Category>({ id: 0, name: '', description: '' })
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
  })
  const [date, setDate] = useState<Date | undefined>(
    product.expire ? new Date(product.expire) : undefined
  )

  useEffect(() => {
    if (product.category) {
      setSelectedCategory(product.category.name)
    }
  }, [product.category])

  useEffect(() => {
    if (token === '') {
      toastAlert('Você precisa estar logado', 'info')
      navigate('/')
    }
  }, [token, navigate])

  useEffect(() => {
    const fetchCategories = async () => {
      await buscar('/category', setCategories, {
        headers: {
          Authorization: token,
        },
      })
    }

    fetchCategories()
  }, [token])

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        await buscar(`/product/${id}`, setProduct, {
          headers: {
            Authorization: token,
          },
        })
      }

      const fetchCategory = async () => {
        await buscar(`/category/${id}`, setCategory, {
          headers: {
            Authorization: token,
          },
        })
      }

      fetchProduct()
      fetchCategory()
    }
  }, [id, token])

  useEffect(() => {
    setProduct((prevProduct) => ({ ...prevProduct, category }))
  }, [category])

  useEffect(() => {
    if (product.expire) {
      const expireDate = new Date(product.expire);
      setDate(expireDate);
    }
  }, [product.expire]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
      category: category,
      usuario: usuario,
    }))
  }

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const newDate = addDays(selectedDate, 1);
      setDate(newDate)
      const formattedDate = format(newDate, "yyyy-MM-dd")
      setProduct((prevProduct) => ({ ...prevProduct, expire: formattedDate }))
    }
    setPopoverOpen(false);
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      
      if (id) {
        await atualizar("/product", product, setProduct, {
          headers: {
            Authorization: token,
          },
        })
        toastAlert('Produto atualizado com sucesso', 'sucesso')
      } else {
        await cadastrar(`/product`, product, setProduct, {
          headers: {
            Authorization: token,
          },
        })
        toastAlert('Produto cadastrado com sucesso', 'sucesso')
      }

      navigate(-1)

    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlert('O token expirou, favor logar novamente', 'info')
        handleLogout()
      } else {
        toastAlert('Erro ao processar o produto', 'erro')
      }
    }
  }

  return (
    <div className="w-full flex flex-col items-center my-[50px]">
      <div className="flex justify-between">
        <div className="mx-28">
          <h1 className="text-[30px] text-left">{id ? 'Editar Produto ' : 'Cadastrar Produto '}</h1>
          <p className="text-[20px]">Confira todas as informações antes de salvar.</p>
        </div>
        <div className="flex items-center">
          <Link to="/cadastrar-produto">
            {id ? <Button className="bg-[#843c0a]">Cadastrar Novo</Button> : ''}
          </Link>
        </div>
      </div>
      <div>
        <Separator className="m-10 " />
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
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal col-span-3",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "dd/MM/yyyy") : "Selecionar data"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
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
            <Label htmlFor="photo">Foto URL</Label>
            <Input
              value={product.photo}
              onChange={handleInputChange}
              type="text"
              placeholder="URL da Foto"
              name="photo"
              className="col-span-3"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="category">Categoria</Label>
            <Select
              value={selectedCategory}
              onValueChange={(value) => {
                setCategory(categories.find((cat) => cat.name === value) || category)
                setSelectedCategory(value)
              }}
              defaultValue={product.category?.name || ''}
              name="category"
              required
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-start gap-2 mt-4">
            <Button type="submit" className="bg-green-500 hover:bg-green-700 text-white">
              {id ? 'Atualizar' : 'Cadastrar'}
            </Button>
            <Button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-red-500 hover:bg-red-700 text-white"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm

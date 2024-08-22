import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Category from '../../../models/Category';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlert } from '../../../utils/toastAlert';

function CategoryForm() {
  const [categorias, setCategory] = useState<Category>({} as Category);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/category/${id}`, setCategory, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategory({
      ...categorias,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categorias))
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/category`, categorias, setCategory, {
          headers: {
            'Authorization': token
          }
        })

        toastAlert('Categoria atualizada com sucesso', 'sucesso')
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlert('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlert('Erro ao atualizar a Categoria', 'erro')
        }

      }

    } else {
      try {
        await cadastrar(`/category`, categorias, setCategory, {
          headers: {
            'Authorization': token
          }
        })

        toastAlert('Categoria cadastrada com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlert('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlert('Erro ao cadastrar Categoria', 'erro')
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  useEffect(() => {
    if (token === '') {
      toastAlert('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Nome Categoria:</label>
          <input
            type="text"
            placeholder="Nome Categoria:"
            name='name'
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='description'
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;
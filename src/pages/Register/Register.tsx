
import { ChangeEvent, useEffect, useState } from 'react'
import './Register.css'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import { useNavigate } from 'react-router-dom'

function Register() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    name: "",
    usuario: "",
    password: "",
    photo: "",
    is_seller: 0
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    name: "",
    usuario: "",
    password: "",
    photo: "",
    is_seller: 0
  })

  useEffect(() => {
      if (usuarioResposta.id !== 0) {
          back()
      }
  }, [usuarioResposta])


  function back() {
      navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
      setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setUsuario({
          ...usuario,
          [e.target.name]: e.target.value
      })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()

      if (confirmaSenha === usuario.password && usuario.password.length >= 8) {

          try {
              await cadastrarUsuario(`/usuarios/register`, usuario, setUsuarioResposta)
              alert('Usuário cadastrado com sucesso')

          } catch (error) {
              alert('Erro ao cadastrar o Usuário')
          }

      } else {
          alert('Dados inconsistentes. Verifique as informações de cadastro.')
          setUsuario({ ...usuario, password: "" }) 
          setConfirmaSenha("")
      }
  }
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' >
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="name"
            value={usuarioResposta.name} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
             
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={usuarioResposta.usuario} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              placeholder="E-mail"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor=" ">Vendedor = 1 | Comprador = 0</label>
            <input
              type="number"
              id="isSeller"
              name="is_seller"
              value={usuarioResposta.is_seller} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              placeholder="Vendedor =1 | Comprador = 0"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>


          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="photo"
              value={usuarioResposta.photo} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              placeholder="URL da Foto"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="password"
              value={usuarioResposta.name} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2' >
              Cancelar
            </button>
            <button className='rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
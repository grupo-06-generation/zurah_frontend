import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import Product from "../models/Product";
import { toast } from "react-toastify";
import { toastAlert } from "@/utils/toastAlert";
import Usuario from "@/models/Usuario";

interface AuthContextProps {
  usuario: UsuarioLogin;
  authenticated: boolean;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
  adicionarProduto: (produto: Product) => void;
  aumentarQtdKg: (produtoId: number) => void;
  diminuirQtdKg: (produtoId: number) => void;
  removerProduto: (produtoId: number) => void;
  limparCarrinho: () => void;
  items: Product[];
  kgItems: number[];
  quantidadeItems: number;
  precoTotal: string;
  atualizarUsuario: (nome: string, usuario: string, is_seller: number, foto: string, senha: string) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    name: "",
    usuario: "",
    password: "",
    photo: "",
    token: "",
    is_seller: 0,
  });

  const [items, setItems] = useState<Product[]>([]);
  const [kgItems, setKgItems] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const authenticated = !!usuario.token;

  const quantidadeItems = items.length;

  const precoTotal = items
    .reduce((acc, curr, idx) => acc + curr.price * kgItems[idx], 0)
    .toFixed(2);

  function adicionarProduto(produto: Product) {
    setItems((state) => [...state, produto]);
    setKgItems((state) => [...state, 1]);
  }

  function aumentarQtdKg(produtoId: number) {
    const indice = items.findIndex((item) => item.id === produtoId);
    if (indice >= 0) {
      setKgItems((state) =>
        state.map((kg, idx) => (idx === indice ? kg + 1 : kg))
      );
    }
  }

  function diminuirQtdKg(produtoId: number) {
    const indice = items.findIndex((item) => item.id === produtoId);
    if (indice >= 0 && kgItems[indice] > 1) {
      setKgItems((state) =>
        state.map((kg, idx) => (idx === indice ? kg - 1 : kg))
      );
    }
  }

  function removerProduto(produtoId: number) {
    const indice = items.findIndex((item) => item.id === produtoId);
    if (indice >= 0) {
      setItems((state) => state.filter((_, idx) => idx !== indice));
      setKgItems((state) => state.filter((_, idx) => idx !== indice));
    }
  }

  function limparCarrinho() {
    if (quantidadeItems > 0) {
      toastAlert("Compra Efetuada com Sucesso", "sucesso");
      setItems([]);
      setKgItems([]);
    } else {
      toastAlert("Seu carrinho está vazio", "info");
    }
  }

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/login`, userLogin, setUsuario);
      toastAlert("Usuário logado com sucesso", "sucesso");
    } catch (error) {
      console.error(error);
      toastAlert("Dados do usuário inconsistentes", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      name: "",
      usuario: "",
      password: "",
      photo: "",
      token: "",
      is_seller: 0,
    });
  }

  function atualizarUsuario(nome: string, usuario: string, opc: number, foto: string, senha: string) {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      name: nome,
      usuario: usuario,
      is_seller: opc,
      photo: foto,
      password: senha
    }));
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        authenticated,
        handleLogin,
        handleLogout,
        isLoading,
        adicionarProduto,
        aumentarQtdKg,
        diminuirQtdKg,
        removerProduto,
        limparCarrinho,
        items,
        kgItems,
        quantidadeItems,
        precoTotal,
        atualizarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

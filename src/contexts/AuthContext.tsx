import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import Product from "../models/Product";

interface AuthContextProps {
    usuario: UsuarioLogin;
    authenticated: boolean;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
    adicionarProduto: (produto: Product) => void;
    removerProduto: (produtoId: number) => void;
    limparCarrinho: () => void;
    items: Product[];
    quantidadeItems: number
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
        is_seller: 0
    });

    const [items, setItems] = useState<Product[]>([]);

    const quantidadeItems = items.length;

    function adicionarProduto(produto: Product) {
        setItems(state => [...state, produto])
    }

    function removerProduto(produtoId: number) {
        const indice = items.findIndex(items => items.id === produtoId)
        let novoCart = [...items];

        if(indice >= 0) {
            novoCart.splice(indice, 1);
            setItems(novoCart);
        }
    }

    function limparCarrinho() {
        alert("Compra Efetuada com Sucesso");
        setItems([]);
    }

    const [isLoading, setIsLoading] = useState(false);

    const authenticated = !!usuario.token;

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true);
        try {
            await login(`/usuarios/login`, userLogin, setUsuario);
            alert("Usuário logado com sucesso");
        } catch (error) {
            console.log(error);
            alert("Dados do usuário inconsistentes");
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
            is_seller: 0
        });
    }

    return (
        <AuthContext.Provider value={{ usuario, authenticated, handleLogin, handleLogout, isLoading, adicionarProduto, removerProduto, limparCarrinho, items, quantidadeItems  }}>
            {children}
        </AuthContext.Provider>
    );
}

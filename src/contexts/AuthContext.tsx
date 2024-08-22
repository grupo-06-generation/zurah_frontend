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
    adicionarProduto: (produto: Product, qtd: number) => void;
    aumentarQtdKg: (produtoId: number) => void;
    diminuirQtdKg: (produtoId: number) => void;
    removerProduto: (produtoId: number) => void;
    limparCarrinho: () => void;
    items: Product[];
    kgItems: number[];
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
    const [kgItems, setKgItems] = useState<number[]>([]);

    const quantidadeItems = items.length;

    function adicionarProduto(produto: Product, qtd: number) {
        setItems(state => [...state, produto])
        setKgItems(state => [...state, qtd]);
    }

    function aumentarQtdKg(produtoId: number) {
        const indice = items.findIndex(items => items.id === produtoId);

        let novoKgItems = kgItems;

        if(novoKgItems[indice] > 0) {
            novoKgItems[indice] = novoKgItems[indice] + 1;
            setKgItems(novoKgItems);
        }
    }

    function diminuirQtdKg(produtoId: number) {
        const indice = items.findIndex(items => items.id === produtoId);
        let novoKgItems = kgItems;

        if(novoKgItems[indice] > 0) {
            novoKgItems[indice] = novoKgItems[indice] - 1;
            setKgItems(novoKgItems);
        }

    }

    function removerProduto(produtoId: number) {
        const indice = items.findIndex(items => items.id === produtoId)
        let novoCart = [...items];
        let novoKgItems = [...kgItems];

        if(indice >= 0) {
            novoCart.splice(indice, 1);
            novoKgItems.splice(indice, 1);
            setItems(novoCart);
            setKgItems(novoKgItems);
        }
    }

    function limparCarrinho() {
        alert("Compra Efetuada com Sucesso");
        setItems([]);
        setKgItems([]);
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
        <AuthContext.Provider value={{ usuario, authenticated, handleLogin, handleLogout, isLoading, adicionarProduto, aumentarQtdKg, diminuirQtdKg, removerProduto, limparCarrinho, items, kgItems, quantidadeItems  }}>
            {children}
        </AuthContext.Provider>
    );
}

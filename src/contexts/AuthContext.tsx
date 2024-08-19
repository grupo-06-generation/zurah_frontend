import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

interface AuthContextProps {
    usuario: UsuarioLogin;
    authenticated: boolean;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
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
        <AuthContext.Provider value={{ usuario, authenticated, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

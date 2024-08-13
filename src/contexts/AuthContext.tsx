import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import Usuario from "../models/Usuario"
// import { toastAlerta } from "../utils/toastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin> ({
        id: 0,
        name: "",
        usuario: "",
        password: "",
        photo: "",
        token: "",
        is_seller: 0
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/login`, userLogin, setUsuario)
            alert("Usuário logado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
            setIsLoading(false)
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
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

function setUsuario(arg0: { id: number; name: string; usuario: string; password: string; photo: string; token: string; is_seller: number }) {
    throw new Error("Function not implemented.")
}

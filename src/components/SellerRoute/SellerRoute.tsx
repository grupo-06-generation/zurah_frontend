import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

interface SellerRouteProps {
  children: React.ReactNode;
}

function SellerRoute({ children }: SellerRouteProps) {
    const { usuario, authenticated } = useContext(AuthContext);

    if (!authenticated) {
        // Redirecionar para a página de login se não estiver autenticado
        return <Navigate to="/login" replace />;
    }

    if (!usuario?.is_seller) {
        // Redirecionar para uma página de erro ou página principal se não for vendedor
        return <Navigate to="/perfil" replace />;
    }

    // Se o usuário é autenticado e vendedor, renderiza a página
    return <>{children}</>;
}

export default SellerRoute;

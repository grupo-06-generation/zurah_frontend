import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

interface PerfilRouteProps {
  children: React.ReactNode;
}

function PerfilRoute({ children }: PerfilRouteProps) {
    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
        // Redirecionar para a página de login se não estiver autenticado
        return <Navigate to="/login" replace />;
    }

    // Se o usuário está autenticado, renderiza a página
    return <>{children}</>;
}

export default PerfilRoute;

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AuthContext } from "@/contexts/AuthContext";

import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

interface DeleteProductModalProps {
    productId: number;
    isOpen: boolean;
    onClose: () => void;
    onDeleteSuccess: () => void; // Nova prop para notificar sobre exclusão bem-sucedida
}

function DeleteProductModal({ productId, isOpen, onClose, onDeleteSuccess }: DeleteProductModalProps) { 
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState<any>({});
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (productId) {
            buscarPorId(productId);
        }
    }, [productId]);

    async function buscarPorId(id: number) {
        try {
            await buscar(`/product/${id}`, setProduct, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente.');
                handleLogout();
                navigate('/login');
            } else {
                alert('Erro ao buscar produto.');
            }
        }
    }

    async function deletarProduct() {
        setLoading(true);
        try {
            await deletar(`/product/${productId}`, {
                headers: {
                    'Authorization': token
                }
            });
            alert('Produto deletado com sucesso.');
            onDeleteSuccess(); // Notifica a lista sobre a exclusão
            onClose();
        } catch (error) {
            alert('Erro ao apagar o produto.');
        }
        setLoading(false);
    }

    function closeModal() {
        onClose();
    }

    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Deletar Produto</AlertDialogTitle>
                    <AlertDialogDescription>
                        Você tem certeza de que deseja apagar o produto a seguir?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Nome: {product.name}</AlertTitle>
                </Alert>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>Não</AlertDialogCancel>
                    <AlertDialogAction onClick={deletarProduct} className="bg-red-700">
                        {loading ? 'Aguarde...' : 'Confirmar'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default DeleteProductModal;

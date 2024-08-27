import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { FilePenIcon, TrashIcon } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';
import { AuthContext } from '@/contexts/AuthContext';
import Product from '@/models/Product';
import { buscar } from '@/services/Service';
import { toastAlert } from '@/utils/toastAlert';
import { useContext, useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Badge } from '../ui/badge';
import DeleteProductModal from '../Products/DeleteProduct/DeleteProductModal';

function EditProduct() {
    const { usuario } = useContext(AuthContext);
    const [products, setProducts] = useState<Product[]>([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    async function buscarProducts() {
        try {
            await buscar("/product", setProducts, {});
        } catch (error: any) {
            toastAlert("Erro ao buscar produtos", "erro");
        }
    }

    useEffect(() => {
        buscarProducts();
    }, []);

    const openDeleteModal = (productId: number) => {
        setSelectedProductId(productId);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedProductId(null);
    };

    function onDeleteSuccess(): void {
        buscarProducts();
    }

    return (
        <div className="">
            <Card>
                <CardHeader>
                    <CardTitle>Produtos</CardTitle>
                    <CardDescription>Gerencie os seus produtos</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between mb-4">
                        <Button size="sm" className="bg-green-700">
                            Criar produto
                        </Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome</TableHead>
                                <TableHead>Categoria</TableHead>
                                <TableHead>Preço</TableHead>
                                <TableHead>Quantidade</TableHead>
                                <TableHead>Região</TableHead>
                                <TableHead>Data de validade</TableHead>
                                <TableHead>Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        {products.length === 0 && (
                            <div className="flex justify-center items-center">
                                <TailSpin
                                    visible={true}
                                    height="80"
                                    width="80"
                                    color="#4fa94d"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            </div>
                        )}
                        <TableBody>
                            {products.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell><Badge variant='secondary'> {product.category?.name} </Badge></TableCell>
                                    <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                                    <TableCell>{product.quantity}</TableCell>
                                    <TableCell>{product.region}</TableCell>
                                    <TableCell>{new Date(product.expire).toLocaleDateString('pt-BR')}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="bg-gray-500 hover:bg-gray-300 text-white"
                                            >
                                                <FilePenIcon className="h-4 w-4" />
                                                <span className="sr-only">Edit</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="bg-red-500 hover:bg-red-300 text-white"
                                                onClick={() => openDeleteModal(product.id)}
                                            >
                                                <TrashIcon className="h-4 w-4" />
                                                <span className="sr-only">Delete</span>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            {selectedProductId !== null && (
                <DeleteProductModal
                    productId={selectedProductId} 
                    isOpen={isDeleteModalOpen} 
                    onClose={closeDeleteModal} 
                    onDeleteSuccess={onDeleteSuccess}
                />
            )}
        </div>
    );
}

export default EditProduct;

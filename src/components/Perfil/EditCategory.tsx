import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { FilePenIcon, TrashIcon } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';

// Array de categorias para exemplo
const categories = [
  { nome: 'Accessories', descricao: 'Various accessories for products.' },
  { nome: 'Electronics', descricao: 'Gadgets and electronic devices.' },
  { nome: 'Clothing', descricao: 'Men and women apparel.' },
];

function EditCategory() {
  return (
    <div className="flex">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
          <CardDescription>Manage your product categories.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <Button size="sm" className="bg-green-700">
              Criar Categoria
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category, index) => (
                <TableRow key={index}>
                  <TableCell>{category.nome}</TableCell>
                  <TableCell>{category.descricao}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="bg-gray-500 hover:bg-gray-300 text-white">
                        <FilePenIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="outline" size="icon" className="bg-red-500 hover:bg-red-300 text-white">
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
    </div>
  );
}

export default EditCategory;

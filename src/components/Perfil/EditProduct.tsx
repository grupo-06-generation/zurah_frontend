import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { FilePenIcon, TrashIcon } from 'lucide-react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table'

function EditProduct() {
  return (
    <div className="">
        <Card>
            <CardHeader>
                <CardTitle>Produtos</CardTitle>
                <CardDescription>Gerencie os seus produtos</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <Button size="sm" className='bg-green-700'>Criar produto</Button>
                </div>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableCell>Cozy Blanket</TableCell>
                        <TableCell>Home</TableCell>
                        <TableCell>$29.99</TableCell>
                        <TableCell>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="outline" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                            </Button>
                        </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Autumn Mug</TableCell>
                        <TableCell>Home</TableCell>
                        <TableCell>$12.99</TableCell>
                        <TableCell>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="outline" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                            </Button>
                        </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Fall Fragrance Candle</TableCell>
                        <TableCell>Home</TableCell>
                        <TableCell>$16.99</TableCell>
                        <TableCell>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="outline" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                            </Button>
                        </div>
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  )
}

export default EditProduct
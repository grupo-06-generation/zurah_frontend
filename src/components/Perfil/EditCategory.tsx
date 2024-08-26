import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { FilePenIcon, TrashIcon } from 'lucide-react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table'

function EditCategory() {
  return (
    <div className="">
        <Card>
            <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Manage your product categories.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <Button size="sm" className='bg-green-700'>Criar Categoria</Button>
                </div>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Products</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableCell>Home</TableCell>
                        <TableCell>12</TableCell>
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
                        <TableCell>Clothing</TableCell>
                        <TableCell>8</TableCell>
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
                        <TableCell>Accessories</TableCell>
                        <TableCell>6</TableCell>
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

export default EditCategory
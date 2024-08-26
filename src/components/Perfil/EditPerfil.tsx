import { Label } from '@radix-ui/react-label'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { Input } from '../ui/input'

function EditPerfil() {
  return (
    <div className="">
        <Card>
            <CardHeader>
                <CardTitle>Perfil de Usuário</CardTitle>
                <CardDescription>Atualize as informações do seu Perfil</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" value="Enter your name" />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" value="Enter your email" type="email" />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="email">Outro Campo</Label>
                <Input id="email" value="Vazio" type="text" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="bg-green-700">Salvar</Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default EditPerfil
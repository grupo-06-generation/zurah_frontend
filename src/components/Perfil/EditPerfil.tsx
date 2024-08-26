import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Eye, EyeOff } from "lucide-react";
import { toastAlert } from "@/utils/toastAlert";
import { atualizar } from "@/services/Service";
import Usuario from "@/models/Usuario";

function EditPerfil() {
  const { usuario } = useContext(AuthContext);
  const [name, setName] = useState(usuario.name);
  const [email, setEmail] = useState(usuario.usuario);
  const [senha, setSenha] = useState(usuario.password);
  const [foto, setFoto] = useState(usuario.photo);
  const [isSeller, setIsSeller] = useState(usuario.is_seller.toString());
  const token = usuario?.token;
  const [showPassword, setShowPassword] = useState(false);

  const [newUser, setNewUser] = useState<Usuario>({
    id: 0,
    name: "",
    usuario: "",
    password: "",
    photo: "",
    is_seller: 1,
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    name: "",
    usuario: "",
    password: "",
    photo: "",
    is_seller: 1,
  })

  useEffect(() => {
    if (usuario.is_seller) {
      setIsSeller(usuario.is_seller.toString());
    }
  }, [usuario.is_seller]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setNewUser({
      id: usuario.id,
      name: name,
      usuario: email,
      password: senha,
      photo: foto,
      is_seller: parseInt(isSeller),
    })

    try {
      await atualizar(`/users/update`, newUser, setUsuarioResposta, {
        headers: {
          Authorization: token,
        },
      });

      toastAlert("Perfil atualizado com sucesso!", "success");
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error);
      toastAlert("Erro ao atualizar o perfil. Tente novamente.", "error");
    }
  };

  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle>Perfil de Usuário</CardTitle>
          <CardDescription>
            Atualize as informações do seu Perfil
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="photo">Link da Foto</Label>
              <Input
                id="photo"
                type="text"
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="is_seller">Vendedor</Label>
              <Select
                value={isSeller}
                onValueChange={(value) => setIsSeller(value)}
              >
                <SelectTrigger className="rounded">
                  <SelectValue placeholder="Selecione um tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="0">Comprador</SelectItem>
                    <SelectItem value="1">Vendedor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2 relative">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="bg-green-700">
              Salvar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default EditPerfil;

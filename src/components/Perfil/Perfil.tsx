import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { UserIcon, PackageIcon } from "lucide-react";
import EditPerfil from "./EditPerfil";
import EditProduct from "./EditProduct";
import { AuthContext } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Perfil() {
  const [selectedCard, setSelectedCard] = useState<string>(() => {
    return localStorage.getItem("selectedCard") || "Perfil";
  });

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario?.token;
  const firstLetterUppercase = usuario.name.charAt(0).toUpperCase();

  useEffect(() => {
    localStorage.setItem("selectedCard", selectedCard);
  }, [selectedCard]);

  return (
    <div className="grid h-auto w-full md:grid-cols-[210px_1fr]">
      {/* Menu lateral, exibido em telas md e acima */}
      <div className="hidden md:block border-r bg-muted/40">
        <div className="flex h-full max-h-screen flex-col gap-2" id="menu-lateral">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link to="#" className="flex items-center gap-2 font-semibold text-2xl">
              <span className="">Configurações</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                to="#"
                onClick={() => setSelectedCard("Perfil")}
                className={`flex items-center gap-3 my-1 rounded-lg px-3 py-2 transition-all ${
                  selectedCard === "Perfil"
                    ? "bg-green-700 text-white"
                    : "text-primary hover:bg-green-500 hover:text-white"
                }`}
              >
                <UserIcon className="h-4 w-4" />
                Perfil
              </Link>
              {usuario.is_seller === 1 && (
                <Link
                  to="#"
                  onClick={() => setSelectedCard("Produtos")}
                  className={`flex items-center gap-3 my-1 rounded-lg px-3 py-2 transition-all ${
                    selectedCard === "Produtos"
                      ? "bg-green-700 text-white"
                      : "text-muted-foreground hover:bg-green-500 hover:text-white"
                  }`}
                >
                  <PackageIcon className="h-4 w-4" />
                  Produtos
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <Avatar className="h-9 w-9">
            <AvatarImage src={usuario.photo} alt={usuario.name} />
            <AvatarFallback>{firstLetterUppercase}</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground">{usuario.name}</span>
        </header>
        <main className="flex-1 overflow-auto ">
          <Tabs defaultValue="Perfil" className="sm:hidden ">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Perfil" onClick={() => setSelectedCard("Perfil")}>Perfil</TabsTrigger>
              {usuario.is_seller === 1 && (
                <TabsTrigger value="Produtos" onClick={() => setSelectedCard("Produtos")}>Produtos</TabsTrigger>
              )}
            </TabsList>
            <TabsContent value="Perfil" className="grid gap-6 p-4 md:p-6 space-y-2">
              <EditPerfil />
            </TabsContent>
            {usuario.is_seller === 1 && (
              <TabsContent value="Produtos" className="grid gap-6 p-4 md:p-6 space-y-2">
                <EditProduct />
              </TabsContent>
            )}
          </Tabs>
          <div className="hidden md:grid gap-6 p-4 md:p-6">
            {selectedCard === "Perfil" && (
              <div>
                <EditPerfil />
              </div>
            )}
            {selectedCard === "Produtos" && (
              <div>
                <EditProduct />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

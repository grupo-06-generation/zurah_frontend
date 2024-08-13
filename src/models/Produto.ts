import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
    id: number;
    name: string;
    descriptiom: string;
    expire: Date;
    quantity: number;
    region: string;
    image: string;
    category: Categoria | null;
    user: Usuario | null;
}
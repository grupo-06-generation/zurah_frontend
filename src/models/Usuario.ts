import Product from "./Product";

export default interface Usuario {
    id: number;
    name: string;
    usuario: string;
    is_seller: number;
    photo: string;
    password: string;
    product?: Product | null;


}
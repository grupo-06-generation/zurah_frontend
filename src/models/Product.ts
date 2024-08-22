import Category from "./Category";
import Usuario from "./Usuario";

export default interface Product {
    id: number;
    name: string;
    description: string;
    expire: string;
    quantity: number;
    price: number;
    region: string;
    photo: string;
    category: Category;
    usuario: Usuario | null;
}
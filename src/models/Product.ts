import Category from "./Category";
import Usuario from "./Usuario";

export default interface Product {
    id: number;
    name: string;
    description: string;
    expire: Date;
    quantity: number;
    price: number;
    region: string;
    photo: string;
    category: Category | null;
    user: Usuario | null;
}
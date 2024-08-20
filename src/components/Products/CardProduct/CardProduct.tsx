import Product from "../../../models/Product"

interface CardProductProps{
    product: Product;
}
/*
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
*/

function CardProduct({product}: CardProductProps){
    return(
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <span>Nome do Produto</span>
                <p>Preço</p>
            </div>
            <div>
                <p>{product.name}</p>
            </div>
        </div>
    )
}

export default CardProduct
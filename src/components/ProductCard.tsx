import { Product } from "../types/types";

interface ProductCardProps {
    product: Product;
}

const ProductCard = (({product} : ProductCardProps)=> {
    const { name, price, quantity, status } = product;
    return (
        <>
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Quantity : {quantity}</p>
            <p>Status : {status}</p>
        </>
    )
})
export default ProductCard;
import { Product, AddToCartType } from "../types/types";
import Button from "./Button";

interface ProductCardProps {
    product: Product;
    addToCart?: AddToCartType;
}

const ProductCard = (({ product, addToCart }: ProductCardProps) => {
    const { name, price, quantity, status } = product;
    return (
        <>
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Quantity : {quantity}</p>
            <p>Status : {status}</p>
            {addToCart && (
                <Button
                    label="Add to cart"
                    onClick={() => {
                        addToCart(product);
                    }}
                />
            )}
        </>
    )
})
export default ProductCard;
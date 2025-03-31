import { Product, AddToCartType } from "../types/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Product[];
    addToCart: AddToCartType;
}

const ProductList = (({products, addToCart}: ProductListProps) => {
    if (products.length === 0) return <p>Products List Empty</p>
    return (
        <div>
            <h2>Shopping List</h2>
            {products.map((product) => (
                <article key={product.name}>
                    <ProductCard
                    product={product}
                    addToCart={addToCart}
                    />
                    <p>---------------</p>
                </article>
            ))}
        </div>
    );
});
export default ProductList;
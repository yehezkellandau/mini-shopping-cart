import { Product } from "../types/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Product[];
}

const ProductList = (({products}: ProductListProps) => {
    if (products.length === 0) return <p>Products List Empty</p>
    return (
        <div>
            {products.map((product) => (
                <article key={product.name}>
                    <ProductCard
                    product={product}
                    />
                </article>
            ))}
        </div>
    );
});
export default ProductList;
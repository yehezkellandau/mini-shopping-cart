import { Product } from "../types/types";
import ProductCard from "./ProductCard";

interface ShoppingCartProps {
    products: Product[];
}

const ShoppingCart = ({ products }: ShoppingCartProps)=>{
    if (products.length === 0) return <p>Panier vide</p>;
  return (
    <div>
        <h2>Shopping Cart</h2>
      {products.map((product) => (
        <div key={product.name}>
          <ProductCard product={product} />
          <p>---------------</p>
        </div>
      ))}
    </div>
  );
};
export default ShoppingCart;
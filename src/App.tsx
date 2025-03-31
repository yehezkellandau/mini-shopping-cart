import { useState, useEffect } from 'react';
import Form from './components/Form'
import './App.css';
import { Product } from './types/types';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  
  const addNewProduct = ((product:Product) => {
    setProducts((prevProduct) => [...prevProduct, product])
  })
  const addToCart = ((product: Product)=> {
    setCartProducts((prevProduct) => [...prevProduct, product]);
  })

  return (
    <div className="App">
      <Form onClick={addNewProduct} />
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart products={cartProducts} />
    </div>
  );
}

export default App;

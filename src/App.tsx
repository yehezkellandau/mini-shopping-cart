import { useState, useEffect } from 'react';
import Form from './components/Form'
import './App.css';
import { Product } from './types/types';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState<Product[]>([])
  
  const addNewProduct = ((product:Product) => {
    setProducts((prevProduct) => [...prevProduct, product])
  })

  return (
    <div className="App">
      <Form onClick={addNewProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;

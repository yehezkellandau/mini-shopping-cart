import { useState, useEffect } from 'react';
import Form from './components/Form'
import './App.css';
import { Product } from './types/types';

function App() {
  const [products, setProducts] = useState<Product[]>([])
  
  const addNewProduct = ((product:Product) => {
    setProducts((prevProduct) => [...prevProduct, product])
  })
  
  return (
    <div className="App">
      <Form onClick={addNewProduct} />
    </div>
  );
}

export default App;

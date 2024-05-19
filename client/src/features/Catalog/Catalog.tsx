import { useState, useEffect } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    // life cycle of componet access to it mounts unmounts
    
      useEffect(() => {  
        fetch('http://localhost:5000/api/products')
          .then(response => response.json())
          .then(data => setProducts(data));
      }, [])   
    
    
    return (
        <>
            <ProductList products={products} />
        </>
    )
}
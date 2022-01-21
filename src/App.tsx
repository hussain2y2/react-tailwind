import React, {useEffect, useState} from 'react';
import './style.css';
import FirstFive from './FirstFive';
import ProductsList from './ProductsList';

export default function App() {
  const [products, setProducts] = useState([]);
  const [showFive, setShowFive] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then(response => response.json())
      .then(products => {
        setProducts(products)
      })
  }, [])
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between">
        <h1 className="mx-10 mt-3">All Products</h1>
        <button
          className="text-white px-3 py-2 mx-10 mt-3 rounded-lg bg-purple-700 hover:bg-purple-600"
          onClick={() => setShowFive(!showFive)}
        >
          {!showFive ? "Show Five Products" : "Show All"}
        </button>
      </div>
      {products.length && showFive ? (
        <FirstFive products={products.slice(0, 5)}/>
      ) : (
        <ProductsList products={products}/>
      )}
    </div>
  );
}

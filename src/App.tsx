import React, {useEffect, useState} from 'react';
import './style.css';
import FirstFive from './FirstFive';
import ProductsList from './ProductsList';

export default function App() {
  // Initial states for products and showFive
  const [products, setProducts] = useState([]);
  const [showFive, setShowFive] = useState(false);

  useEffect(() => {
    // fetch is used here to get products list from the given API end point, we can use axios but we need to install axios package for that.
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then(response => response.json())
      .then(products => {
        // Set products list
        setProducts(products)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between">
        <h1 className="mx-10 mt-3">{!showFive ? "All Products" : "First Five Products"}</h1>
        {/* Switch button to show first five and all products */}
        <button
          className="text-white px-3 py-2 mx-10 mt-3 rounded-lg bg-purple-700 hover:bg-purple-600"
          onClick={() => setShowFive(!showFive)}
        >
          {!showFive ? "Show Five Products" : "Show All"}
        </button>
      </div>
      {products.length && showFive ? (
        <FirstFive products={products.slice(0, 5)}/> // Show first five products detail (title as name, image (slicing images array))
      ) : (
        <ProductsList products={products}/> // Show all products (title as name, description, and price)
      )}
    </div>
  );
}

import React from 'react';
import {Product} from './product';

export default function ProductsList({products}: any) {
  return (
    <div className="flex flex-row justify-start">
      <ul className="bg-white border rounded list-none list-inside px-2 py-4 mx-10 my-3">
        <li className="flex justify-start p-4 border-b-0">
          <span className="w-1/5 p-1 font-medium">Title</span>
          <span className="w-4/5 p-1 font-medium">Description</span>
          <span className="w-1/5 p-1 font-medium">Price</span>
        </li>
        {products.map(({title, description, images, price}: Product, key: number) =>
          <li key={key} className="flex justify-start p-4 border-b-0">
            <span className="w-1/5 p-1 text-left">{title}</span>
            <span className="w-4/5 p-1">{description}</span>
            <span className="w-1/5 p-1">{price}</span>
            {/*<img className="w-16 h-16" src={images.shift()} alt={title} loading="lazy" />*/}
          </li>
        )}
      </ul>
    </div>
  );
}
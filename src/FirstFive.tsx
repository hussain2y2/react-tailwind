import React from 'react';
import {Product} from './product';

export default function FirstFive({products}: any) {
  return (
    <div className="flex flex-row justify-center">
      <ul className="bg-white border rounded list-none list-inside px-2 py-4 mx-10 my-3">
        <li className="flex justify-start p-4 border-b-0">
          <span className="w-6/12 p-1 font-medium">Title</span>
          <span className="w-9/12 p-1 font-medium">Image</span>
        </li>
        {products.map(({title, description, images, price}: Product, key: number) =>
          <li key={key} className="flex justify-between p-4 border-b-0">
            <span className="w-6/12 p-1">{title}</span>
            <span className="w-9/12 p-1">
              <img className="w-96 h-36" src={images.shift()} alt={title} loading="lazy"/>
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}
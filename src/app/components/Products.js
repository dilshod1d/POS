"use client";
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

export default function Products() {
  const dispatch = useDispatch();
  const products = [
    { name: "Burger", price: 4.99, imageSrc: "/burger.png" },
    { name: "Fries", price: 1.49, imageSrc: "/fries.png" },
    { name: "Hotdog", price: 3.49, imageSrc: "/hotdog.png" },
    { name: "Pizza", price: 7.99, imageSrc: "/pizza.png" },
    { name: "Donut", price: 1.49, imageSrc: "/donuts.png" },
    { name: "Burger", price: 4.99, imageSrc: "/burger.png" },
    { name: "Fries", price: 1.49, imageSrc: "/fries.png" },
    { name: "Hotdog", price: 3.49, imageSrc: "/hotdog.png" },
    { name: "Pizza", price: 7.99, imageSrc: "/pizza.png" },
    { name: "Donut", price: 1.49, imageSrc: "/donuts.png" },
    { name: "Pizza", price: 7.99, imageSrc: "/pizza.png" },
    { name: "Donut", price: 1.49, imageSrc: "/donuts.png" },
  ];

  const handleAddToCart = (product) => {
    // Dispatch an action to add the product to the cart
    dispatch(addToCart({ ...product, id: Math.random() })); // Ensure each product has a unique ID
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-2 flex flex-col items-center"
          >
            <Image
              width={100}
              height={100}
              src={product.imageSrc}
              alt={product.name}
              className="w-24 h-24"
            />
            <h3 className="text-white text-lg">{product.name}</h3>
            <p className="text-yellow-300 text-sm">
              ${product.price.toFixed(2)}
            </p>

            <button
              className="bg-yellow-500 text-gray-900 rounded px-4 hover:bg-yellow-600 transition-colors"
              onClick={() => handleAddToCart(product)}
            >
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

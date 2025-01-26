import React, { useState } from "react";
import Popup from "./Popup";

function ItemCard({ product, onAddToCart }) {
  const { Name, Price, image, id, collectionId } = product;
  const [showPopup, setShowPopup] = useState(false);

  // Construct the image URL dynamically
  const imageUrl = image
    ? `https://interview.gdev.gosbfy.com/api/files/${collectionId}/${id}/${image}`
    : "https://via.placeholder.com/150"; // Fallback image if none exists

  console.log("Constructed Image URL:", imageUrl);

  return (
    <>
      <div className="relative group border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer">
        {/* Product Image */}
        <img
          src={imageUrl}
          alt={Name || "Product Image"}
          className="w-full h-60 object-cover transition-transform group-hover:scale-110"
        />

        {/* Hover Icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-transform scale-75 group-hover:scale-100 group-hover:animate-wave delay-75"
            onClick={() => setShowPopup(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-transform scale-75 group-hover:scale-100 group-hover:animate-wave delay-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3l18 18m-2-2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v11"
              />
            </svg>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-transform scale-75 group-hover:scale-100 group-hover:animate-wave delay-225">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.84 4.61a5.5 5.5 0 01.21 7.78L12 20.5l-9.05-8.11a5.5 5.5 0 01.21-7.78 5.5 5.5 0 017.78 0L12 5.23l1.06-1.06a5.5 5.5 0 017.78 0z"
              />
            </svg>
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col items-center justify-center">
  <h2 className="text-lg font-semibold truncate text-center">
    {Name || "Unnamed Product"}
  </h2>
  <p className="text-sm text-gray-500 text-center">Price: ₹{Price ?? "N/A"}</p>
          {/* <button
            onClick={() => onAddToCart(product)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            View Details
          </button> */}
        </div>
      </div>
      {showPopup && (
        <Popup
          product={product}
          onClose={() => setShowPopup(false)}
          onAddToCart={(product, quantity) => onAddToCart(product, quantity)}
        />
      )}
    </>
  );
}

export default ItemCard;

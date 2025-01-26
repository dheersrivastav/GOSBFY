import React, { useState } from "react";


const Popup = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  // const [cartCount, setCartCount] = useState(0);

  console.log("Product in Popup:", product);

  
  // Handle quantity changes
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
    onClose(); // Pass product and quantity
  };

  const imageUrl = product.image
    ? `https://interview.gdev.gosbfy.com/api/files/${product.collectionId}/${product.id}/${product.image}`
    : "https://via.placeholder.com/150"; // Fallback image



  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backdropFilter: "blur(6px)", // Adds a blur effect to the background
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim the background slightly
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative flex gap-6">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Product Image */}
        <div className="w-1/2">
          <img
            src={imageUrl}
            alt={product.Name || "Product"}
            className="w-full h-full object-cover rounded-md"
          />
          
        </div>

        {/* Product Details */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">{product.Name || "Unnamed Product"}</h2>
          <p className="text-xl text-gray-600 mt-2">₹{product.Price ?? "N/A"}</p>
          <p className="text-green-500 font-medium mt-1">Available: In-stock</p>
          <p className="text-gray-700 mt-4">{product.Desc || "No description available."}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-6">
            <button
              className="bg-gray-200 px-4 py-2 rounded-l-md hover:bg-gray-300"
              onClick={handleDecrease}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border-y border-gray-300"
            />
            <button
              className="bg-gray-200 px-4 py-2 rounded-r-md hover:bg-gray-300"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md mt-6 hover:bg-blue-600 transition"
            onClick={handleAddToCartClick}
          >
            Add to Cart
          </button>

          {/* Additional Information */}
          <div className="mt-6 text-sm text-gray-500">
            <p>SKU: {product.id || "N/A"}</p>
            <p>
              Categories: <span className="text-gray-700">Accessory, Decoration, Furniture</span>
            </p>
            <p>
              Tags: <span className="text-gray-700">Accessories, Chair, Glass</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

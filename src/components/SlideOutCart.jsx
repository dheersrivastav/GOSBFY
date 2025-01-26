import React from "react";

function SlideOutCart({ isOpen, cartItems, onClose, onRemoveItem }) {
  console.log("Cart Items:", cartItems); // Debugging: Check the actual structure of cartItems

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.Price || 0) * (item.quantity || 1),
    0
  );

  const getImageUrl = (item) => {
    if (item.image && item.collectionId && item.id) {
      return `https://interview.gdev.gosbfy.com/api/files/${item.collectionId}/${item.id}/${item.image}`;
    }
    return "https://via.placeholder.com/150";
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 bg-white w-80 shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          &times;
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4 overflow-y-auto">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              {/* Constructed Image URL */}
              <img
                src={getImageUrl(item)}
                alt={item.Name || "Unnamed Product"}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-bold">{item.Name || "Unnamed Product"}</h3>
                <p className="text-sm">Qty: {item.quantity || 1}</p>
                <p className="text-sm">Price: ₹{item.Price || 0}</p>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <p className="font-bold">Subtotal: ₹{subtotal.toFixed(2)}</p>
        <button className="bg-white text-black w-full py-2 rounded-md mt-2">
          View Cart
        </button>
        <button className="bg-black text-white w-full py-2 rounded-md mt-2">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default SlideOutCart;

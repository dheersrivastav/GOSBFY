// import React, { useState } from "react";
// import Header from "./components/Header";
// import ItemCard from "./components/ItemCard";
// import Popup from "./components/Popup";
// import SlideOutCart from "./components/SlideOutCart";
// import "./index.css";


// function App() {
//   const products = [
//     {
//       id: 1,
//       Name: "Sample Product 1",
//       Price: 500,
//       image: "https://interview.gdev.gosbfy.com/api/files/pbc_176316437/o0uez9ya2o8f403/585x585_gvy84yebry.jpg",
//       collectionId: "collection1",
//     },
//     {
//       id: 2,
//       Name: "Sample Product 2",
//       Price: 1000,
//       image: "https://interview.gdev.gosbfy.com/api/files/pbc_176316437/f122958e1yk1y2g/585x585_1_3bntce7lmd.jpg",
//       collectionId: "collection2",
//     },
//     {
//       id: 3,
//       Name: "Sample Product 3",
//       Price: 1500,
//       image: "https://interview.gdev.gosbfy.com/api/files/pbc_176316437/ui0219499z29807/585x585_2_zw8oshc3m5.jpg",
//       collectionId: "collection3",
//     },
//   ];

//   const [cart, setCart] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const handleAddToCart = (product, quantity) => {
//     const existingProduct = cart.find((item) => item.id === product.id);
//     if (existingProduct) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity }]);
//     }
//     setShowPopup(false);
//   };

//   const openPopup = (product) => {
//     setSelectedProduct(product);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter((item) => item.id !== productId));
//   };

//   return (
//     <div>
//       <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} onCartClick={toggleCart} />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {products.map((product) => (
//           <ItemCard
//             key={product.id}
//             product={product}
//             onAddToCart={() => openPopup(product)}
//           />
//         ))}
//       </div>
//       {showPopup && (
//         <Popup
//           product={selectedProduct}
//           onAddToCart={handleAddToCart}
//           onClose={closePopup}
//         />
//       )}
//       <SlideOutCart
//         isOpen={isCartOpen}
//         cartItems={cart}
//         onClose={toggleCart}
//         onRemoveItem={removeFromCart}
//       />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import Popup from "./components/Popup";
import SlideOutCart from "./components/SlideOutCart";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://interview.gdev.gosbfy.com/api/collections/Products/records" // Replace with your API endpoint
        );
        const data = await response.json();
        setProducts(data.items || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    setShowPopup(false);
  };

  const openPopup = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const removeFromCart = (productId) =>
    setCart(cart.filter((item) => item.id !== productId));

  return (
    <div>
      <Header
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={toggleCart}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
            onAddToCart={() => openPopup(product)}
          />
        ))}
      </div>
      {showPopup && (
        <Popup
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          onClose={closePopup}
        />
      )}
      <SlideOutCart
        isOpen={isCartOpen}
        cartItems={cart}
        onClose={toggleCart}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;

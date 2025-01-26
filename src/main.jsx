import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Sample product data

  // Uncomment the following block when the API is ready to use.
    /*
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://interview.gdev.gosbfy.com/api/collections/Products/rec"
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setProducts(data.items);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
    */
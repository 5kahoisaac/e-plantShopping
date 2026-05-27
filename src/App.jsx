import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div>
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-overlay">
            <div className="landing-content">
              <h1 className="landing-title">Paradise Nursery</h1>
              <p className="landing-tagline">
                Bring Nature Home — Beautiful Plants Delivered to Your Door
              </p>
              <button className="get-started-btn" onClick={handleGetStarted}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

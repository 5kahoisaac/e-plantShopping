import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          🌿 Paradise Nursery
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Plants
        </Link>
        <Link to="/cart" className="nav-link cart-link">
          <span className="cart-icon">🛒</span>
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

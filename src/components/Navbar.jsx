import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">DEV CLOTHING</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/shop">Shop</Link>
      </div>

      <div className="navbar-actions">
        <Link to="/search" aria-label="Search">
          🔍
        </Link>

        <Link to="/cart" aria-label="Shopping Cart">
          🛍️
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
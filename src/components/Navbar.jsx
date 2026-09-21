import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlist.length;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}

      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          DEV CLOTHING
        </Link>
      </div>

      {/* NAVIGATION */}

      <div
        className={`navbar-links ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/men" onClick={closeMenu}>
          Men
        </Link>

        <Link to="/women" onClick={closeMenu}>
          Women
        </Link>

        <Link to="/shop" onClick={closeMenu}>
          Shop
        </Link>

        <Link to="/orders">Orders</Link>
        <Link to="/account">Account</Link>
      </div>
      

      {/* ACTIONS */}

      <div className="navbar-actions">

        <Link
          to="/search"
          className="navbar-action"
          aria-label="Search"
        >
          <span className="navbar-icon">⌕</span>
        </Link>

        <Link
          to="/wishlist"
          className="navbar-action"
          aria-label="Wishlist"
        >
          <span className="navbar-icon">♡</span>

          {wishlistCount > 0 && (
            <span className="navbar-count">
              {wishlistCount}
            </span>
          )}
        </Link>

        <Link
          to="/cart"
          className="navbar-action"
          aria-label="Shopping Cart"
        >
          <span className="navbar-icon">🛍</span>

          {cartCount > 0 && (
            <span className="navbar-count">
              {cartCount}
            </span>
          )}
        </Link>

        {/* MOBILE MENU BUTTON */}

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
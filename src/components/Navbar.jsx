import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlist.length;

  return (
    <nav className="navbar">

      {/* LOGO */}

      <div className="navbar-logo">
        <Link to="/">
          DEV CLOTHING
        </Link>
      </div>

      {/* NAVIGATION */}

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/shop">Shop</Link>
      </div>

      {/* ACTIONS */}

      <div className="navbar-actions">

        {/* SEARCH */}

        <Link
          to="/search"
          aria-label="Search"
        >
          🔍
        </Link>

        {/* WISHLIST */}

        <Link
          to="/wishlist"
          aria-label="Wishlist"
        >
          ♡
          {wishlistCount > 0 && (
            <span>{wishlistCount}</span>
          )}
        </Link>

        {/* CART */}

        <Link
          to="/cart"
          aria-label="Shopping Cart"
        >
          🛍️
          {cartCount > 0 && (
            <span>{cartCount}</span>
          )}
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
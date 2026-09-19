import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <main className="wishlist-page">
        <div className="empty-wishlist">

          <div className="wishlist-empty-icon">
            ♡
          </div>

          <p className="wishlist-label">
            DEV CLOTHING
          </p>

          <h1>Your Wishlist is Empty</h1>

          <p>
            Save your favorite products here and
            come back to them anytime.
          </p>

          <Link
            to="/shop"
            className="continue-shopping-button"
          >
            Explore Products
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="wishlist-page">

      <div className="wishlist-container">

        <div className="section-heading">
          <p>YOUR FAVORITES</p>
          <h1>My Wishlist</h1>
        </div>

        <p className="wishlist-count">
          {wishlist.length} product
          {wishlist.length !== 1 ? "s" : ""} saved
        </p>

        <div className="products-grid">

          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </main>
  );
}

export default Wishlist;
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card">

      <div className="product-image-container">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </Link>

        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        <button
          className={`product-wishlist ${
            isWishlisted ? "wishlisted" : ""
          }`}
          onClick={handleWishlist}
          aria-label="Add to wishlist"
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category} · {product.type}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <p className="product-price">
          ₹{product.price}
        </p>

        <div className="product-stock">
  {product.stock === 0 ? (
    <span className="out-of-stock">
      Out of Stock
    </span>
  ) : product.stock <= 5 ? (
    <span className="low-stock">
      Only {product.stock} left
    </span>
  ) : (
    <span className="in-stock">
      In Stock
    </span>
  )}
</div>

      </div>

    </div>
  );
}

export default ProductCard;
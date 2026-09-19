import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import products from "../data";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes[0] || ""
  );

  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0] || ""
  );

  const [added, setAdded] = useState(false);
  const [stockMessage, setStockMessage] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="product-details-page">
        <div className="product-details">
          <div className="product-details-info">
            <h1>Product Not Found</h1>
          </div>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    const success = addToCart(
      product,
      selectedSize,
      selectedColor,
      quantity
    );

    if (success) {
      setAdded(true);
      setStockMessage("");
    } else {
      setAdded(false);
      setStockMessage(
        `Only ${product.stock} items available.`
      );
    }
  };

  return (
    <main className="product-details-page">
      <div className="product-details">

        {/* PRODUCT IMAGE */}

        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* PRODUCT INFORMATION */}

        <div className="product-details-info">

          <p className="product-details-category">
            {product.category} / {product.type}
          </p>

          <h1>{product.name}</h1>

          <p className="product-details-price">
            ₹{product.price}
          </p>

          <p className="product-details-stock">
            {product.stock} items available
          </p>

          {/* SIZE */}

          <div className="product-option">
            <h3>Size: {selectedSize}</h3>

            <div className="option-buttons">

              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={
                    selectedSize === size
                      ? "selected-option"
                      : ""
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}

            </div>
          </div>

          {/* COLOR */}

          <div className="product-option">
            <h3>Color: {selectedColor}</h3>

            <div className="option-buttons">

              {product.colors.map((color) => (
                <button
                  key={color}
                  className={
                    selectedColor === color
                      ? "selected-option"
                      : ""
                  }
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}

            </div>
          </div>

          {/* QUANTITY */}

          <div className="product-option quantity-option">

            <h3>Quantity</h3>

            <div className="product-quantity-controls">

              <button
                onClick={() =>
                  setQuantity((current) =>
                    Math.max(1, current - 1)
                  )
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity((current) =>
                    Math.min(
                      product.stock,
                      current + 1
                    )
                  )
                }
              >
                +
              </button>

            </div>

          </div>

          {/* ADD TO CART */}

          <button
            className="add-to-cart-button"
            onClick={handleAddToCart}
          >
            {added
              ? "Added to Cart ✓"
              : "Add to Cart"}
          </button>

          {stockMessage && (
            <p className="stock-error-message">
              {stockMessage}
            </p>
          )}

          {/* WISHLIST */}

          <button
            className="wishlist-button"
            onClick={() => {
              if (isInWishlist(product.id)) {
                removeFromWishlist(product.id);
              } else {
                addToWishlist(product);
              }
            }}
          >
            {isInWishlist(product.id)
              ? "♥ Remove from Wishlist"
              : "♡ Add to Wishlist"}
          </button>

          {/* EXCHANGE POLICY */}

          <div className="product-policy">

            <div className="policy-item">
              <strong>Exchange Available</strong>

              <span>
                Eligible products can be exchanged
                according to our exchange policy.
              </span>
            </div>

            <div className="policy-item">
              <strong>No Returns</strong>

              <span>
                We currently do not offer returns.
              </span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}

export default ProductDetails;
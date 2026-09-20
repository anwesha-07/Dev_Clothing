import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
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

  /*
    Reset product-specific state whenever
    the product ID changes.
  */
  useEffect(() => {
    setSelectedSize(product?.sizes[0] || "");
    setSelectedColor(product?.colors[0] || "");
    setQuantity(1);
    setAdded(false);
    setStockMessage("");
  }, [id]);

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

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <main className="product-details-page">

      {/* PRODUCT DETAILS */}

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

          {/* DESCRIPTION */}

          <p className="product-details-description">
            {product.description}
          </p>

          {/* STOCK */}

          <p className="product-details-stock">
            {product.stock} items available
          </p>

          {/* SIZE */}

          <div className="product-option">

            <h3>
              Size: {selectedSize}
            </h3>

            <div className="option-buttons">

              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={
                    selectedSize === size
                      ? "selected-option"
                      : ""
                  }
                  onClick={() =>
                    setSelectedSize(size)
                  }
                >
                  {size}
                </button>
              ))}

            </div>

          </div>

          {/* COLOR */}

          <div className="product-option">

            <h3>
              Color: {selectedColor}
            </h3>

            <div className="option-buttons">

              {product.colors.map((color) => (
                <button
                  key={color}
                  className={
                    selectedColor === color
                      ? "selected-option"
                      : ""
                  }
                  onClick={() =>
                    setSelectedColor(color)
                  }
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
            disabled={product.stock === 0}
          >
            {product.stock === 0
              ? "Out of Stock"
              : added
              ? "Added to Cart ✓"
              : "Add to Cart"}
          </button>

          {/* STOCK ERROR */}

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

              <strong>
                Exchange Available
              </strong>

              <span>
                Eligible products can be exchanged
                according to our exchange policy.
              </span>

            </div>

            <div className="policy-item">

              <strong>
                No Returns
              </strong>

              <span>
                We currently do not offer returns.
              </span>

            </div>

          </div>

          {/* PRODUCT DETAILS */}

          <div className="product-details-extra">

            <h3>Product Details</h3>

            <div className="details-list">

              <div className="details-row">
                <span>Category</span>
                <strong>
                  {product.category}
                </strong>
              </div>

              <div className="details-row">
                <span>Type</span>
                <strong>
                  {product.type}
                </strong>
              </div>

              <div className="details-row">
                <span>Available Sizes</span>
                <strong>
                  {product.sizes.join(", ")}
                </strong>
              </div>

              <div className="details-row">
                <span>Available Colors</span>
                <strong>
                  {product.colors.join(", ")}
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* YOU MAY ALSO LIKE */}

      {relatedProducts.length > 0 && (
        <section className="related-products">

          <div className="section-heading">

            <p>
              COMPLETE YOUR LOOK
            </p>

            <h2>
              You May Also Like
            </h2>

          </div>

          <div className="products-grid">

            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}

          </div>

        </section>
      )}

    </main>
  );
}

export default ProductDetails;
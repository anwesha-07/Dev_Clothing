import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (product) => product.id === Number(id)
  );
  
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes[0] || ""
  );

  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0] || ""
  );

  if (!product) {
    return (
      <main className="product-details-page">
        <h1>Product Not Found</h1>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <div className="product-details">

        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

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

          <div className="product-option">
            <h3>Size: {selectedSize}</h3>

            <div className="option-buttons">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={
                    selectedSize === size ? "selected-option" : ""
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-option">
            <h3>Color: {selectedColor}</h3>

            <div className="option-buttons">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={
                    selectedColor === color ? "selected-option" : ""
                  }
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

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
          Math.min(product.stock, current + 1)
        )
      }
    >
      +
    </button>

  </div>

</div>

          <button
  className="add-to-cart-button"
  onClick={() => {
    addToCart(
  product,
  selectedSize,
  selectedColor,
  quantity
);
    setAdded(true);
  }}
>
  {added ? "Added to Cart ✓" : "Add to Cart"}
</button>

<div className="product-policy">

  <div className="policy-item">
    <strong>Exchange Available</strong>
    <span>Eligible products can be exchanged according to our exchange policy.</span>
  </div>

  <div className="policy-item">
    <strong>No Returns</strong>
    <span>We currently do not offer returns.</span>
  </div>

</div>

        </div>

      </div>
    </main>
  );
}

export default ProductDetails;
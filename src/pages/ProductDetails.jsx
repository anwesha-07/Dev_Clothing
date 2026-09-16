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

          <button
  className="add-to-cart-button"
  onClick={() => {
    addToCart(product, selectedSize, selectedColor);
    setAdded(true);
  }}
>
  {added ? "Added to Cart ✓" : "Add to Cart"}
</button>

        </div>

      </div>
    </main>
  );
}

export default ProductDetails;
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <p className="product-category">{product.category}</p>

          <h3>{product.name}</h3>

          <p className="product-price">₹{product.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
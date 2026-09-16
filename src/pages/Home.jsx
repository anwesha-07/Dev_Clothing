import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO DEV CLOTHING</p>

          <h1>Discover Your Style</h1>

          <p className="hero-description">
            Explore our latest collection of fashion for every style and every
            occasion.
          </p>

          <div className="hero-buttons">
            <Link to="/men" className="hero-button">
              Shop Men
            </Link>

            <Link to="/women" className="hero-button">
              Shop Women
            </Link>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="categories">
        <div className="section-heading">
          <p>EXPLORE OUR COLLECTION</p>
          <h2>Shop by Category</h2>
        </div>

        <div className="category-grid">
          <Link to="/men" className="category-card men-card">
            <div className="category-overlay">
              <h3>Men</h3>
              <span>Shop Now →</span>
            </div>
          </Link>

          <Link to="/women" className="category-card women-card">
            <div className="category-overlay">
              <h3>Women</h3>
              <span>Shop Now →</span>
            </div>
          </Link>
        </div>
      </section>

    {/* New Arrivals Section */}
<section className="products-section">
  <div className="section-heading">
    <p>OUR LATEST COLLECTION</p>
    <h2>New Arrivals</h2>
  </div>

  <div className="products-grid">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</section>
    </main>
  );
}

export default Home;
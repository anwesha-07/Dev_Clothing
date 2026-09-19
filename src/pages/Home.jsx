import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data";

function Home() {
  return (
    <main>
     {/* Hero Section */}

<section className="hero">

  <div className="hero-content">

    <p className="hero-subtitle">
      NEW SEASON • NEW STYLE
    </p>

    <h1>
      Discover Your Style
    </h1>

    <p className="hero-description">
      Explore timeless essentials, everyday fashion,
      and fresh styles for every occasion.
    </p>

    <div className="hero-buttons">

      <Link
        to="/men"
        className="hero-button"
      >
        Shop Men
      </Link>

      <Link
        to="/women"
        className="hero-button"
      >
        Shop Women
      </Link>

      <Link
        to="/shop"
        className="hero-button hero-button-outline"
      >
        View Collection
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
  {products.slice(0, 4).map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>

<div className="home-section-button">
  <Link to="/shop" className="home-view-all">
    View All Products →
  </Link>
</div>
</section>

{/* Sale Collection Section */}

<section className="products-section sale-section">

  <div className="section-heading">
    <p>LIMITED TIME</p>
    <h2>Sale Collection</h2>
  </div>

  <div className="products-grid">

    {products
      .filter((product) => product.badge === "Sale")
      .map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

  </div>

  <div className="home-section-button">
    <Link
      to="/shop"
      className="home-view-all"
    >
      Shop All Products →
    </Link>
  </div>

</section>


{/* Why Choose Us Section */}

<section className="why-us">

  <div className="section-heading">
    <p>WHY DEV CLOTHING</p>
    <h2>Why Shop With Us?</h2>
  </div>

  <div className="why-us-grid">

    <div className="why-us-card">
      <h3>Quality Fashion</h3>
      <p>
        Discover carefully selected styles
        for your everyday wardrobe.
      </p>
    </div>

    <div className="why-us-card">
      <h3>Easy Exchanges</h3>
      <p>
        Eligible products can be exchanged
        according to our exchange policy.
      </p>
    </div>

    <div className="why-us-card">
      <h3>Secure Checkout</h3>
      <p>
        A simple and secure checkout experience
        for your orders.
      </p>
    </div>

    <div className="why-us-card">
      <h3>Customer Support</h3>
      <p>
        We're here to help with your orders,
        products, and exchange questions.
      </p>
    </div>

  </div>

</section>

{/* Newsletter Section */}

<section className="newsletter">

  <div className="newsletter-content">

    <p>STAY IN THE LOOP</p>

    <h2>Get the Latest from DEV CLOTHING</h2>

    <p className="newsletter-description">
      Be the first to know about new collections,
      special offers, and latest styles.
    </p>

    <form className="newsletter-form">

      <input
        type="email"
        placeholder="Enter your email address"
      />

      <button type="button">
        Subscribe
      </button>

    </form>

  </div>

</section>

    </main>
  );
}

export default Home;
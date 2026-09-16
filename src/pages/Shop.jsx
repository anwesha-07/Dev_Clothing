import ProductCard from "../components/ProductCard";
import products from "../data";

function Shop() {
  return (
    <main>
      <section className="shop-page">
        <div className="section-heading">
          <p>EXPLORE OUR COLLECTION</p>
          <h1>Shop All Products</h1>
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

export default Shop;
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.type.toLowerCase().includes(search)
    );
  });

  return (
    <main className="search-page">

      <div className="search-container">

        <div className="section-heading">
          <p>FIND YOUR STYLE</p>
          <h1>Search Products</h1>
        </div>

        <div className="search-box">

        <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        />

        {searchTerm && (
        <button
        className="clear-search-button"
        onClick={() => setSearchTerm("")}
        >
            Clear
        </button>
        )}

        </div>

        {searchTerm && (
          <p className="search-result-text">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} found
            for "{searchTerm}"
          </p>
        )}

        {filteredProducts.length > 0 ? (
          <div className="products-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (
          <div className="no-results">

            <h2>No Products Found</h2>

            <p>
              We couldn't find any products matching
              "{searchTerm}".
            </p>

          </div>
        )}

      </div>

    </main>
  );
}

export default Search;
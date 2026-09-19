import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data";

function Shop() {
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const types = [
    "All",
    ...new Set(products.map((product) => product.type)),
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All" ||
      product.category === category;

    const typeMatch =
      type === "All" ||
      product.type === type;

    let priceMatch = true;

    if (priceRange === "under1000") {
      priceMatch = product.price < 1000;
    }

    if (priceRange === "1000to1500") {
      priceMatch =
        product.price >= 1000 &&
        product.price <= 1500;
    }

    if (priceRange === "above1500") {
      priceMatch = product.price > 1500;
    }

    return (
      categoryMatch &&
      typeMatch &&
      priceMatch
    );
  });

  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {
      if (sortBy === "priceLowHigh") {
        return a.price - b.price;
      }

      if (sortBy === "priceHighLow") {
        return b.price - a.price;
      }

      if (sortBy === "nameAZ") {
        return a.name.localeCompare(b.name);
      }

      if (sortBy === "nameZA") {
        return b.name.localeCompare(a.name);
      }

      return 0;
    }
  );

  const resetFilters = () => {
    setCategory("All");
    setType("All");
    setPriceRange("All");
    setSortBy("default");
  };

  return (
    <main>
      <section className="shop-page">

        <div className="section-heading">
          <p>EXPLORE OUR COLLECTION</p>
          <h1>Shop All Products</h1>
        </div>

        {/* FILTERS */}

        <div className="shop-filters">

          {/* CATEGORY */}

          <div className="filter-group">
            <label>Category</label>

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* TYPE */}

          <div className="filter-group">
            <label>Product Type</label>

            <select
              value={type}
              onChange={(event) =>
                setType(event.target.value)
              }
            >
              {types.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* PRICE */}

          <div className="filter-group">
            <label>Price</label>

            <select
              value={priceRange}
              onChange={(event) =>
                setPriceRange(event.target.value)
              }
            >
              <option value="All">
                All Prices
              </option>

              <option value="under1000">
                Under ₹1,000
              </option>

              <option value="1000to1500">
                ₹1,000 – ₹1,500
              </option>

              <option value="above1500">
                Above ₹1,500
              </option>
            </select>
          </div>

          {/* SORT */}

          <div className="filter-group">
            <label>Sort By</label>

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value)
              }
            >
              <option value="default">
                Default
              </option>

              <option value="priceLowHigh">
                Price: Low to High
              </option>

              <option value="priceHighLow">
                Price: High to Low
              </option>

              <option value="nameAZ">
                Name: A → Z
              </option>

              <option value="nameZA">
                Name: Z → A
              </option>
            </select>
          </div>

        </div>

        {/* RESET */}

        <button
          className="reset-filters-button"
          onClick={resetFilters}
        >
          Reset Filters
        </button>

        {/* PRODUCT COUNT */}

        <p className="shop-result-count">
          {sortedProducts.length} product
          {sortedProducts.length !== 1
            ? "s"
            : ""}{" "}
          found
        </p>

        {/* PRODUCTS */}

        {sortedProducts.length > 0 ? (
          <div className="products-grid">

            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (
          <div className="shop-no-results">

            <h2>No Products Found</h2>

            <p>
              Try changing your filters.
            </p>

          </div>
        )}

      </section>
    </main>
  );
}

export default Shop;
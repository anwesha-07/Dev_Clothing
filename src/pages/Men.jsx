import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data";

function Men() {
  const [selectedType, setSelectedType] = useState("All");

  const menProducts = products.filter(
    (product) => product.category === "Men"
  );

  const types = [
    "All",
    ...new Set(
      menProducts.map((product) => product.type)
    ),
  ];

  const filteredProducts =
    selectedType === "All"
      ? menProducts
      : menProducts.filter(
          (product) => product.type === selectedType
        );

  return (
    <main>
      <section className="category-page">

        <div className="section-heading">
          <p>DEV CLOTHING MEN</p>
          <h1>Men's Collection</h1>

          <p className="category-description">
            Discover everyday essentials, casual styles,
            and timeless pieces made for every occasion.
          </p>
        </div>

        <div className="category-filters">

          {types.map((type) => (
            <button
              key={type}
              className={
                selectedType === type
                  ? "active-filter"
                  : ""
              }
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}

        </div>

        <p className="category-result-count">
          {filteredProducts.length} product
          {filteredProducts.length !== 1
            ? "s"
            : ""}{" "}
          available
        </p>

        <div className="products-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>
    </main>
  );
}

export default Men;
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data";

function Women() {
  const [selectedType, setSelectedType] = useState("All");

  const womenProducts = products.filter(
    (product) => product.category === "Women"
  );

  const types = [
    "All",
    ...new Set(womenProducts.map((product) => product.type)),
  ];

  const filteredProducts =
    selectedType === "All"
      ? womenProducts
      : womenProducts.filter((product) => product.type === selectedType);

  return (
    <main>
      <section className="category-page">
        <div className="section-heading">
          <p>DEV CLOTHING WOMEN</p>
          <h1>Women's Collection</h1>
        </div>

        <div className="category-filters">
          {types.map((type) => (
            <button
              key={type}
              className={selectedType === type ? "active-filter" : ""}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Women;
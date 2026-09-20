import menShirt from "./assets/products/men-shirt.jpg";
import menJacket from "./assets/products/men-jacket.jpg";
import menTshirt from "./assets/products/men-tshirt.jpg";
import menJeans from "./assets/products/men-jeans.jpg";
import menKurta from "./assets/products/men-kurta.jpg";
import menHoodie from "./assets/products/men-hoodie.jpg";

import womenDress from "./assets/products/women-dress.jpg";
import womenTop from "./assets/products/women-top.jpg";
import womenJeans from "./assets/products/women-jeans.jpg";
import womenKurti from "./assets/products/women-kurti.jpg";
import womenSkirt from "./assets/products/women-skirt.jpg";
import womenCoords from "./assets/products/women-coords.jpg";

const products = [
  // =========================
  // MEN
  // =========================

  {
    id: 1,
    name: "Classic Black Shirt",
    category: "Men",
    type: "Shirts",
    price: 999,
    description:
    "A versatile black shirt designed for a clean and effortless everyday look.",
    image: menShirt,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    stock: 10,
    badge: "New",
  },

  {
    id: 2,
    name: "Casual Denim Jacket",
    category: "Men",
    type: "Jackets",
    price: 1499,
    description:
     "A timeless denim jacket that adds a relaxed and stylish layer to everyday outfits.",
    image: menJacket,
    sizes: ["M", "L", "XL"],
    colors: ["Blue"],
    stock: 8,
    badge: "Sale",
  },

  {
    id: 5,
    name: "Essential White T-Shirt",
    category: "Men",
    type: "T-Shirts",
    price: 699,
    description:
  "A comfortable white T-shirt with a clean design, perfect for everyday wear.",
    image: menTshirt,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    stock: 20,
  },

  {
    id: 6,
    name: "Classic Blue Jeans",
    category: "Men",
    type: "Jeans",
    price: 1399,
    description:
  "Classic blue jeans designed for comfortable everyday styling and easy pairing.",
    image: menJeans,
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue"],
    stock: 14,
  },

  {
    id: 7,
    name: "Traditional Cotton Kurta",
    category: "Men",
    type: "Kurtas",
    price: 1199,
     description:
  "A comfortable cotton kurta with a traditional look, suitable for casual and festive occasions.",
    image: menKurta,
    sizes: ["M", "L", "XL"],
    colors: ["White"],
    stock: 9,
  },

  {
    id: 8,
    name: "Comfort Fit Hoodie",
    category: "Men",
    type: "Hoodies",
    price: 1299,
    description:
  "A cozy everyday hoodie designed for a relaxed fit and comfortable casual wear.",
    image: menHoodie,
    sizes: ["M", "L", "XL"],
    colors: ["Black"],
    stock: 11,
  },


  // =========================
  // WOMEN
  // =========================

  {
    id: 3,
    name: "Elegant Women's Dress",
    category: "Women",
    type: "Dresses",
    price: 1299,
    description:
  "An elegant dress designed for effortless styling and a polished look.",
    image: womenDress,
    sizes: ["S", "M", "L"],
    colors: ["Black"],
    stock: 12,
  },

  {
    id: 4,
    name: "Women's Casual Top",
    category: "Women",
    type: "Tops",
    price: 799,
    description:
  "A versatile casual top that pairs easily with jeans, skirts, and everyday outfits.",
    image: womenTop,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    stock: 15,
  },

  {
    id: 9,
    name: "Women's Classic Jeans",
    category: "Women",
    type: "Jeans",
    price: 1399,
    description:
  "Classic women's jeans designed for comfortable everyday wear and easy styling.",
    image: womenJeans,
    sizes: ["28", "30", "32", "34"],
    colors: ["Blue"],
    stock: 13,
    badge: "Sale",
  },

  {
    id: 10,
    name: "Printed Everyday Kurti",
    category: "Women",
    type: "Kurtis",
    price: 999,
    description:
  "A stylish printed kurti designed for comfortable and effortless everyday wear.",
    image: womenKurti,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink"],
    stock: 16,
  },

  {
    id: 11,
    name: "Elegant Casual Skirt",
    category: "Women",
    type: "Skirts",
    price: 899,
    description:
  "A versatile skirt that brings a simple and elegant touch to casual outfits.",
    image: womenSkirt,
    sizes: ["S", "M", "L"],
    colors: ["Black"],
    stock: 10,
  },

 {
  id: 12,
  name: "Stylish Women's Co-ord Set",
  category: "Women",
  type: "Co-ords",
  price: 1599,
  description:
  "A coordinated outfit designed for an effortless, stylish, and comfortable everyday look.",
  image: womenCoords,
  sizes: ["S", "M", "L"],
  colors: ["Blue"],
  stock: 7,
  badge: "Sale",
},
];

export default products;
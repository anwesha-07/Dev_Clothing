import menShirt from "./assets/products/men-shirt.jpg";
import menJacket from "./assets/products/men-jacket.jpg";
import womenDress from "./assets/products/women-dress.jpg";
import womenTop from "./assets/products/women-top.jpg";

const products = [
  {
    id: 1,
    name: "Classic Black Shirt",
    category: "Men",
    type: "Shirts",
    price: 999,
    image: menShirt,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    stock: 10,
  },

  {
    id: 2,
    name: "Casual Denim Jacket",
    category: "Men",
    type: "Jackets",
    price: 1499,
    image: menJacket,
    sizes: ["M", "L", "XL"],
    colors: ["Blue"],
    stock: 8,
  },

  {
    id: 3,
    name: "Elegant Women's Dress",
    category: "Women",
    type: "Dresses",
    price: 1299,
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
    image: womenTop,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    stock: 15,
  },
];

export default products;
import menShirt from "./assets/products/men-shirt.jpg";
import menJacket from "./assets/products/men-jacket.jpg";
import womenDress from "./assets/products/women-dress.jpg";
import womenTop from "./assets/products/women-top.jpg";

const products = [
  {
    id: 1,
    name: "Classic Black Shirt",
    category: "Men",
    price: 999,
    image: menShirt,
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    category: "Men",
    price: 1499,
    image: menJacket,
  },
  {
    id: 3,
    name: "Elegant Women's Dress",
    category: "Women",
    price: 1299,
    image: womenDress,
  },
  {
    id: 4,
    name: "Women's Casual Top",
    category: "Women",
    price: 799,
    image: womenTop,
  },
];

export default products;
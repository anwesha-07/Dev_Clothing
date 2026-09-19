import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Shop from "./pages/Shop";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import ExchangePolicy from "./pages/ExchangePolicy";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/search" element={<Search />} />

            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/wishlist"
              element={<Wishlist />}
            />

            <Route path="/cart" element={<Cart />} />

            <Route
              path="/checkout"
              element={<Checkout />}
            />

            <Route
              path="/order-success"
              element={<OrderSuccess />}
            />
            <Route
              path="/exchange-policy"
              element={<ExchangePolicy />}
            />

            <Route
  path="/contact"
  element={<Contact />}
/>

          </Routes>

          <Footer />
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
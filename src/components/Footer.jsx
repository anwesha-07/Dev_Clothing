import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>DEV CLOTHING</h2>
          <p>
            Discover your style with our latest collection of fashion
            for every occasion.
          </p>
        </div>

        <div className="footer-links">
          <h3>SHOP</h3>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/shop">All Products</Link>
        </div>

        <div className="footer-links">
          <h3>HELP</h3>
          <Link to="/exchange-policy">Exchange Policy</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 DEV CLOTHING. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
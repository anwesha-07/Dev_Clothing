import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <main className="order-success-page">
      <div className="order-success-container">

        <div className="success-icon">
          ✓
        </div>

        <p className="success-label">
          DEV CLOTHING
        </p>

        <h1>Order Placed Successfully!</h1>

        <p className="success-message">
          Thank you for shopping with us.
          Your order has been received successfully.
        </p>

        <p className="order-note">
          We will contact you shortly with your order details
          and delivery information.
        </p>

        <div className="success-actions">
          <Link
            to="/shop"
            className="continue-shopping-button"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="back-home-button"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}

export default OrderSuccess;
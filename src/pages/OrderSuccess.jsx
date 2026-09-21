import { Link } from "react-router-dom";

function OrderSuccess() {
  const orderId =
    localStorage.getItem("devClothingOrderId") ||
    "DEV-000000";

  return (
    <main className="order-success-page">
      <div className="order-success-container">

        <div className="success-icon">
          ✓
        </div>

        <p className="success-label">
          DEV CLOTHING
        </p>

        <h1>
          Order Placed Successfully!
        </h1>

        <p className="success-message">
          Thank you for shopping with us.
          Your order has been received successfully.
        </p>

        <div className="order-id-box">

          <span>
            Order ID
          </span>

          <strong>
            {orderId}
          </strong>
          <p>
          Please keep this ID for your order reference.
         </p>

        </div>

        <div className="order-confirmation-box">

          <div className="confirmation-item">
            <span>Order Status</span>
            <strong>Confirmed</strong>
          </div>

          <div className="confirmation-item">
            <span>Payment Method</span>
            <strong>Cash on Delivery</strong>
          </div>

          <div className="confirmation-item">
            <span>Returns</span>
            <strong>Not Available</strong>
          </div>

          <div className="confirmation-item">
            <span>Exchange</span>
            <strong>Available</strong>
          </div>

        </div>

        <p className="order-note">
          We will contact you shortly with your order details
          and delivery information.
        </p>
        <div className="success-help">

  <h3>Need Help?</h3>

  <p>
    Have a question about your order or exchange?
  </p>

  <Link to="/contact">
    Contact Us →
  </Link>

</div>
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
import { Link } from "react-router-dom";

function Account() {
  const orders =
    JSON.parse(
      localStorage.getItem("devClothingOrders")
    ) || [];

  const latestOrder = orders[0];

  if (!latestOrder) {
    return (
      <main className="account-page">

        <div className="account-container">

          <div className="section-heading">
            <p>DEV CLOTHING</p>
            <h1>My Account</h1>
          </div>

          <div className="account-empty">

            <h2>No Order Information Yet</h2>

            <p>
              Place your first order to see your
              customer information here.
            </p>

            <Link
              to="/shop"
              className="continue-shopping-button"
            >
              Start Shopping
            </Link>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="account-page">

      <div className="account-container">

        <div className="section-heading">
          <p>DEV CLOTHING</p>
          <h1>My Account</h1>
        </div>

        <div className="account-layout">

          <div className="account-card">

            <h2>Customer Information</h2>

            <div className="account-info">

              <div>
                <span>Full Name</span>
                <strong>
                  {latestOrder.customer.name}
                </strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>
                  {latestOrder.customer.phone}
                </strong>
              </div>

              <div>
                <span>Email</span>
                <strong>
                  {latestOrder.customer.email}
                </strong>
              </div>

              <div>
                <span>City</span>
                <strong>
                  {latestOrder.customer.city}
                </strong>
              </div>

            </div>

          </div>

          <div className="account-card">

            <h2>Latest Order</h2>

            <div className="latest-order-info">

              <div>
                <span>Order ID</span>
                <strong>
                  {latestOrder.orderId}
                </strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {latestOrder.status}
                </strong>
              </div>

              <div>
                <span>Total</span>
                <strong>
                  ₹{latestOrder.total}
                </strong>
              </div>

            </div>

            <Link
              to="/orders"
              className="account-orders-link"
            >
              View All Orders →
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Account;
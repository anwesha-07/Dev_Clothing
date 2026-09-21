import { Link } from "react-router-dom";

function Orders() {
  const orders =
    JSON.parse(
      localStorage.getItem("devClothingOrders")
    ) || [];

  if (orders.length === 0) {
    return (
      <main className="orders-page">

        <div className="empty-orders">

          <h1>No Orders Yet</h1>

          <p>
            You haven't placed any orders yet.
          </p>

          <Link
            to="/shop"
            className="continue-shopping-button"
          >
            Start Shopping
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="orders-page">

      <div className="orders-container">

        <div className="section-heading">

          <p>DEV CLOTHING</p>

          <h1>
            My Orders
          </h1>

        </div>

        <div className="orders-list">

          {orders.map((order) => (

            <div
              className="order-card"
              key={order.orderId}
            >

              <div className="order-card-header">

                <div>
                  <span>
                    Order ID
                  </span>

                  <strong>
                    {order.orderId}
                  </strong>
                </div>

                <div className="order-status">
                  {order.status}
                </div>

              </div>

              <div className="order-card-details">

                <p>
                  <span>Date</span>
                  <strong>
                    {order.date}
                  </strong>
                </p>

                <p>
                  <span>Payment</span>
                  <strong>
                    {order.paymentMethod}
                  </strong>
                </p>

                <p>
                  <span>Total</span>
                  <strong>
                    ₹{order.total}
                  </strong>
                </p>

              </div>

              <div className="order-products">

                {order.items.map((item) => (

                  <div
                    className="order-product"
                    key={`${item.product.id}-${item.size}-${item.color}`}
                  >

                    <img
                      src={item.product.image}
                      alt={item.product.name}
                    />

                    <div>
                      <h3>
                        {item.product.name}
                      </h3>

                      <p>
                        Size: {item.size}
                      </p>

                      <p>
                        Color: {item.color}
                      </p>

                      <p>
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <strong>
                      ₹{item.product.price * item.quantity}
                    </strong>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}

export default Orders;
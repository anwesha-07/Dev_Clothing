import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, clearCart } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pin: "",
  });

  const [error, setError] = useState("");

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustomer({
      ...customer,
      [name]: value,
    });

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      name,
      phone,
      email,
      address,
      city,
      pin,
    } = customer;

    if (
      !name ||
      !phone ||
      !email ||
      !address ||
      !city ||
      !pin
    ) {
      setError("Please fill in all delivery details.");
      return;
    }

    setError("");

    clearCart();

    window.location.href = "/order-success";
  };

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>
            Add some products before proceeding to checkout.
          </p>

          <Link
            to="/shop"
            className="continue-shopping-button"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">

        <div className="section-heading">
          <p>DEV CLOTHING</p>
          <h1>Checkout</h1>
        </div>

        <div className="checkout-layout">

          {/* DELIVERY FORM */}

          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >
            <h2>Delivery Information</h2>

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={customer.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={customer.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Address</label>

              <textarea
                name="address"
                value={customer.address}
                onChange={handleChange}
                placeholder="Enter your delivery address"
                rows="4"
              ></textarea>
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>City</label>

                <input
                  type="text"
                  name="city"
                  value={customer.city}
                  onChange={handleChange}
                  placeholder="City"
                />
              </div>

              <div className="form-group">
                <label>PIN Code</label>

                <input
                  type="text"
                  name="pin"
                  value={customer.pin}
                  onChange={handleChange}
                  placeholder="PIN Code"
                />
              </div>

            </div>

            {error && (
              <p className="checkout-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="place-order-button"
            >
              Place Order
            </button>

          </form>

          {/* ORDER SUMMARY */}

          <div className="checkout-summary">

            <h2>Order Summary</h2>

            {cartItems.map((item) => (
              <div
                className="checkout-item"
                key={`${item.product.id}-${item.size}-${item.color}`}
              >

                <div>
                  <h3>{item.product.name}</h3>

                  <p>
                    Size: {item.size} | Color: {item.color}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>
                </div>

                <span>
                  ₹{item.product.price * item.quantity}
                </span>

              </div>
            ))}

            <div className="checkout-total">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}

export default Checkout;
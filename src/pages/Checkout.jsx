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

    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {
      setError(
        "Please enter a valid 10-digit phone number."
      );
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError(
        "Please enter a valid email address."
      );
      return;
    }

    const pinPattern = /^\d{6}$/;

    if (!pinPattern.test(pin)) {
      setError(
        "Please enter a valid 6-digit PIN code."
      );
      return;
    }

    if (name.trim().length < 3) {
      setError(
        "Please enter your full name."
      );
      return;
    }
setError("");

const orderId =
  "DEV-" +
  Date.now().toString().slice(-6);

localStorage.setItem(
  "devClothingOrderId",
  orderId
);

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

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={customer.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />

            </div>

            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                placeholder="Enter your 10-digit phone number"
                maxLength="10"
                required
              />

            </div>

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={customer.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>

            <div className="form-group">

              <label>
                Address
              </label>

              <textarea
                name="address"
                value={customer.address}
                onChange={handleChange}
                placeholder="Enter your delivery address"
                rows="4"
                required
              ></textarea>

            </div>

            <div className="form-row">

              <div className="form-group">

                <label>
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={customer.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  PIN Code
                </label>

                <input
                  type="text"
                  name="pin"
                  value={customer.pin}
                  onChange={handleChange}
                  placeholder="6-digit PIN Code"
                  maxLength="6"
                  required
                />

              </div>

            </div>

            {/* PAYMENT METHOD */}

            <div className="payment-section">

              <h2>
                Payment Method
              </h2>

              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  defaultChecked
                />

                <span>
                  Cash on Delivery
                </span>

              </label>

              <p className="payment-note">
                Pay when your order is delivered.
              </p>

            </div>

            <div className="checkout-policy-note">
  <strong>Before placing your order</strong>
  <p>
    Please review your delivery details carefully.
    We currently offer exchanges according to our exchange policy.
    Returns are not available.
  </p>

  <Link to="/exchange-policy">
    View Exchange Policy →
  </Link>
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

            <div className="checkout-summary-header">
  <h2>Order Summary</h2>

  <span>
    {cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    )}{" "}
    item(s)
  </span>
</div>

            <div className="checkout-items">

              {cartItems.map((item) => (

                <div
                  className="checkout-item"
                  key={`${item.product.id}-${item.size}-${item.color}`}
                >

                  {/* PRODUCT IMAGE */}

                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="checkout-item-image"
                  />

                  {/* PRODUCT INFORMATION */}

                  <div className="checkout-item-info">

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

                  {/* ITEM PRICE */}

                  <span className="checkout-item-price">
                    ₹{item.product.price * item.quantity}
                  </span>

                </div>

              ))}

            </div>

            {/* TOTAL */}

            <div className="checkout-total">

              <span>
                Subtotal
              </span>

              <span>
                ₹{cartTotal}
              </span>

            </div>

            <div className="checkout-total checkout-final-total">

              <strong>
                Total
              </strong>

              <strong>
                ₹{cartTotal}
              </strong>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Checkout;
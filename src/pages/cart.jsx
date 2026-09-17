import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link to="/shop" className="continue-shopping-button">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <div className="cart-container">

        <div className="section-heading">
          <p>YOUR SHOPPING BAG</p>
          <h1>Your Cart</h1>
        </div>

        <div className="cart-layout">

          {/* CART ITEMS */}
          <div className="cart-items">

            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={`${item.product.id}-${item.size}-${item.color}`}
              >

                <div className="cart-item-image">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                  />
                </div>

                <div className="cart-item-info">

                  <h2>{item.product.name}</h2>

                  <p>
                    {item.product.category} / {item.product.type}
                  </p>

                  <p>Size: {item.size}</p>

                  <p>Color: {item.color}</p>

                  <p>
                    Price: ₹{item.product.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.product.id,
                          item.size,
                          item.color
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product.id,
                          item.size,
                          item.color
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* ITEM TOTAL */}
                  <p className="cart-item-total">
                    ₹{item.product.price * item.quantity}
                  </p>

                  {/* REMOVE */}
                  <button
                    className="remove-cart-button"
                    onClick={() =>
                      removeFromCart(
                        item.product.id,
                        item.size,
                        item.color
                      )
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* ORDER SUMMARY */}
          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>

            <Link
              to="/checkout"
              className="checkout-button"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/shop"
              className="continue-shopping-link"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}

export default Cart;
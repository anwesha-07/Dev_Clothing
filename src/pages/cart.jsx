import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems } = useCart();

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

  return (
    <main className="cart-page">
      <div className="cart-container">

        <div className="section-heading">
          <p>YOUR SHOPPING BAG</p>
          <h1>Your Cart</h1>
        </div>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div
              className="cart-item"
              key={`${item.product.id}-${item.size}-${item.color}-${index}`}
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

                <p>Quantity: {item.quantity}</p>

                <h3>
                  ₹{item.product.price * item.quantity}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Cart;
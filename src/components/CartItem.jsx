import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  removeItem,
  updateQuantity,
} from '../redux/CartSlice';

import Navbar from './Navbar';

function CartItem() {
  const dispatch = useDispatch();

  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
  };

  return (
    <div className="cart-page">

      <Navbar />

      <main className="cart-container">

        {checkoutComplete ? (

          <div className="thank-you-page">

            <div className="thank-you-card">

              <div className="thank-you-icon">
                ✓
              </div>

              <h1>
                Thank You for Shopping!
              </h1>

              <p>
                Your order has been successfully
                placed.
              </p>

              <p>
                We appreciate your purchase from
                Paradise Nursery.
              </p>

              <Link
                to="/plants"
                className="continue-shopping-btn"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        ) : (

          <>

            <h1 className="cart-title">
              Shopping Cart
            </h1>

            {cartItems.length === 0 ? (

              <div className="empty-cart">

                <h2>
                  Your Cart is Empty
                </h2>

                <p>
                  Add some beautiful plants to your cart.
                </p>

                <Link
                  to="/plants"
                  className="continue-shopping-btn"
                >
                  Continue Shopping
                </Link>

              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cartItems.map((item) => {

                    const itemTotal =
                      item.price * item.quantity;

                    return (
                      <div
                        key={item.id}
                        className="cart-item"
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-image"
                        />

                        <div className="cart-item-info">

                          <h3>
                            {item.name}
                          </h3>

                          <p>
                            Unit Price: $
                            {item.price.toFixed(2)}
                          </p>

                        </div>

                        <div className="quantity-controls">

                          <button
                            type="button"
                            className="quantity-btn"
                            onClick={() =>
                              decreaseQuantity(item)
                            }
                          >
                            −
                          </button>

                          <span className="quantity-value">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            className="quantity-btn"
                            onClick={() =>
                              increaseQuantity(item)
                            }
                          >
                            +
                          </button>

                        </div>

                        <div className="cart-item-total">

                          $
                          {itemTotal.toFixed(2)}

                        </div>

                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(item.id)
                          }
                        >
                          Delete
                        </button>

                      </div>
                    );
                  })}

                </div>

                <div className="cart-summary">

                  <h2>
                    Cart Summary
                  </h2>

                  <p className="cart-total">
                    Total Amount: $
                    {totalAmount.toFixed(2)}
                  </p>

                  <div className="cart-actions">

                    <Link
                      to="/plants"
                      className="continue-shopping-btn"
                    >
                      Continue Shopping
                    </Link>

                    <button
                      type="button"
                      className="checkout-btn"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </button>

                  </div>

                </div>

              </>
            )}

          </>
        )}

      </main>

    </div>
  );
}

export default CartItem;
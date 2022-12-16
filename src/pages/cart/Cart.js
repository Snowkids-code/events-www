import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ticketImage from "../../assets/image/event-ticket.jpeg";
import cartHeader from "../../data/cart-header.json";
import close from "../../assets/svg/close.svg";
import plus from "../../assets/svg/plus.svg";
import minus from "../../assets/svg/minus.svg";
import {
  changeEventNumber,
  clearCart,
} from "../../reducers/cart.reducer";
import { insertOrder } from "../../reducers/order.reducer";

function Cart() {
  //get cart items
  const items = useSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  //get the user data
  const currentUser = useSelector((state) => state.userReducer);
  const [activeLink, setActiveLink] = useState("Order Details");

  //call the dispatch hook
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <div className="cart-top-container">
        <img alt="" src={ticketImage} layout="fill" />
      </div>
      <div className="cart-content-container">
        <div className="cart-content-wrapper">
          <div className="cart-left-container">
            <div className="heading-container">
              {cartHeader.map((data) => (
                <div className="title-container" key={data._id}>
                  <div
                    className={
                      activeLink === data.value ? "counter-active" : "counter"
                    }
                  >
                    {data._id}
                  </div>
                  <p>{data.value}</p>
                </div>
              ))}
            </div>
            {activeLink === "Order Details" ? (
              <div>
                <div className="cart-details-summary">
                  <p className="number-items">{items.length} Items</p>
                  <p
                    className="clear-cart-text"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Cart
                  </p>
                </div>
                {items.map((data, i) => (
                  <div className="order-details-container" key={data._id}>
                    <div className="cart-products-cont">
                      <div className="cart-product-img">
                        <img alt="" src={data.img} />
                      </div>
                      <div className="cart-product-desc">
                        <p>{data.title}</p>
                        <p>ticketType: {data.ticketTypes[0]}</p>
                        <p>Category: {data.category[0]}</p>
                      </div>
                      <div className="cart-product-price">
                        <p>${data.price[0] * data.quantity}</p>
                      </div>
                      <div className="cart-product-count">
                        <div className="cart-product-wrapper">
                          <img
                            alt="remove"
                            src={minus}
                            onClick={() =>
                              dispatch(
                                changeEventNumber({type: "subtract", id:data?._id})
                              )
                            }
                          />
                          <div className="count-wrapper">{data.quantity}</div>
                          <img
                            alt="add"
                            src={plus}
                            onClick={() => dispatch(changeEventNumber({type: "add", id:data?._id}))}
                          />
                        </div>
                      </div>
                      <div className="cart-product-close">
                        <img
                          alt="add"
                          src={close}
                          onClick={() => dispatch(changeEventNumber({type: "remove", id:data?._id}))}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="confirm-order">
                <p>Hello, {currentUser.user.username}</p>
                <p>
                  Your order has been placed, we will contact you once the order
                  has been shipped
                </p>
              </div>
            )}
          </div>
          <div className="cart-right-container">
            <div className="cart-total-summary">
              <p className="title">Order Summary</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div className="summary-wrapper">
                <p>Subtotal</p>
                <p>$ {totalPrice.toFixed(2)}</p>
              </div>
              <div className="summary-wrapper">
                <p>Tax</p>
                <p>$ {(totalPrice * 0.16).toFixed(2)}</p>
              </div>
              <div className="summary-wrapper">
                <p className="total">Total</p>
                <p className="total">
                  $ {(totalPrice + totalPrice * 0.16).toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className="rounded-md bg-gray-400"
              onClick={() => {
                dispatch(
                  insertOrder({
                    type: "orders/setOrderData",
                    userId: currentUser.user._id,
                    events: items,
                    amount: totalPrice,
                  })
                );
                dispatch(clearCart());
                setActiveLink("Confirmation");
              }}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

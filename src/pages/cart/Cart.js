import React from "react";
import ticketImage from "../../assets/image/event-ticket.jpeg";
import OrderDetails from "../../components/Cart/OrderDetails";
import cartHeader from "../../data/cart-header.json";

function Cart() {
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
                  <div className="counter-active">{data._id}</div>
                  <p>{data.value}</p>
                </div>
              ))}
            </div>
            <OrderDetails />
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
                <p>KSH 1000</p>
              </div>
              <div className="summary-wrapper">
                <p>Tax</p>
                <p>Ksh 1000</p>
              </div>
              <div className="summary-wrapper">
                <p>Shipping</p>
                <p>Ksh250.00</p>
              </div>
              <div className="summary-wrapper">
                <p className="total">Total</p>
                <p className="total">KSH 1000</p>
              </div>
            </div>
            <button>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

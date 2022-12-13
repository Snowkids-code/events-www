import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ticketImage from "../../assets/image/event-ticket.jpeg";
import OrderDetails from "../../components/Cart/OrderDetails";
import cartHeader from "../../data/cart-header.json";
import close from "../../assets/svg/close.svg";
import plus from "../../assets/svg/plus.svg";
import minus from "../../assets/svg/minus.svg";
import { clearCart, removeEvent } from "../../reducers/cart.reducer";

function Cart() {
  //get cart items
  const items = useSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const dispatch = useDispatch();

  // const handleRemoveEvent = () => {
  //   dispatch(removeEvent({ key: key }));
  // };

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
              <div className="order-details-container">
                <div className="cart-products-cont">
                  <div className="cart-product-img">
                    <img alt="" src={data.img} />
                  </div>
                  <div className="cart-product-desc">
                    <p>{data.title}</p>
                    <p>size: L</p>
                    <p>Style Code: dfgdfg7</p>
                  </div>
                  <div className="cart-product-price">
                    <p>${data.price[0] * data.quantity}</p>
                  </div>
                  <div className="cart-product-count">
                    <div className="cart-product-wrapper">
                      <img alt="remove" src={minus} />
                      <div className="count-wrapper">{data.quantity}</div>
                      <img alt="add" src={plus} />
                    </div>
                  </div>
                  <div className="cart-product-close">
                    <img
                      alt="add"
                      src={close}
                      onClick={() => dispatch(removeEvent({ key: i }))}
                    />
                  </div>
                </div>
              </div>
            ))}
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
                <p>KSH {totalPrice.toFixed(2)}</p>
              </div>
              <div className="summary-wrapper">
                <p>Tax</p>
                <p>Ksh {(totalPrice * 0.16).toFixed(2)}</p>
              </div>
              {/* <div className="summary-wrapper">
                <p>Shipping</p>
                <p>Ksh250.00</p>
              </div> */}
              <div className="summary-wrapper">
                <p className="total">Total</p>
                <p className="total">
                  KSH {(totalPrice + totalPrice * 0.16).toFixed(2)}
                </p>
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

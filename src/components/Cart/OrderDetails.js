import React from "react";
import close from "../../assets/svg/close.svg";
import plus from "../../assets/svg/plus.svg";
import minus from "../../assets/svg/minus.svg";

function OrderDetails() {
  return (
    <div className="order-details-container">
      <div className="cart-products-cont">
        <div className="cart-product-img">
          <img alt="" src="/images/stadium-1.jpeg" />
        </div>
        <div className="cart-product-desc">
          <p>WorldCup</p>
          <p>size: L</p>
          <p>Style Code: dfgdfg7</p>
        </div>
        <div className="cart-product-price">
          <p>$5000</p>
        </div>
        <div className="cart-product-count">
          <div className="cart-product-wrapper">
            <img alt="remove" src={minus} />
            <div className="count-wrapper">5</div>
            <img alt="add" src={plus} />
          </div>
        </div>
        <div className="cart-product-close">
          <img alt="add" src={close} />
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;

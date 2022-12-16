import React, { useEffect, useState } from "react";
import close from "../../assets/svg/close.svg";
import plus from "../../assets/svg/plus.svg";
import minus from "../../assets/svg/minus.svg";
import { useDispatch } from "react-redux";
import { addEventNumber, removeEvent } from "../../reducers/cart.reducer";

function OrderDetails(data, key) {
  // const dispatch = useDispatch();
  // const [counter, setCounter] = useState(data.data.quantity);
  // console.log(data)

  // const handlAddEventNumber = () => {
  //   dispatch(
  //     addEventNumber({
  //       quantity: counter,
  //       id: data.data._id,
  //       key: data.data._id,
  //       price: data.data.price[0],
  //       state: data.data,
  //     })
  //   );
  // };

  // const handleRemoveEvent = () => {
  //   dispatch(removeEvent({ key: key }));
  // };

  // useEffect(() => {
  //   dispatch(
  //     addEventNumber({
  //       quantity: counter,
  //       id: data.data._id,
  //       key: data.data._id,
  //       price: data.data.price[0],
  //     })
  //   );
  // }, [counter]);
  return (
    <div className="order-details-container">
      {/* <div className="cart-products-cont">
        <div className="cart-product-img">
          <img alt="" src={data.data.img} />
        </div>
        <div className="cart-product-desc">
          <p>{data.data.title}</p>
          <p>size: L</p>
          <p>Style Code: dfgdfg7</p>
        </div>
        <div className="cart-product-price">
          <p>${data.data.price[0] * data.data.quantity}</p>
        </div>
        <div className="cart-product-count">
          <div className="cart-product-wrapper">
            <img alt="remove" src={minus} />
            <div className="count-wrapper">{data.data.quantity}</div>
            <img alt="add" src={plus} onClick={handlAddEventNumber} />
          </div>
        </div>
        <div className="cart-product-close">
          <img alt="add" src={close} onClick={handleRemoveEvent} />
        </div>
      </div> */}
    </div>
  );
}

export default OrderDetails;

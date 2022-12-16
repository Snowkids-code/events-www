import React, { useEffect, useState } from "react";
import minus from "../../assets/svg/minus.svg";
import plus from "../../assets/svg/plus.svg";
import DropDown from "../../components/Reusable/DropDown";
import data from "../../data/dropdown-values.json";
import faq from "../../data/faq.json";
import map from "../../assets/image/map.png";
import tags from "../../data/tags.json";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../reducers/cart.reducer";

function Event() {
  const [counter, setCounter] = useState(1);

  const addCounter = () => {
    setCounter(counter < 9 ? (count) => count + 1 : 9);
  };

  const removeCounter = () => {
    setCounter(counter > 1 ? (count) => count - 1 : 1);
  };

  //get event details
  const event = useSelector((state) => state.singleReducer.item);

  const dispatch = useDispatch();

  //add item to cart
  const handleAddCart = () => {
    dispatch(addEvent({...event, count : counter}));
  };

  return (
    <div className="event-container">
      {event ? (
        <>
          <div className="event-cover-img">
            {/* <img alt="img" src="/images/stadium-1.jpeg" layout="fill" /> */}
            <div
              className="event-booking-details-container"
              style={{
                background: `url(${event.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="event-booking-details-wrapper">
                <div className="event-booking-content">
                  <div className="left-container">
                    <p className="title">{event.title}</p>
                    <p className="content">{event.desc}</p>
                  </div>
                  <div className="right-container">
                    <div className="booking-container">
                      <p className="title">Date & Time</p>
                      <p className="time">
                        Tue, {event.day}th {event.month} 2022
                      </p>
                      <p className="time">Time: 1500hrs</p>
                      <p className="time">Type: {event.ticketTypes[0]}</p>
                      <p className="time">Price: ${event.price[0] * counter}</p>
                      <div className="counter-container">
                        <div className="left-container">
                          <img
                            alt="minus"
                            src={minus}
                            width="24"
                            height="24"
                            onClick={removeCounter}
                          />
                        </div>
                        <div className="center-container">{counter}</div>
                        <div className="right-container">
                          <img
                            alt="minus"
                            src={plus}
                            width="24"
                            height="24"
                            onClick={addCounter}
                          />
                        </div>
                      </div>
                      <div className="type-container">
                        <DropDown data={event.ticketTypes} />
                      </div>
                      <button className="rounded-md bg-gray-400" onClick={handleAddCart}>Add to Cart</button>
                      <p className="no-refund">No Refunds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-event-desc-container">
            <div className="single-event-desc-wrapper">
              <div className="left-container">
                <h2 className="title">Description</h2>
                <p className="desc">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
                <h2 className="title">FAQs</h2>
                <ul>
                  {faq.map((faq) => (
                    <div key={faq._id}>
                      <li>
                        <a href="#">
                          <strong>Question</strong>:{faq.question}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <strong>Answer</strong>: {faq.answer}
                        </a>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="right-container">
                <h2 className="title">Event Location</h2>
                <div className="location-image-container">
                  <img alt="img" src={map} layout="fill" />
                </div>
                <h2 className="title">Tags</h2>
                <div className="tags-container">
                  {tags.map((tag) => (
                    <div className="tags-wrapper" key={tag._id}>
                      {tag.tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Event;

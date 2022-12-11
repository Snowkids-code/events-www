import React, { useState } from "react";
import minus from "../../assets/svg/minus.svg";
import plus from "../../assets/svg/plus.svg";
import DropDown from "../../components/Reusable/DropDown";
import data from "../../data/dropdown-values.json";
import faq from "../../data/faq.json";
import map from "../../assets/image/map.png";
import tags from "../../data/tags.json";

function Event() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter < 9 ? (count) => count + 1 : 9);
  };

  const removeCounter = () => {
    setCounter(counter > 1 ? (count) => count - 1 : 1);
  };

  return (
    <div className="event-container">
      <div className="event-cover-img">
        {/* <img alt="img" src="/images/stadium-1.jpeg" layout="fill" /> */}
        <div
          className="event-booking-details-container"
          style={{
            background: `url(/images/stadium-1.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="event-booking-details-wrapper">
            <div className="event-booking-content">
              <div className="left-container">
                <p className="title">World Cup Semi-Finals</p>
                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="right-container">
                <div className="booking-container">
                  <p className="title">Date & Time</p>
                  <p className="time">Tue, 13th December 2022</p>
                  <p className="time">Time: 1500hrs</p>
                  <p className="time">Type:</p>
                  <p className="time">Price:</p>
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
                    <DropDown data={data} />
                  </div>
                  <button>Add to Cart</button>
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
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
            <h2 className="title">FAQs</h2>
            <ul>
              {faq.map((faq) => (
                <div>
                  <li>
                    <a>
                      <strong>Question</strong>:{faq.question}
                    </a>
                  </li>
                  <li>
                    <a>
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
    </div>
  );
}

export default Event;
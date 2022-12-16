import React from "react";
import listIcon from "../../assets/svg/format-list-bulleted.svg";
import filterIcon from "../../assets/svg/filter-variant.svg";
import SingleEvent from "../../components/Events/SingleEvent";
import { useSelector } from "react-redux";

function Events() {
  const item = useSelector((state) => state.eventReducer.items);

  return (
    <div className="events-container">
      <div className="events-cover-img">
        <img alt="img" src="/images/events-cover-image.webp" layout="fill" />
      </div>
      <div className="events-content-container">
        <div style={{ gridArea: "main" }}>
          <div className="events-title-container">
            <p>Events | Upcoming Events</p>
            <div className="icons-container">
              <img alt="img" src={listIcon} width="24" height="24" />
              <img alt="img" src={filterIcon} width="24" height="24" />
            </div>
          </div>
          <div className="events-content-container">
            {item.map((data) => (
              <SingleEvent
                key={data._id}
                id={data._id}
                cover={data.img}
                day={data.day}
                month={data.month}
                event={data.title}
                topDesc={data.desc}
                fullDesc={data.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;

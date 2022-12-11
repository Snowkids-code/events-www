import React from "react";
import listIcon from "../../assets/svg/format-list-bulleted.svg";
import filterIcon from "../../assets/svg/filter-variant.svg";
import events from "../../data/events.json";
import SingleEvent from "../../components/Events/SingleEvent";
import { Link } from "react-router-dom";

function Events() {
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
            {events.map((data) => (
              <Link
                to={`/events/${data._id}`}
                style={{ textDecoration: "none" }}
                key={data._id}
              >
                <SingleEvent
                  cover={data.cover}
                  day={data.day}
                  month={data.month}
                  event={data.event}
                  topDesc={data.topDesc}
                  fullDesc={data.fullDesc}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;

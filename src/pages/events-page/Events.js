import React, { useEffect, useState } from "react";
import listIcon from "../../assets/svg/format-list-bulleted.svg";
import filterIcon from "../../assets/svg/filter-variant.svg";
import events from "../../data/events.json";
import SingleEvent from "../../components/Events/SingleEvent";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleEventThunk } from "../../reducers/single-event.reducer";

function Events() {
  const item = useSelector((state) => state.eventReducer.items);

  const [eventId, setEventId] = useState();

  const status = useSelector((state) => state.singleReducer.loading);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const getSingleEvent = (id) => {
  //   dispatch(getSingleEventThunk(id));
  // };

  // useEffect(() => {
  //   if (status === "fulfilled") {
  //     navigate(`/events/${id}`);
  //   }
  // }, [status]);

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

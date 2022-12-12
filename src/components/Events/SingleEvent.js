import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSingleEventThunk } from "../../reducers/single-event.reducer";

function SingleEvent({ id, cover, day, month, event, topDesc, fullDesc }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getSingleEvent = () => {
    dispatch(getSingleEventThunk(id));
  };

  return (
    <div className="single-event-container" onClick={getSingleEvent}>
      <div className="date-container">
        <p className="month-text">{month}</p>
        <p className="day-text">{day}</p>
      </div>
      <div className="cover-container">
        <div className="img-container">
          <img alt="img" src={cover} layout="fill" />
        </div>
      </div>
      <div className="details-container">
        <p className="event-title">{event}</p>
        <p className="top-desc">{topDesc}</p>
        <p className="full-desc">{fullDesc}</p>
        <div
          className="view-details-container"
          onClick={() => {
            navigate(`/events/${id}`);
          }}
        >
          <p>View Details {"-->"}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleEvent;

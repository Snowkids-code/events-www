import React from "react";

function SingleEvent({ cover, day, month, event, topDesc, fullDesc }) {
  return (
    <div className="single-event-container">
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
        <div className="view-details-container">
          <p>View Details {"-->"}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleEvent;

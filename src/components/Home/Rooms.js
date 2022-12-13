import React from "react";

function Rooms() {
  return (
    <div className="rooms-container">
      <div className="rooms-wrapper">
        <div className="left-container">
          <div className="top-rooms-container">
            <img alt="image" src="/images/doha-view.jpg" layout="fill" className="rounded-md"/>
          </div>
          <div className="left-rooms-container">
            <img alt="image" src="/images/doha-balcony.jpeg" layout="fill" className="rounded-md"/>
          </div>
          <div className="right-rooms-container">
            <img alt="image" src="/images/doha-room.jpeg" layout="fill" className="rounded-md"/>
          </div>
        </div>
        <div className="right-container">
          <h2>Book The Best Rooms</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rooms;

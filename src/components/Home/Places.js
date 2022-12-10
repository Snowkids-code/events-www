import React from "react";
import data from "../../data/places.json";

function Places() {
  return (
    <div className="places-container">
      <div className="places-wrapper">
        <h2>Visit Local Places</h2>
        <div className="images-container">
          {data.map((data) => (
            <img key={data._id} alt="image" src={data.source} layout='fill'/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Places;

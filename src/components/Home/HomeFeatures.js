import React from "react";
import data from "../../data/home-features.json"

function HomeFeatures() {
  return (
    <div className="home-features-main-container">
      <div className="home-features-container">
        {data?.map((item, i) => (
          <div key={i} className="home-features-wrapper">
            <div className="img-wrapper">
              <img alt="" src={item.img} className="img" />
            </div>
            <div className="text-wrapper">
              <p className="title">{item.title}</p>
              <p className="desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeFeatures;

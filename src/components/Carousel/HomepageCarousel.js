import React, { useState } from "react";
import ChevronRight from "../../assets/svg/chevron-right.svg";
import ChevronLeft from "../../assets/svg/chevron-left.svg";
import data from "../../data/home-carousel.json";

function HomepageCarousel() {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className="homepage-carousel-container">
      <div
        className="arrow-container"
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <img
          src={ChevronLeft}
          alt="ChevronLeft"
          width="24"
          height="24"
          // objectFit="contain"
        />
      </div>
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {data.map((data) => (
          <div
            key={data._id}
            className="slider-content-container"
            style={{ backgroundColor: data.backgroundColor }}
          >
            <div className="slider-content-wrapper">
              <div className="inner-container">
                <div className="left-container">
                  <img
                    alt="first-picture"
                    src={data.firstPicture}
                    layout="fill"
                  />
                </div>
                <div className="center-container">
                  <img
                    alt="eventLogo"
                    src={data.eventLogo}
                    width="56"
                    height="56"
                  />
                  <h2>{data.event}</h2>
                  <div className="counter-container">
                    <div>
                      <p>Days</p>
                      <div>5</div>
                    </div>
                    <div>
                      <p>Hours</p>
                      <div>5</div>
                    </div>
                    <div>
                      <p>Mins</p>
                      <div>5</div>
                    </div>
                    <div>
                      <p>Sec</p>
                      <div>5</div>
                    </div>
                  </div>
                  <button>Book Now</button>
                </div>
                <div className="right-container">
                  <img
                    alt="first-picture"
                    src={data.secondPicture}
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="arrow-container"
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <img
          src={ChevronRight}
          alt="ChevronRight"
          width="24"
          height="24"
          // objectFit="contain"
        />
      </div>
    </div>
  );
}

export default HomepageCarousel;

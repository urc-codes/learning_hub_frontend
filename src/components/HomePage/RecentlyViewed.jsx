import React, { useState } from "react";

export const RecentlyViewed = () => {
  const [activeIndex, setActiveIndex] = useState();

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    panel.style.display === "show";
  };

  return (
    <>
      <div className="container">
        <div className="featured_boks">
          <button
            className={`accordion ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleAccordionClick(1)}
          >
            Graphic Designs
          </button>
          <div className={`panel ${activeIndex === 1 ? "show" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button
            className={`accordion ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleAccordionClick(2)}
          >
            Web Design and Programming
          </button>
          <div className={`panel ${activeIndex === 2 ? "show" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button
            className={`accordion ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => handleAccordionClick(3)}
          >
            Mobile App Design
          </button>
          <div className={`panel ${activeIndex === 3 ? "show" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <button
            className={`accordion ${activeIndex === 4 ? "active" : ""}`}
            onClick={() => handleAccordionClick(4)}
          >
            General Programming
          </button>
          <div className={`panel ${activeIndex === 4 ? "show" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

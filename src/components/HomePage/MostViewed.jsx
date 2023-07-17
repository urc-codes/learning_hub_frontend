import React, { useEffect, useState } from "react";
import axios from "axios"

export const MostViewed = () => {
  const [activeIndex, setActiveIndex] = useState();

  const [isLoading, setIsLoading] = useState();
  const [graphic_design_video, setGraphicDesignVideo] = useState([]);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    panel.style.display === "show";
  };

  useEffect(() => {
    axios.get("https://urclearninghubbackend.onrender.com/videos/graphic_design")
    .then(response => setGraphicDesignVideo(response.data))
    .catch(err => console.log(err))
       setTimeout(() => {
            setIsLoading(false);
          }, 2000); // Set the desired loading time in milliseconds
    },[])


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
          <div className="featured_book_box">
              {isLoading ? (
                <p style={{ color: "black" }}>Loading...</p>
              ) : (
                graphic_design_video.map((item) => (
                  <div className="featured_book_card" style={{width:"400px"}}>
                    <>
                      <div className="featurde_book_img">
                        {/* eslint-disable-next-line */}
                        <iframe  height="315"src={item.video_link} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      <div className="featurde_book_tag">
                        <p>{item.video_title}</p>
                      </div>
                    </>
                  </div>
                ))
              )}
            </div>
          </div>

          <button
            className={`accordion ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleAccordionClick(2)}
          >
            Web Design and Programming
          </button>
          <div className={`panel ${activeIndex === 2 ? "show" : ""}`}>
            <p>
              
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

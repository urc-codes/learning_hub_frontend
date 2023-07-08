import React, {useEffect, useState} from "react";
import axios from "axios"

export const RecentlyViewed = () => {
  const [activeIndex, setActiveIndex] = useState();

  const [isLoading, setIsLoading] = useState();
  const [data, setMobileAppBooks] = useState([]);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    panel.style.display === "show";
  };

  useEffect(() => {
    axios.get("https://urclearninghubbackend.onrender.com/books/mobile_app")
    .then(response => setMobileAppBooks(response.data))
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
            <div class="featured_book_box">
              {isLoading ? (
                <p style={{ color: "black" }}>Loading...</p>
              ) : (
                data.map((item) => (
                  <div class="featured_book_card">
                    <>
                      <div class="featurde_book_img">
                        {/* eslint-disable-next-line */}
                        <img
                          src={`https://drive.google.com/uc?id=${item.book_image_id}`}
                        ></img>
                      </div>
                      <div class="featurde_book_tag">
                        <h3>{item.book_titletitle}</h3>
                        <p class="writer">{item.author_name}</p>
                        <p>
                          <a
                            target="_blank"
                            href={item.book_url}
                            style={{ textDecoration: "none" }}
                          >
                            Read Book
                          </a>
                        </p>
                      </div>
                    </>
                  </div>
                ))
              )}
            </div>
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

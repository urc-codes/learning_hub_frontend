import React, { useEffect } from "react";
import { RecentlyViewed } from "./RecentlyViewed";
import { MostViewed } from './MostViewed'


export const RecentlyAdded = () => {
  useEffect(() => {
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
  }, []);

  const openPage = (pageName, elmnt, color) => {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12" style={{display:"flex",justifyContent:"center",padding:"5px"}}>
          <div style={{width:"100%"}}>
            <div>
            <button
        className="tablink"
        onClick={(e) => openPage("Books", e.target, "green")}
        id="defaultOpen"
      >
        Books
      </button>
      <button
        className="tablink"
        onClick={(e) => openPage("Videos", e.target, "blue")}
      >
        Videos
      </button>
            </div>

      <div id="Books" className="tabcontent">
        <RecentlyViewed />
      </div>

      <div id="Videos" className="tabcontent">
        <MostViewed />
      </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}


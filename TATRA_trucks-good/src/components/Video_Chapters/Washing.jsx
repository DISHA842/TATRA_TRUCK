import React from "react";
import "../homepage.css";
import Card from "../Card";
import image1 from "../Badge.jpeg";
import image2 from "../HQ.jpeg";
import Button from "../Button";
import Nav from "../Nav";

import video1_01 from "../../Videos/3_WASHING/1_VIDEO.mp4";
import video1_02 from "../../Videos/3_WASHING/2_VIDEO.mp4";

function Washing() {
  return (
    <div class="bg-custom-primary h-screen bg-cover">
      <div class="bg-custom-primary">
        <Nav />
        <div className="badge-container">
          <img className="top-left-image" src={image1} alt="image1" />
          <Button text="< Back" hlink="VideoTut" />
          <img className="top-right-image" src={image2} alt="image2" />
        </div>

        <div>
          <p className="text-5xl italic font-semibold text-center text-white underline px-52">
            CHAPTER 3 : Washing
          </p>
        </div>

        <div className="card-container">
          <a href={video1_01} target="_blank">
            <Card id="Video1" name="WASHING Video-1"></Card>
          </a>
          <a href={video1_02} target="_blank">
            <Card id="Video2" name="WASHING Video-2"></Card>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Washing;

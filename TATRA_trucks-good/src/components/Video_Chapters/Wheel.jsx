import React from "react";
import "../homepage.css";
import Card from "../Card";
import image1 from "../Badge.jpeg";
import image2 from "../HQ.jpeg";
import Button from "../Button";
import Nav from "../Nav";

import video1_01 from "../../Videos/8 WHEEL OH/video01.mp4";
import video1_02 from "../../Videos/8 WHEEL OH/video02.mp4";
import video1_03 from "../../Videos/8 WHEEL OH/video03.mp4";
import video1_04 from "../../Videos/8 WHEEL OH/video04.mp4";


export default function Wheel() {
  return (
    <div class="bg-custom-primary h-screen bg-cover">
      <Nav />
      <div className="badge-container">
        <img className="top-left-image" src={image1} alt="image1" />
        <Button text="< Back" hlink="VideoTut" />
        <img className="top-right-image" src={image2} alt="image2" />
      </div>

      <div>
        <p className="text-5xl italic font-semibold text-center text-white underline px-52">
          CHAPTER 8 : Wheel OH
        </p>
        <div className="card-container">
          <a href={video1_01} target="_blank">
            <Card name="Wheel OH Video-1"></Card>
          </a>
          <a href={video1_02} target="_blank">
            <Card name="Wheel OH Video-2"></Card>
          </a>
          <a href={video1_03} target="_blank">
            <Card name="Wheel OH Video-3"></Card>
          </a>
          <a href={video1_04} target="_blank">
            <Card name="Wheel OH Video-4"></Card>
          </a>
        </div>
      </div>
    </div>
  );
}

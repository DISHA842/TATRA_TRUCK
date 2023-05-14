import React from "react";
import "../homepage.css";
import Card from "../Card";
import image1 from "../Badge.jpeg";
import image2 from "../HQ.jpeg";
import Button from "../Button";
import Nav from "../Nav";

import video1_01 from "../../Videos/7 ELECT WK/video01.mp4";
import video1_02 from "../../Videos/7 ELECT WK/video02.mp4";
import video1_03 from "../../Videos/7 ELECT WK/video03.mp4";
import video1_04 from "../../Videos/7 ELECT WK/video04.mp4";
import video1_05 from "../../Videos/7 ELECT WK/video05.mp4";
import video1_06 from "../../Videos/7 ELECT WK/video06.mp4";
import video1_07 from "../../Videos/7 ELECT WK/video07.mp4";


export default function ElectWk() {
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
          CHAPTER 7 : Elect WK
        </p>
        <div className="card-container">
          <a href={video1_01} target="_blank">
            <Card name="Elect Wk Video-1"></Card>
          </a>
          <a href={video1_02} target="_blank">
            <Card name="Elect Wk Video-2"></Card>
          </a>
	  <a href={video1_03} target="_blank">
            <Card name="Elect Wk Video-3"></Card>
          </a>
	  <a href={video1_04} target="_blank">
            <Card name="Elect Wk Video-4"></Card>
          </a>
	  <a href={video1_05} target="_blank">
            <Card name="Elect Wk Video-5"></Card>
          </a>
	  <a href={video1_06} target="_blank">
            <Card name="Elect Wk Video-6"></Card>
          </a>
	  <a href={video1_07} target="_blank">
            <Card name="Elect Wk Video-7"></Card>
          </a>
        </div>
      </div>
    </div>
  );
}

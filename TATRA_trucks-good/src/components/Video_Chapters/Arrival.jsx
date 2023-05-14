import React from "react";
import "../homepage.css";
import Card from "../Card";
import image1 from "../Badge.jpeg";
import image2 from "../HQ.jpeg";
import Button from "../Button";
import Nav from "../Nav";

//Before Insp Action Videos import
import video1_01 from "../../Videos/1_ARRIVAL/BEFORE INSP ACTION/1_VIDEO.mp4";
import video1_02 from "../../Videos/1_ARRIVAL/BEFORE INSP ACTION/2_VIDEO.mp4";
import video1_03 from "../../Videos/1_ARRIVAL/BEFORE INSP ACTION/3_VIDEO.mp4";

//Insp Action Videos import

import video1_04 from "../../Videos/1_ARRIVAL/INSP/1_VIDEO.mp4";
import video1_05 from "../../Videos/1_ARRIVAL/INSP/2_VIDEO.mp4";
import video1_06 from "../../Videos/1_ARRIVAL/INSP/3A_VIDEO.mp4";
import video1_07 from "../../Videos/1_ARRIVAL/INSP/3B_VIDEO.mp4";
import video1_08 from "../../Videos/1_ARRIVAL/INSP/4_VIDEO.mp4";
import video1_09 from "../../Videos/1_ARRIVAL/INSP/5_VIDEO.mp4";
import video1_10 from "../../Videos/1_ARRIVAL/INSP/6_VIDEO.mp4";
import video1_11 from "../../Videos/1_ARRIVAL/INSP/7_VIDEO.mp4";
import video1_12 from "../../Videos/1_ARRIVAL/INSP/8_VIDEO.mp4";
import video1_13 from "../../Videos/1_ARRIVAL/INSP/9_VIDEO.mp4";
import video1_14 from "../../Videos/1_ARRIVAL/INSP/10_VIDEO.mp4";
import video1_15 from "../../Videos/1_ARRIVAL/INSP/11_VIDEO.mp4";
import video1_16 from "../../Videos/1_ARRIVAL/INSP/12_VIDEO.mp4";
import video1_17 from "../../Videos/1_ARRIVAL/INSP/13_VIDEO.mp4";
import video1_18 from "../../Videos/1_ARRIVAL/INSP/14_VIDEO.mp4";
import video1_19 from "../../Videos/1_ARRIVAL/INSP/CHECK_LIST.mp4";

function Arrival() {
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
            CHAPTER 1 : Arrival
          </p>
          <div className="card-container">
            <a href={video1_01} target="_blank">
              <Card id="Video1" name="BEFORE INSP ACTION Video-1"></Card>
            </a>
            <a href={video1_02} target="_blank">
              <Card name="BEFORE INSP ACTION Video-2"></Card>
            </a>
            <a href={video1_03} target="_blank">
              <Card id="Video3" name="BEFORE INSP ACTION Video-3"></Card>
            </a>
          </div>
          <div className="card-container">
            <a href={video1_04} target="_blank">
              <Card id="Video4" name="INSP Video-1"></Card>
            </a>
            <a href={video1_05} target="_blank">
              <Card id="Video5" name="INSP Video-2"></Card>
            </a>
            <a href={video1_06} target="_blank">
              <Card id="Video6" name="INSP Video-3"></Card>
            </a>
            <a href={video1_07} target="_blank">
              <Card id="Video7" name="INSP Video-4"></Card>
            </a>
            <a href={video1_08} target="_blank">
              <Card id="Video8" name="INSP Video-5"></Card>
            </a>
            <a href={video1_09} target="_blank">
              <Card id="Video9" name="INSP Video-6"></Card>
            </a>
            <a href={video1_10} target="_blank">
              <Card id="Video10" name="INSP Video-7"></Card>
            </a>
            <a href={video1_11} target="_blank">
              <Card id="Video11" name="INSP Video-8"></Card>
            </a>
            <a href={video1_12} target="_blank">
              <Card id="Video12" name="INSP Video-9"></Card>
            </a>
            <a href={video1_13} target="_blank">
              <Card id="Video13" name="INSP Video-10"></Card>
            </a>
            <a href={video1_14} target="_blank">
              <Card id="Video14" name="INSP Video-11"></Card>
            </a>
            <a href={video1_15} target="_blank">
              <Card id="Video15" name="INSP Video-12"></Card>
            </a>
            <a href={video1_16} target="_blank">
              <Card id="Video16" name="INSP Video-13"></Card>
            </a>
            <a href={video1_17} target="_blank">
              <Card id="Video17" name="INSP Video-14"></Card>
            </a>
            <a href={video1_18} target="_blank">
              <Card id="Video18" name="INSP Video-15"></Card>
            </a>
            <a href={video1_19} target="_blank">
              <Card id="Video19" name="INSP Video-16"></Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Arrival;

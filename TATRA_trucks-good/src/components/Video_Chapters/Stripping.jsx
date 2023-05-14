import React from "react";
import "../homepage.css";
import Card from "../Card";
import image1 from "../Badge.jpeg";
import image2 from "../HQ.jpeg";
import Button from "../Button";
import Nav from "../Nav";

//ENGINE Videos import
import video1_01 from "../../Videos/2_STRIPPING/ENGINE/1_VIDEO.mp4";
import video1_02 from "../../Videos/2_STRIPPING/ENGINE/2_VIDEO.mp4";
import video1_03 from "../../Videos/2_STRIPPING/ENGINE/3_VIDEO.mp4";
import video1_04 from "../../Videos/2_STRIPPING/ENGINE/4_VIDEO.mp4";
import video1_05 from "../../Videos/2_STRIPPING/ENGINE/5_VIDEO.mp4";
import video1_06 from "../../Videos/2_STRIPPING/ENGINE/6_VIDEO.mp4";

//BODY Videos import

import video1_07 from "../../Videos/2_STRIPPING/BODY/1_VIDEO.mp4";
import video1_08 from "../../Videos/2_STRIPPING/BODY/2_VIDEO.mp4";
import video1_09 from "../../Videos/2_STRIPPING/BODY/3_VIDEO.mp4";
import video1_10 from "../../Videos/2_STRIPPING/BODY/4_VIDEO.mp4";

function Stripping() {
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
            CHAPTER 2 : Stripping
          </p>
        </div>

        <div className="card-container">
          <a href={video1_01} target="_blank">
            <Card id="Video1" name="ENGINE Video-1"></Card>
          </a>
          <a href={video1_02} target="_blank">
            <Card id="Video2" name="ENGINE Video-2"></Card>
          </a>
          <a href={video1_03} target="_blank">
            <Card id="Video3" name="ENGINE Video-3"></Card>
          </a>
          <a href={video1_04} target="_blank">
            <Card id="Video4" name="ENGINE Video-4"></Card>
          </a>
          <a href={video1_05} target="_blank">
            <Card id="Video5" name="ENGINE Video-5"></Card>
          </a>
          <a href={video1_06} target="_blank">
            <Card id="Video6" name="ENGINE Video-6"></Card>
          </a>
        </div>

        <div className="card-container">
          <a href={video1_07} target="_blank">
            <Card id="Video7" name="BODY Video-7"></Card>
          </a>
          <a href={video1_08} target="_blank">
            <Card id="Video8" name="BODY Video-8"></Card>
          </a>
          <a href={video1_09} target="_blank">
            <Card id="Video9" name="BODY Video-9"></Card>
          </a>
          <a href={video1_10} target="_blank">
            <Card id="Video10" name="BODY Video-10"></Card>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Stripping;

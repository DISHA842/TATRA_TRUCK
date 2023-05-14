import React from "react";
import "../homepage.css";
import Card from "../Card";
import image1 from "../Badge.jpeg";
import image2 from "../HQ.jpeg";
import Button from "../Button";
import Nav from "../Nav";

//HUB OH Videos
import video1_01 from "../../Videos/6_HUB_GEAR BOX_OH/HUB OH/2_VIDEO.mp4";
import video1_02 from "../../Videos/6_HUB_GEAR BOX_OH/HUB OH/3_VIDEO.mp4";
import video1_03 from "../../Videos/6_HUB_GEAR BOX_OH/HUB OH/5_VIDEO.mp4";
import video1_04 from "../../Videos/6_HUB_GEAR BOX_OH/HUB OH/7_VIDEO.mp4";
import video1_05 from "../../Videos/6_HUB_GEAR BOX_OH/HUB OH/10_VIDEO.mp4";
import video1_06 from "../../Videos/6_HUB_GEAR BOX_OH/HUB OH/11_VIDEO.mp4";
import video1_07 from "../../Videos/6_HUB_GEAR BOX_OH/HUB OH/12_VIDEO.mp4";

//Gear Box OH Videos

import video1_08 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/1_VIDEO.mp4";
import video1_09 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/2_VIDEO.mp4";
import video1_10 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/4_VIDEO.mp4";
import video1_11 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/5_VIDEO.mp4";
import video1_12 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/6_VIDEO.mp4";
import video1_13 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/7_VIDEO.mp4";
import video1_14 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/8_VIDEO.mp4";
import video1_15 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/9_VIDEO.mp4";
import video1_16 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/10_VIDEO.mp4";
import video1_17 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/11_VIDEO.mp4";
import video1_18 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/12_VIDEO.mp4";
import video1_19 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/13_VIDEO.mp4";
import video1_20 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/14_VIDEO.mp4";
import video1_21 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/15_VIDEO.mp4";
import video1_22 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/16_VIDEO.mp4";
import video1_23 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/17_VIDEO.mp4";
import video1_24 from "../../Videos/6_HUB_GEAR BOX_OH/GEAR BOX OH/18_VIDEO.mp4";

export default function HubGearBox() {
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
          <p className="pd-5px text-5xl italic font-semibold text-center text-white underline px-52">
            CHAPTER 6 : Hub Gear Box OH
          </p>
          <br></br>
          <br></br>
          <h1 className="pd-50px text-5xl italic font-semibold text-center text-white  px-52">
            1. Hub OH
          </h1>

          <div className="card-container">
            <a href={video1_01} target="_blank">
              <Card id="Video1" name="HUB OH Video-1"></Card>
            </a>
            <a href={video1_02} target="_blank">
              <Card id="Video2" name="HUB OH Video-2"></Card>
            </a>
            <a href={video1_03} target="_blank">
              <Card id="Video3" name="HUB OH Video-3"></Card>
            </a>
            <a href={video1_04} target="_blank">
              <Card id="Video4" name="HUB OH Video-4"></Card>
            </a>
            <a href={video1_05} target="_blank">
              <Card id="Video5" name="HUB OH Video-5"></Card>
            </a>
            <a href={video1_06} target="_blank">
              <Card id="Video6" name="HUB OH Video-6"></Card>
            </a>
            <a href={video1_07} target="_blank">
              <Card id="Video7" name="HUB OH Video-7"></Card>
            </a>
          </div>
          <h1 className="text-5xl italic font-semibold text-center text-white px-52">
            2. Gear Box OH
          </h1>

          <div className="card-container">
            <a href={video1_08} target="_blank">
              <Card id="Video4" name="Gear Box OH Video-1"></Card>
            </a>
            <a href={video1_09} target="_blank">
              <Card id="Video5" name="Gear Box OH Video-2"></Card>
            </a>
            <a href={video1_10} target="_blank">
              <Card id="Video6" name="Gear Box OH Video-4"></Card>
            </a>
            <a href={video1_11} target="_blank">
              <Card id="Video7" name="Gear Box OH Video-5"></Card>
            </a>
            <a href={video1_12} target="_blank">
              <Card id="Video8" name="Gear Box OH Video-6"></Card>
            </a>
            <a href={video1_13} target="_blank">
              <Card id="Video9" name="Gear Box OH Video-7"></Card>
            </a>
            <a href={video1_14} target="_blank">
              <Card id="Video10" name="Gear Box OH Video-8"></Card>
            </a>
            <a href={video1_15} target="_blank">
              <Card id="Video11" name="Gear Box OH Video-9"></Card>
            </a>
            <a href={video1_16} target="_blank">
              <Card id="Video12" name="Gear Box OH Video-10"></Card>
            </a>
            <a href={video1_17} target="_blank">
              <Card id="Video13" name="Gear Box OH Video-11"></Card>
            </a>
            <a href={video1_18} target="_blank">
              <Card id="Video14" name="Gear Box OH Video-12"></Card>
            </a>
            <a href={video1_19} target="_blank">
              <Card id="Video15" name="Gear Box OH Video-13"></Card>
            </a>
            <a href={video1_20} target="_blank">
              <Card id="Video16" name="Gear Box OH Video-14"></Card>
            </a>
            <a href={video1_21} target="_blank">
              <Card id="Video17" name="Gear Box OH Video-15"></Card>
            </a>
            <a href={video1_22} target="_blank">
              <Card id="Video18" name="Gear Box OH Video-16"></Card>
            </a>
            <a href={video1_23} target="_blank">
              <Card id="Video19" name="Gear Box OH Video-17"></Card>
            </a>
            <a href={video1_24} target="_blank">
              <Card id="Video19" name="Gear Box OH Video-18"></Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../homepage.css";
import Card from "../Card";
import image1 from "../Badge.jpeg";
import image2 from "../HQ.jpeg";
import Button from "../Button";
import Nav from "../Nav";

/* Video Links */
import video1_01 from "../../Videos/5_ENGINE OH/1_VIDEO.mp4";
import video1_02 from "../../Videos/5_ENGINE OH/2_VIDEO.mp4";
import video1_03 from "../../Videos/5_ENGINE OH/3_VIDEO.mp4";
import video1_04 from "../../Videos/5_ENGINE OH/5_VIDEO.mp4";
import video1_05 from "../../Videos/5_ENGINE OH/6_VIDEO.mp4";
import video1_06 from "../../Videos/5_ENGINE OH/7_VIDEO.mp4";
import video1_07 from "../../Videos/5_ENGINE OH/8_VIDEO.mp4";
import video1_08 from "../../Videos/5_ENGINE OH/9_VIDEO.mp4";
import video1_09 from "../../Videos/5_ENGINE OH/10_VIDEO.mp4";
import video1_10 from "../../Videos/5_ENGINE OH/11_VIDEO.mp4";
import video1_11 from "../../Videos/5_ENGINE OH/12_VIDEO.mp4";
import video1_12 from "../../Videos/5_ENGINE OH/13_VIDEO.mp4";
import video1_13 from "../../Videos/5_ENGINE OH/14_VIDEO.mp4";
import video1_14 from "../../Videos/5_ENGINE OH/15_VIDEO.mp4";
import video1_15 from "../../Videos/5_ENGINE OH/16_VIDEO.mp4";
import video1_16 from "../../Videos/5_ENGINE OH/17_VIDEO.mp4";
import video1_17 from "../../Videos/5_ENGINE OH/19_VIDEO.mp4";
import video1_18 from "../../Videos/5_ENGINE OH/20_VIDEO.mp4";
import video1_19 from "../../Videos/5_ENGINE OH/21_VIDEO.mp4";
import video1_20 from "../../Videos/5_ENGINE OH/22_VIDEO.mp4";
import video1_21 from "../../Videos/5_ENGINE OH/23_VIDEO.mp4";
import video1_22 from "../../Videos/5_ENGINE OH/24_VIDEO.mp4";
import video1_23 from "../../Videos/5_ENGINE OH/26_VIDEO.mp4";
import video1_24 from "../../Videos/5_ENGINE OH/27_VIDEO.mp4";
import video1_25 from "../../Videos/5_ENGINE OH/28_VIDEO.mp4";

export default function Engine_OH() {
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
            CHAPTER 5 : Engine OH
          </p>
          <div className="card-container">
            <a href={video1_01} target="_blank">
              <Card id="Engine OH Video1" name="Video-1"></Card>
            </a>
            <a href={video1_02} target="_blank">
              <Card name="Engine OH Video-2"></Card>
            </a>
            <a href={video1_03} target="_blank">
              <Card name="Engine OH Video-3"></Card>
            </a>
            <a href={video1_04} target="_blank">
              <Card name="Engine OH Video-5"></Card>
            </a>
            <a href={video1_05} target="_blank">
              <Card name="Engine OH Video-6"></Card>
            </a>
            <a href={video1_06} target="_blank">
              <Card name="Engine OH Video-7"></Card>
            </a>
            <a href={video1_07} target="_blank">
              <Card name="Engine OH Video-8"></Card>
            </a>
            <a href={video1_08} target="_blank">
              <Card name="Engine OH Video-9"></Card>
            </a>
            <a href={video1_09} target="_blank">
              <Card name="Engine OH Video-10"></Card>
            </a>
            <a href={video1_10} target="_blank">
              <Card name="Engine OH Video-11"></Card>
            </a>
            <a href={video1_11} target="_blank">
              <Card name="Engine OH Video-12"></Card>
            </a>
            <a href={video1_12} target="_blank">
              <Card name="Engine OH Video-13"></Card>
            </a>
            <a href={video1_13} target="_blank">
              <Card name="Engine OH Video-14"></Card>
            </a>
            <a href={video1_14} target="_blank">
              <Card name="Engine OH Video-15"></Card>
            </a>
            <a href={video1_15} target="_blank">
              <Card name="Engine OH Video-16"></Card>
            </a>
            <a href={video1_16} target="_blank">
              <Card name="Engine OH Video-17"></Card>
            </a>
            <a href={video1_17} target="_blank">
              <Card name="Engine OH Video-19"></Card>
            </a>
            <a href={video1_18} target="_blank">
              <Card name="Engine OH Video-20"></Card>
            </a>
            <a href={video1_19} target="_blank">
              <Card name="Engine OH Video-21"></Card>
            </a>
            <a href={video1_20} target="_blank">
              <Card name="Engine OH Video-22"></Card>
            </a>
            <a href={video1_21} target="_blank">
              <Card name="Engine OH Video-23"></Card>
            </a>
            <a href={video1_22} target="_blank">
              <Card name="Engine OH Video-24"></Card>
            </a>
            <a href={video1_23} target="_blank">
              <Card name="Engine OH Video-26"></Card>
            </a>
            <a href={video1_24} target="_blank">
              <Card name="Engine OH Video-27"></Card>
            </a>
            <a href={video1_25} target="_blank">
              <Card name="Engine OH Video-28"></Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

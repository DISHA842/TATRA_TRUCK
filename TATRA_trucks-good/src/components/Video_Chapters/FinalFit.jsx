import React from "react";
import "../homepage.css";
import Card from "../Card";
import image1 from "../Badge.jpeg";
import image2 from "../HQ.jpeg";
import Button from "../Button";
import Nav from "../Nav";

/* Video Links */
import video1_01 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video01.mp4";
import video1_02 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video02.mp4";
import video1_03 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video03.mp4";
import video1_04 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video04.mp4";
import video1_05 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video05.mp4";
import video1_06 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video06.mp4";
import video1_07 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video07.mp4";
import video1_08 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video08.mp4";
import video1_09 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video09.mp4";
import video1_10 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video10.mp4";
import video1_11 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video11.mp4";
import video1_12 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video12.mp4";
import video1_13 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video13.mp4";
import video1_14 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video14.mp4";
import video1_15 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video15.mp4";
import video1_16 from "../../Videos/14 FINAL FITMENT _ LOAD TEST/video16.mp4";

export default function FinalFit() {
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
            CHAPTER 14 : Final Fitment - Load Test
          </p>
          <div className="card-container">
            <a href={video1_01} target="_blank">
              <Card name="Final Fitment Video-1"></Card>
            </a>
            <a href={video1_02} target="_blank">
              <Card name="Final Fitment Video-2"></Card>
            </a>
            <a href={video1_03} target="_blank">
              <Card name="Final Fitment Video-3"></Card>
            </a>
            <a href={video1_04} target="_blank">
              <Card name="Final Fitment Video-4"></Card>
            </a>
            <a href={video1_05} target="_blank">
              <Card name="Final Fitment Video-5"></Card>
            </a>
            <a href={video1_06} target="_blank">
              <Card name="Final Fitment Video-6"></Card>
            </a>
            <a href={video1_07} target="_blank">
              <Card name="Final Fitment Video-7"></Card>
            </a>
            <a href={video1_08} target="_blank">
              <Card name="Final Fitment Video-8"></Card>
            </a>
            <a href={video1_09} target="_blank">
              <Card name="Final Fitment Video-9"></Card>
            </a>
            <a href={video1_10} target="_blank">
              <Card name="Final Fitment Video-10"></Card>
            </a>
            <a href={video1_11} target="_blank">
              <Card name="Final Fitment Video-11"></Card>
            </a>
            <a href={video1_12} target="_blank">
              <Card name="Final Fitment Video-12"></Card>
            </a>
            <a href={video1_13} target="_blank">
              <Card name="Final Fitment Video-13"></Card>
            </a>
            <a href={video1_14} target="_blank">
              <Card name="Final Fitment Video-14"></Card>
            </a>
            <a href={video1_15} target="_blank">
              <Card name="Final Fitment Video-15"></Card>
            </a>
            <a href={video1_16} target="_blank">
              <Card name="Final Fitment Video-16"></Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

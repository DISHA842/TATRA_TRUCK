import React from "react";
import Card from "./Card";
import image2 from "./HQ.jpeg";
import image1 from "./Badge.jpeg";
import "./homepage.css";
import Nav from "./Nav";
import Button from "./Button";

function VideoTut() {
  return (
    <div class="bg-custom-primary h-screen bg-cover">
      <div class="bg-custom-primary">
        <Nav />

        <div className="badge-container">
          <img className="top-left-image" src={image1} alt="image1" />
          <nav className="OhNav">508 ARMY BASE WORKSHOP CHHEOKI, PRAYAGRAJ</nav>
          <img className="top-right-image" src={image2} alt="image2" />
        </div>

        <div className="textnbutton">
          <Button text="< Back" hlink="Trg" />
          <p className="text-5xl text-white text-center px-52 font-semibold italic underline">
            VIDEOS ON TRG MODULE
          </p>
        </div>

        <div class="card-container">
          <a href="Arrival" id="ch1_A">
            <Card name="Arrival"></Card>
          </a>
          <a href="Stripping" id="ch1_0">
            <Card name="Stripping"></Card>
          </a>
          <a href="Washing" id="ch1_1">
            <Card name="Washing"></Card>
          </a>
          <a href="Chassis_Painting" id="ch2_2">
            <Card name="Chassis Painting"></Card>
          </a>
          <a href="Engine_OH" id="ch2_3">
            <Card name="Engine OH"></Card>
          </a>
          <a href="HubGearBox" id="ch2_4">
            <Card name="Hub & Gear Box OH"></Card>
          </a>

          <a href="ElectWk" id="ch2_5">
            <Card name="Elect WK"></Card>
          </a>
          <a href="Wheel" id="ch2_6">
            <Card name="Wheel OH"></Card>
          </a>
          <a href="DoorDenting" id="ch2_7">
            <Card name="Door Denting"></Card>
          </a>
          <a href="EngineFitment" id="ch2_8">
            <Card name="Engine Fitment"></Card>
          </a>
          <a href="GearBoxFit" id="ch3_9">
            <Card name="Gear Box Fitment"></Card>
          </a>
          <a href="BodyRepair" id="ch3_10">
            <Card name="Body Repair"></Card>
          </a>
          <a href="Painting" id="ch3_11">
            <Card name="Painting"></Card>
          </a>
          <a href="FinalFit" id="ch3_12">
            <Card name="Final Fitment & Load Test"></Card>
          </a>
          <a href="FinalCheck" id="ch3_13">
            <Card name="Final Check"></Card>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoTut;

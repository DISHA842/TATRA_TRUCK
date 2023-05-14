import React from "react";
import Card from "./Card";
import image1 from "./HQ.jpeg";
import image2 from "./Badge.jpeg";
import "./homepage.css";
import Nav from "./Nav";
import Button from "./Button";
import Pdf1 from "../pdf/Chapter01_0.pdf";
import Pdf2 from "../pdf/Chapter01_1.pdf";
import Pdf3 from "../pdf/Chapter01_A.pdf";
import Pdf4 from "../pdf/Chapter02_2.pdf";
import Pdf5 from "../pdf/Chapter02_3.pdf";
import Pdf6 from "../pdf/Chapter02_4.pdf";
import Pdf7 from "../pdf/Chapter02_5.pdf";
import Pdf8 from "../pdf/Chapter02_6.pdf";
import Pdf9 from "../pdf/Chapter02_7.pdf";
import Pdf10 from "../pdf/Chapter02_8.pdf";
import Pdf11 from "../pdf/Chapter03_9.pdf";
import Pdf12 from "../pdf/Chapter03_10.pdf";
import Pdf13 from "../pdf/Chapter03_11.pdf";
import Pdf14 from "../pdf/Chapter03_12.pdf";
import Pdf15 from "../pdf/Chapter03_13.pdf";
import Pdf16 from "../pdf/Chapter03_14.pdf";
import Pdf17 from "../pdf/Chapter03_15.pdf";
import Pdf18 from "../pdf/Chapter03_16.pdf";
import Pdf19 from "../pdf/Chapter03_17.pdf";

function Literature() {
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
          <p className="text-5xl italic font-semibold text-center text-white underline px-52">
            LITERATURE ON TRG MODULE
          </p>
        </div>

        <div class="card-container">
          {/* chapter 1 */}
          <a href={Pdf1} target="_blank" id="ch1_A">
            <Card name="General Descirption"></Card>
          </a>
          <a href={Pdf2} target="_blank" id="ch1_0">
            <Card name="Vehicle Complete"></Card>
          </a>
          <a href={Pdf3} target="_blank" id="ch1_1">
            <Card name="Engine & its system"></Card>
          </a>

          {/* chapter 2 */}
          <a href={Pdf4} target="_blank" id="ch2_2">
            <Card name="Clutch & Properler Shaft"></Card>
          </a>
          <a href={Pdf5} target="_blank" id="ch2_3">
            <Card name="Gearbox"></Card>
          </a>
          <a href={Pdf6} target="_blank" id="ch2_4">
            <Card name="Auxiliary Gearbox"></Card>
          </a>

          <a href={Pdf7} target="_blank" id="ch2_5">
            <Card name="Power Take-Off Ride"></Card>
          </a>
          <a href={Pdf8} target="_blank" id="ch2_6">
            <Card name="Back Bone Tubes, Connecting Parts Differentials"></Card>
          </a>
          <a href={Pdf9} target="_blank" id="ch2_7">
            <Card name="Axles"></Card>
          </a>
          <a href={Pdf10} target="_blank" id="ch2_8">
            <Card name="Suspension"></Card>
          </a>

          {/* chapter 3 */}
          <a href={Pdf11} target="_blank" id="ch3_9">
            <Card name="Brake System & Air Pressure System"></Card>
          </a>
          <a href={Pdf12} target="_blank" id="ch3_10">
            <Card name="Steering"></Card>
          </a>

          <a href={Pdf13} target="_blank" id="ch3_11">
            <Card name="Wheels & Tyres"></Card>
          </a>
          <a href={Pdf14} target="_blank" id="ch3_12">
            <Card name="Frame & Frame Body"></Card>
          </a>
          <a href={Pdf15} target="_blank" id="ch3_13">
            <Card name="Cab, Heating & Ventilation System "></Card>
          </a>
          <a href={Pdf16} target="_blank" id="ch3_14">
            <Card name="Superstructure"></Card>
          </a>
          <a href={Pdf17} target="_blank" id="ch3_15">
            <Card name="Electric Accessories"></Card>
          </a>
          <a href={Pdf18} target="_blank" id="ch3_16">
            <Card name="Central Tyre Inflation System"></Card>
          </a>
          <a href={Pdf19} target="_blank" id="ch3_17">
            <Card name="Winch"></Card>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Literature;

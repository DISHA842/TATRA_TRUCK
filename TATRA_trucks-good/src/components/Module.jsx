import React from "react";
import Card from "./Card";
import image1 from "./HQ.jpeg";
import image2 from "./Badge.jpeg";
import "./homepage.css";
import Nav from "./Nav";
import Button from "./Button";

function Module() {
  return (
    <div class="bg-custom-primary h-screen bg-cover">
      <Nav />

      <div className="badge-container">
        <img className="top-left-image" src={image1} alt="image1" />
        <nav className="OhNav">508 ARMY BASE WORKSHOP CHHEOKI, PRAYAGRAJ</nav>
        <img className="top-right-image" src={image2} alt="image2" />
      </div>

      <div className="textnbutton">
        <Button text="< Back" hlink="/" />
        <p className="text-5xl text-white text-center px-52 font-semibold italic underline">
          TRG MODULES
        </p>
      </div>

      <div class="card-container">
        <a href="/Trg">
          <Card name="TRG MODULE ON TATRA 6×6"></Card>
        </a>
        <a href="/Trg">
          <Card name="TRG MODULE ON TATRA 8×8"></Card>
        </a>
      </div>
    </div>
  );
}

export default Module;

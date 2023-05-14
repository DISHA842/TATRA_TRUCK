import React from "react";
import "./homepage.css";
import image1 from "./HQ.jpeg";
import image2 from "./Badge.jpeg";
import Nav from "./Nav";
import Button from "./Button";

function OH_Norm() {
  return (
    <div class="bg-custom-primary h-screen bg-cover">
      <div>
        <Nav />
        <div className="badge-container">
          <img className="top-left-image" src={image1} alt="image1" />
          <nav className="OhNav">508 ARMY BASE WORKSHOP CHHEOKI, PRAYAGRAJ</nav>
          <img className="top-right-image" src={image2} alt="image2" />
        </div>
      </div>

      <div className="oh-container">
        <div className="title">
          <h1>TATRA OH NORMS</h1>
        </div>
        <div className="body">
          <ul>
            <li class="triangle">15 yrs of vintage.</li>
            <li class="triangle">60,000 Kms.</li>
            <li class="triangle">
              Availability of Eqpt to Fd Army in 53 days + Transit pd.
            </li>
          </ul>
        </div>
        <Button text="< Back" hlink="Trg" />
      </div>
    </div>
  );
}
export default OH_Norm;

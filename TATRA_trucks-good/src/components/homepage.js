// export NODE_OPTIONS=--openssl-legacy-provider

import React from "react";
import "./homepage.css";
import Nav from "./Nav";
import Logo from "./images/logo.jpeg";
import img1 from "./images/truck01.jpeg";
import img2 from "./images/truck02.jpeg";
import img3 from "./images/truck03.jpeg";

function Homepage() {
  return (
    <div className="bg">
      <div className="bg">
        <Nav></Nav>
        <nav className="OhNav">508 ARMY BASE WORKSHOP CHHEOKI, PRAYAGRAJ</nav>
        <div className="home-container">
          <div class="image-container">
            <img src={img1} alt="Image 1" />
            <img src={Logo} alt="Image 2" />
            <img src={img3} alt="Image 3" />
          </div>
        </div>

        <div className="home-container">
          <div class="box-container">
            <h1>The Mobilios</h1>
          </div>
        </div>
        {/* <div className="home-container">
          <img class="image-container" src={img2} alt="Landscape" />
        </div> */}
      </div>
    </div>
  );
}
export default Homepage;

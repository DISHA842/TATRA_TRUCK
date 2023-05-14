import React from "react";
import Upload from "./Upload";

export default function Nav() {
  return (
    <div className="topnav">
      <a className="active" href="/">
        Home
      </a>
      <a href="Cards">TRG Module</a> 
      <a href="Upload">Upload files</a>
      <a href="Uploadv">Upload videos</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
}

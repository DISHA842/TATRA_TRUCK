import React from "react";
import Card from "./Card";

function Link({ url, fileName }) {
  return (
    <a className="display_db" href={url} target="_blank" id="ch1_A">
      <Card name={fileName}></Card>
    </a>
  );
}

export default Link;

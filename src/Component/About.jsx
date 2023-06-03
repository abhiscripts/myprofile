import React from "react";
import me from "../Assets/me.jpg";

export default function About() {
  return (
    <div className="about">
      <img src={me} alt="Me" />
      <p>Hello, I am Abhishek</p>
      <h1>
        A Lead Fullstack Developer @Airbus
        <br />
        Who knows Javascript, AWS (cloud), React, Python and Devops
      </h1>
    </div>
  );
}

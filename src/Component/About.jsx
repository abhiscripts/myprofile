import React from "react";
import Skills from "./Skills";
import me from "../Assets/me.jpg";

export default function About() {
  return (
    <div className="about">
      <img src={me} alt="Me" />
      <p>Hello, I am Abhishek</p>
      <h1>
        A Lead Fullstack Developer @Airbus
        <br />
        With 7+ years of experience in Aircraft, Media and Automotive Domains.
      </h1>
      <Skills/>
    </div>
  );
}

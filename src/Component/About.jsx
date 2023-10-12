import React from "react";
import Skills from "./Skills";
import me from "../Assets/me.jpg";
import Certification from "./Certification";


export default function About() {
  return (
    <div className="about">
      <img src={me} alt="Me" />
      <p>Hello, I am Abhishek Choudhary</p>
      <h1>
        Lead Software Engineer@Airbus
        <br />
        <br />
        <div className="centered-div" readOnly>
        <p className="black-text">As a System Team Member My role is to collaborate with multiple dev teams to plan, design, and finalize architectures for various projects. 
        I also provide solutions in DevOps and system design, and resolve technical blockers for teams. I have domain experience in aerospace, media, and automotive industries,
         and I leverage my skills in AWS, Node.js, React, Python, and TypeScript to deliver high-quality products and solutions.
         </p></div>
      </h1>
      <Certification/>
        <Skills/>
    </div>
  );
}

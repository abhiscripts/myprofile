import React from "react";
import Skills from "./Skills";
import me from "../Assets/me.jpg";
import cert from "./../Assets/cert.png";
import logo from "./../Assets/logo.png";
import safe from "./../Assets/safe.png";

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
      <div className="headorLogos">
        <img src={logo} alt="logo" style={{ maxHeight: "90px" } }/>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.credly.com/badges/a428a2ea-82c4-4d3e-a5cf-f492757b3403/public_url"
          >
            <img
              src={cert}
              alt="meta cert"
              style={{
                maxHeight: "100px",
              }}
            />
          </a>
          <img src={safe} alt="safe cert" style={{ maxHeight: "90px" }} />
        </div>
        <Skills/>
    </div>
  );
}

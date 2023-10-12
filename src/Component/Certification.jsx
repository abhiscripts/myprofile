import React from 'react';
import cert from "./../Assets/cert.png";
import iitm from "./../Assets/iitm.png";
import safe from "./../Assets/safe.png";

export default function Certification() {
  return (
    <div className="certifications">
      <h1>Certifications</h1>
      <div className="headorLogos">
        <div className="cert-container">
          <img src={iitm} alt="logo" />
          <h3>IIT Madras Devops and Cloud Certified</h3>
        </div>
        <div className="cert-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.credly.com/badges/a428a2ea-82c4-4d3e-a5cf-f492757b3403/public_url"
          >
            <img src={cert} alt="meta cert" />
          </a>
          <h3>Meta Certified FrontEnd Professional </h3>
        </div>
        <div className="cert-container">
          <img src={safe} alt="safe cert" />
          <h3>Safe Certified Developer</h3>
        </div>
      </div>
    </div>
  )
}

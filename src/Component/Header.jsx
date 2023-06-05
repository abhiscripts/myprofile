import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import cert from "./../Assets/cert.png";
import logo from "./../Assets/logo.png";
import safe from "./../Assets/safe.png";

const SOCIAL_LINKS = {
  email: "mailto:abhishek.kc6@gmail.com",
  github: "https://github.com/abhiscripts",
  linkedin: "https://www.linkedin.com/in/abhishekchoudhary1/",
  medium: "https://medium.com/@abhishek.kc6",
};
export default function Header({ projectsRef, contactRef }) {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header">
      <div className="headerSocial">
        <img src={logo} alt="logo" />
        <EmailIcon
          onClick={() => handleIconClick(SOCIAL_LINKS["email"])}
          style={{ height: "100px" }}
        />
        <LinkedInIcon
          onClick={() => handleIconClick(SOCIAL_LINKS["linkedin"])}
          style={{ height: "100px" }}
        />
        <GitHubIcon
          onClick={() => handleIconClick(SOCIAL_LINKS["github"])}
          style={{ height: "100px" }}
        />
        <BurstModeIcon
          onClick={() => handleIconClick(SOCIAL_LINKS["medium"])}
          style={{ height: "100px" }}
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.credly.com/badges/a428a2ea-82c4-4d3e-a5cf-f492757b3403/public_url"
        >
          <img src={cert} alt="meta cert" style={{ height: "70px", paddingTop:"15px", paddingLeft: "45px" }}/>
        </a>
        <img src={safe} alt="safe cert" style={{ height: "80px", paddingTop:"12px", paddingLeft: "5px" }}/>
      </div>
      <div className="headerPage">
        <button onClick={scrollToProjects}>Projects</button>
        <button onClick={scrollToContact}>Contact Me</button>
      </div>
    </div>
  );
}

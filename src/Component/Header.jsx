import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import airbus from "./../Assets/airbus.png";

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
          <img src={airbus} alt="Airbus" height="80px"/>
        </div>
      <div className="headerPage">
        <button onClick={scrollToProjects}>Projects</button>
        <button onClick={scrollToContact}>Contact Me</button>
      </div>
    </div>
  );
}

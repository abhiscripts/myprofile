import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

const SOCIAL_LINKS = {
  email: "https://example.com/email",
  github: "https://example.com/github",
  linkedin: "https://example.com/linkedin",
  facebook: "https://example.com/facebook",
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
        <EmailIcon onClick={() => handleIconClick(SOCIAL_LINKS["email"])} />
        <LinkedInIcon
          onClick={() => handleIconClick(SOCIAL_LINKS["linkedin"])}
        />
        <GitHubIcon onClick={() => handleIconClick(SOCIAL_LINKS["github"])} />
        <FacebookIcon
          onClick={() => handleIconClick(SOCIAL_LINKS["facebook"])}
        />
      </div>
      <div className="headerPage">
        <button onClick={scrollToProjects}>Projects</button>
        <button onClick={scrollToContact}>Contact Me</button>
      </div>
    </div>
  );
}

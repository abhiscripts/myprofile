import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Technical Skills </h2>
      {skillsObject.map((skill) => {
        return (
          <div className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: skill.width }}
              ></div>
            </div>
            <span className="skill-rating">{skill.rating}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;

const skillsObject = [
  {
    name: "System Design",
    width: "70%",
    rating: "7/10",
  },
  {
    name: "Cloud",
    width: "70%",
    rating: "7/10",
  },
  {
    name: "Devops",
    width: "50%",
    rating: "5/10",
  },
  {
    name: "React",
    width: "90%",
    rating: "9/10",
  },
  {
    name: "Nodejs",
    width: "70%",
    rating: "7/10",
  },
  {
    name: "My Sql",
    width: "60%",
    rating: "6/10",
  },
  {
    name: "Python",
    width: "60%",
    rating: "6/10",
  },
];

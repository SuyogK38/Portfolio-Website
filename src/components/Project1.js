import "./projectcard1.css";
import React from "react";
import ProjectCard1 from "./Projectcard1";
import ProjectData1 from "./Projectdata1";

const Project1 = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectData1.map((val, ind) => {
          return (
            <ProjectCard1
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project1;

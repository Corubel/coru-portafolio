import React from "react";



function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">
      <h1 className="">{name}</h1>
      <div className="bgImage" style={{ backgroundImage: `url(${image})` }} >
      </div>
    </div>
  );
}

export default ProjectItem;

import React from "react";
import "../estilos/homepage.css";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub} from 'react-icons/ai';

function HomePage() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hola, soy Corel</h2>
        <div className="prompt">
          <p>Desarrolladora Front End React.</p>
          <AiFillLinkedin className="hp_icon"/>
          <AiOutlineMail className="hp_icon"/>
          <AiFillGithub className="hp_icon"/>
        </div>
      </div>
      <div className="skills">
        <h1> Habilidades</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, , NPM              
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,  MySQL             
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default HomePage;

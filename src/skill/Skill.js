import React from 'react';
import './Skill.css';

// Import images from assets
import mongoDBIcon from '../assets/database-storage (1).png';
import nodeIcon from '../assets/node-js.png';
import reactIcon from '../assets/logo512.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css-3.png';
import jsIcon from '../assets/java-script.png';

function Skill() {
   const skills = [
        { name: 'MongoDB', image: mongoDBIcon },
        { name: 'Node', image: nodeIcon },
        { name: 'React', image: reactIcon },
        { name: 'HTML 5', image: htmlIcon },
        { name: 'CSS 3', image: cssIcon },
        { name: 'JavaScript', image: jsIcon }
    ];

  return (
    <div>
      <div className="section" id="skill">
        <h5 className="title">My Skills</h5>
        <ul className="liststyle">
          {skills.map((skill, index) => (
            <li key={index} title={skill.name}>
              <img src={skill.image} alt={skill.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skill;

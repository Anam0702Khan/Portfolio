import React from 'react'
import "./Skill.css"

function Skill() {
   const  skills = [
        { name: 'MongoDB', image: 'database-storage (1).png' },
        { name: 'Node', image: 'node-js.png' },
        { name: 'React', image: 'logo512.png' },
        { name: 'HTML 5', image: 'html.png' },
        { name: 'CSS 3', image: 'css-3.png' },
        { name: 'JavaScript', image: 'java-script.png' }
    ]
  return (
    <div>
      <div class="section" id="skill" >
      <h5 class="title">My Skills</h5>
       <ul class="liststyle">
  {
    skills.map((skill,index) => (
        <li title={skill.name}><img src={skill.image} alt="" /></li>

    ))
  }
    </ul>
    </div>
   </div>
  )
}

export default Skill
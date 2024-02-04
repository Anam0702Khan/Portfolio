import React from 'react'
import "./Navbar.css"
import About from "../about/About.js"
import Contact from '../contact/Contact.js'
import Skill from '../skill/Skill.js'
import Project from "../project/Project.js"


function Navbar() {
  return (
    <div>
    <div class="container-fluid bg-dark">
    <nav class="nav">  
      <ul class="d-flex flex-row">
        <li class="nav-item">
          <a class="nav-link" href='#about'>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='#skill'> Skills</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href='#project'>Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='#contact'> Contact Me</a>
        </li>   
      </ul>
    </nav>
    <div class="row pt--50">
      <div class="col-lg-6 px-5">
        <div class="sticky-section">
          <img src="profile pic.jpeg" class="rounded-circle banner-img" />
          <h1 class="heading">
            Hi, I'm
            <span class="name">  Anam Khan</span>
            <br />
            <span class="desc">Full Stack Developer</span>
          </h1>
          <p>Passionate MERN Stack Developer | Building Web Applications with Innovation, currently pursuing a comprehensive course from Newton School.  </p>
          <a class="bttn" href="https://drive.google.com/file/d/129o7pUtGItvKhG_n5CPIu-qu0ZoFhSZJ/view?usp=drive_link" target="_blank">Download My CV</a>
          <button class="bttn">Hire Me</button>
          <div class="social d-flex flex-row ms-5">
            <a href="https://www.linkedin.com/in/anam-khan-ba93a7257/"><i class="bi bi-sm bi-linkedin"></i></a>
            <a href="mailto:anam0702khan@gmail.com"><i class="bi bi-envelope-fill"></i></a>           
            <a href="https://github.com/Anam0702Khan"><i class="bi bi-github"></i></a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 py-3">
        <div class="scroll-section">
          <About />
          <Project />
          <Skill />
          <Contact />

        </div>
      </div>
    </div>
    // </div>
    // </div>

  )
}

export default Navbar
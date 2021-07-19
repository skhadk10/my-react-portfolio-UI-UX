import React from 'react'
import Typed from 'typed.js'
import { useEffect, useRef } from "react";
import "./About.style.css"
import pp from '../../img/profile.png'
const About = () => {
      // Create Ref element.
      const el = useRef(null);
      useEffect(() => {
          const typed = new Typed(el.current, {
              strings: ["Full Stack ", "MERN Developer", "Blogger", "Designer", "Freelancer"],
              typeSpeed: 100,
              backSpeed: 60,
              loop: true
          });
      }, [])
    return (
        
           
    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content">
                <div class="column left">
                    <img src={pp} alt=""></img>
                </div>
                <div class="column right">
                    <div class="text">I'm Sanish and I'm a <span ref={el}></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                    <a href="#">Download CV</a>
                </div>
            </div>
        </div>
    </section>
       
    )
}

export default About

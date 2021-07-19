import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./Header.style.css";

const Headers = () => {
  // Create Ref element.
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack", "MERN Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }, []);

  return (
    <div>
      {/* <-- home section start -->  */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Sanish khadka</div>
            {/* Element to display typing strings */}
            <div className="text-3">
              And I'm a <span ref={el}></span>
            </div>
            <a href="#">Hire me</a>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Headers;

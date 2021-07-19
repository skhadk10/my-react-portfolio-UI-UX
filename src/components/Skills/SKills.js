import React from "react";
import "./Skills.style.css";
const SKills = () => {
  return (
    <div>
      {/* <!-- skills section start --> */}
      <section class="skills" id="skills">
        <div class="max-width">
          <h2 class="title">My skills</h2>
          <div class="skills-content">
            <div class="column left">
              <div class="text">My creative skills & experiences.</div>
              <p>Front-End Programming: HTML5, CSS3, JavaScript </p>
              <p> WebTechnologies: Reacted, MongoDB, Bootstrap, RESTful API </p>
              <p>JavaScript Libraries and Frameworks </p>
              <p>Back-End and Database Skills </p>
              <p> Version Control Systems:Git, GitHub </p>
              <p> Ecommerce Integration </p>
              <p> Time Management and Prioritization </p>
              <p> Responsive Web Design </p>
              <p> Troubleshooting and Testing </p>
              <p> Decision Making </p>
              <p> Website Privacy and Security .</p>

              <a href="#">Read more</a>
            </div>
            <div class="column right">
              <div class="bars">
                <div class="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div class="line html"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>CSS</span>
                  <span>60%</span>
                </div>
                <div class="line css"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>JavaScript</span>
                  <span>70%</span>
                </div>
                <div class="line js"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>React</span>
                  <span>90%</span>
                </div>
                <div class="line react"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Node.js</span>
                  <span>80%</span>
                </div>
                <div class="line nodejs"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>MongoDB</span>
                  <span>80%</span>
                </div>
                <div class="line mongodb"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>MySQL</span>
                  <span>70%</span>
                </div>
                <div class="line mysql"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SKills;

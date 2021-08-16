import React from 'react'
import "./Team.style.css"
import alija from "./../../img/alija.PNG"
import amrit from"./../../img/amrit.PNG"
import  saugat from "./../../img/saugat.PNG"
import prem from "./../../img/prem.PNG"
import  pravin from "./../../img/pravin.PNG"
import  binod from "./../../img/binod.PNG"
const Team = () => {
    return (
        <div>
             {/* <!-- teams section start --> */}
    <section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">My teams</h2>
            <div class="team-content">
                <div class="card">
                    <div class="box">
                        <img src={prem} alt=""></img>
                        <div class="text">Prem Acharya</div>
                        <p>Software Engineer | Entrepreneur | Coding Instructor | Mentor</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={pravin} alt=""></img>
                        <div class="text">Pravin karki</div>
                        <p>Software Engineer | PHP | Node.js | Motivator </p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={alija} alt=""></img>
                        <div class="text">Alija Tamang</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={binod} alt=""></img>
                        <div class="text">Binod Kunwar</div>
                        <p>Founder and Manager at Extra Tech | CCNA | AZURE | Mentor</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={saugat} alt=""></img>
                        <div class="text">Saugat Baral</div>
                        <p>Full Stack Web Developer | React JS | Node JS</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={amrit} alt=""></img>
                        <div class="text">Amrit Sapkota</div>
                        <p>Full MERN Stack Web Developer | React JS | Node JS</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Team

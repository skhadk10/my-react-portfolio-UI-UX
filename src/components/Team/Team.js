import React from 'react'
import "./Team.style.css"
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
                        <img src="images/profile-1.jpeg" alt=""></img>
                        <div class="text">Prem Acharya</div>
                        <p>Software Engineer | Entrepreneur | Coding Instructor | Mentor</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="images/profile-2.jpeg" alt=""></img>
                        <div class="text">Pravin karki</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="images/profile-3.jpeg" alt=""></img>
                        <div class="text">Alija Tamang</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="images/profile-4.jpeg" alt=""></img>
                        <div class="text">Binod Kunwar</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="images/profile-5.jpeg" alt=""></img>
                        <div class="text">Saugat Baral</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="images/profile-5.jpeg" alt=""></img>
                        <div class="text">Amrit Sapkota</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Team

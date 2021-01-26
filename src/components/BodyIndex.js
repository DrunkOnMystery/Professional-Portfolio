import React from "react";
import '../styles/style.css';

function BodyIndex() {
    return (
        <div className="Main" class="main">
            <section class="container">
                <div class="row">
                    <div class="col">
                        <img id="me-and-will" class="img-fluid" alt="Me and my oldest son Will"
                            src="https://hosting.photobucket.com/images/i/DrunkOnMystery/Ben_and_Will(1).jpg" />

                        <p class="about-me-text"><strong>Benjamin Brumby was born in Atlanta, GA in April of 1985, but has spent most of his life living in Orlando. He graduated from Dr. Phillips High School in 2003 before
                        attending the University of North Carolina School of the Arts. Later, he received a Certificate for Full Stack Web Development from the University of Central Florida.</strong></p>
                    </div>
                </div>
            </section>
            <div class="row">
                <div class="col">
                    <img id="me-and-nate" class="img-fluid" alt="Me and my youngest son Nate"
                        src="https://hosting.photobucket.com/images/i/DrunkOnMystery/Ben_and_Nate(1).jpg" />
                    <p class="about-me-text"><strong>Ben is a dedicated, team-oriented professional with experience both working within and leading projects of all scales. A motivated self-starter, Ben is ready to see what the next great challenge in his career will be.
                        <br></br>
                        Ben lives in Dr. Phillips with his wife, Mandy, their two sons, William and Nathan, and their
                        dog,
                        April.</strong></p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <ul class="about-me-text"> <strong>Ben's Programming Skills Include:
                    <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Express</li>
                        <li>NodeJS</li>
                        <li>JSX</li>
                        </strong>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col" id="Ben_and_Mandy_Div">
                    <img id="me-and-Mandy" class="img-fluid" alt="Me and my wife"
                        src="https://hosting.photobucket.com/images/i/DrunkOnMystery/Ben_and_Mandy(1).jpg" />
                </div>
            </div>
        </div>

    )
}

export default BodyIndex;
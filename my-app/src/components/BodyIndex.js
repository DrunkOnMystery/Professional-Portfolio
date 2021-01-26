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

                        <p class="about-me-text"><strong>Benjamin Brumby was born in Atlanta, GA in April of 1985, but has
                        spent
                        most of
                        his life living in Orlando. He graduated from Dr. Phillips High School in 2003 before
                        attending
                        the
                        University of North Carolina School of the Arts. He graduated with a BFA in Technical
                        Theater in
                        2007. After college, Ben moved first to northern Massachussetts, and then to Baltimore, MD.
                        Ben
                        took
                        a position for 4-1/2 years working for a company that installed corporate Christmas displays
                        all
                        across the world, including one at the world's largest indoor shopping mall in
                            Dubai.</strong></p>
                    </div>
                </div>
            </section>
            <div class="row">
                <div class="col">
                    <img id="me-and-nate" class="img-fluid" alt="Me and my youngest son Nate"
                        src="https://hosting.photobucket.com/images/i/DrunkOnMystery/Ben_and_Nate(1).jpg" />
                    <p class="about-me-text"><strong>After that job ended, Ben moved back to his hometown of Orlando, and
                    took a job
                    working for a company that planned and managed corporate events and trade shows. For more than 6
                    years,
                    Ben worked doing technical drawings in AutoCAD for some of the largest events and tradeshows in
                    the
                    Southeast United States, ranging in size and scope from International Association of Amusement
                    Park
                    Attractions Convention to the NFL Drafts in 2018 and 2019. When that business dried out due to
                    COVID-19,
                    Ben decided it was time to try someting new and different, and has embraced coding as a new
                    career.
                        <br></br>
                        Ben lives in Dr. Phillips with his wife, Mandy, their two sons, William and Nathan, and their
                        dog,
                        April.</strong></p>
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
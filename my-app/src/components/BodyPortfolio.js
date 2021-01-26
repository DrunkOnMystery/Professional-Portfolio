import React from "react";
import Project from "./Project";
import projects from "./../projects.json"
import '../styles/style.css';


function BodyPortfolio() {
    return (
        <div className="BodyPortfolio"  class="main">
            <main class="card-container">
                <div class="row">
                    {projects.map((item, i) => (
                        <Project
                            key={i}
                            title={item.title}
                            image_src={item.image_src}
                            url={item.url}
                            github={item.github}
                            description={item.description}
                            technologies={item.technologies}
                            />
                    ))}
                </div>
            </main>
            <div class="row">
                        <ul>Ben's programming skills include:
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>MySQL</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                        </ul>
                </div>
        </div>
    )
}

export default BodyPortfolio;
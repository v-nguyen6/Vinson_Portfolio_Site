/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { RiToolsLine } from "react-icons/ri";

//--------------------------------------------------------------
const SPOverview = ( {
    scope, 
    devTeam, 
    role, 
    tools, 
    githubLink, 
    livesiteLink,
    mobileBanner,
    desktopBanner,
    duration,
}) => {
    return (
        <article className="single-project-component-overview">
            <img 
                src={mobileBanner}
                alt="Project Banner (mobile)"
                className="single-project-component-overview--mobile-banner"
            />

            <img
                src={desktopBanner}
                alt="Project Banner (desktop)"
                className="single-project-component-overview--desktop-banner"
            />

            {/* Start of Content Container */}
            <section className="single-project-component-overview__content">
                {/* Scope */}
                <div className="scope">
                    <h2>Overview</h2>
                    <p>{scope}</p>
                </div>

                {/* Duration */}
                <div className="duration">
                    <h2>Duration</h2>
                    <p>{duration}</p>
                </div>

                {/* Role */}
                <div className="role">
                    <h2>Role</h2>
                    <ul>
                        <li>{role}</li>
                    </ul>
                </div>

                {/* Development Team */}
                <div className="dev-team">
                    <h2>Development Team</h2>
                    <p>{devTeam}</p>
                </div>

                {/* Tools */}
                <div className="tools">
                    <h2>Development Stack</h2>
                    <ul>
                        {tools.map((tool) => {
                            return <li>{tool}</li>;
                        })}
                    </ul>
                </div>
            </section>

            {/* Call To Action Buttons */}
            <div className="single-project-component-overview__cta">
                <a 
                    href={livesiteLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Site"
                >
                    {livesiteLink === undefined ? "Coming Soon" : "View Live Site"}
                </a>
                <a 
                    href={githubLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github Repo"
                >
                    {githubLink === undefined ? "Not Availible" : "View on Github"}
                </a>   
            </div>
        </article>
    )
}

export default SPOverview;
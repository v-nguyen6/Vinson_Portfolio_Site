/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Custom React Components
// - Custom React Icons (Custom Icon Library)
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

//--------------------------------------------------------------
const SPCallToAction = ({ home, nextProject, livesite, github }) => {
    return (
        <article className="single-project-component__navigate-projects">
            {/* Navigate Back Home */}
            <Link to={home} className="go-back-home">
                <RiArrowLeftSLine size="3.5em" />
                <p>Return Home</p>
            </Link>

            {/* Project CTAs */}
            <div className="project-cta">
                <a
                    href={livesite === "none" ? "#0" : livesite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-site"
                >
                    {livesite === "none" ? "Coming Soon" : "View Live Site"}
                </a>
                <a
                    href={github === "none" ? "#0" : github}
                    href={livesite === "none" ? "#0" : livesite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-site"
                >
                    {github === "none" ? "Not Availiable" : "View on Github"}
                </a>
            </div>

            {/* Next Project */}
            <Link to={nextProject} className="next-project">
                <RiArrowRightSLine size="3.5em" />
                <p>Next Project</p>
            </Link>
        </article>
    )
}

export default SPCallToAction;
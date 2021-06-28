/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Components & Assets
import SummaryBanner from "../../../assets/homepage/work_summary_filmdex.png";

//--------------------------------------------------------------
const MovieAppProject = () => {
    return (
        <article className="summary-component" id="summary-movie-app">
            {/* Left Column */}
            <img
                src={SummaryBanner}
                className="summary-component__banner--desktop"
                data-aos="zoom-out-up"
                data-aos-easing="ease-out-quart"
                data-aos-once="false"
                data-aos-duration="600"
                data-aos-anchor-placement="center-bottom"
                data-aos-mirror="true"
                loading="lazy"
            />

            {/* Right Column */}
            <section
                className="summary-component__text-content"
                data-aos="fade-up"
                data-aos-easing="ease-out-quart"
                data-aos-once="false"
                data-aos-duration="600"
                data-aos-anchor-placement="center-bottom"
                data-aos-mirror="true"
                loading="lazy"
            >
                <h2 className="summary-component__text-content__name">
                    Filmdex 
                    <div className="accent-bar"></div>
                </h2>

                <h2 className="summary-component__text-content__subtitle">
                    React Movie Database 
                    <div className="accent-bar"></div>
                </h2>

                <p className="summary-component__text-content__excerpt">
                    A movie database app that allows users to search movies, gather information 
                    and add favourite movies. Developed using React to create a dynamic site that 
                    also utilizes the API from The Movie Database (TMDb).
                </p>

                <div className="summary-component__text-content__cta">
                    <Link to={"/filmdex-movie-database-project"} className="cta-btn">
                        Learn More
                    </Link>

                    <a
                        href="http://vnguyen.bcitwebdeveloper.ca/twd-movie-app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn"
                    >
                        View Live
                    </a>
                </div>
            </section>
        </article>
    );
}

export default MovieAppProject;
/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Components & Assets
import SummaryBanner from "../../../assets/homepage/work_summary_portfolio.png";

//--------------------------------------------------------------
const PortfolioProject = () => {
    return (
        <article className="project-component" id="project-portfolio-site">
            {/* Left Column */}
            <img
                src={SummaryBanner}
                className="project-component__banner--desktop"
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
                className="project-component__text-content"
                data-aos="fade-up"
                data-aos-easing="ease-out-quart"
                data-aos-once="false"
                data-aos-duration="600"
                data-aos-anchor-placement="center-bottom"
                data-aos-mirror="true"
                loading="lazy"
            >
                <h2 className="project-component__text-content__name">
                     Portfolio 
                    <div className="accent-bar"></div>
                </h2>

                <h3 className="project-component__text-content__subtitle">
                    React Portfolio Site 
                </h3>

                <p className="project-component__text-content__excerpt">
                This portfolio was designed and developed as a platform to showcase my 
                overall development and design skills that I learned within the TWD program, built using React.
                </p>

                <div className="project-component__text-content__cta">
                    <Link to={"/react-portfolio"} className="cta-btn">
                        Learn More
                    </Link>

                    <a
                        href="https://portfolio.vinsonnguyen.com/"
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

export default PortfolioProject;
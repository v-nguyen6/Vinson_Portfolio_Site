/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Components & Assets
import SummaryBanner from "../../../assets/homepage/work_summary_capstone.png";

//--------------------------------------------------------------
const CapstoneProject = () => {
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
                    Etoile
                    <div className="accent-bar"></div>
                </h2>

                <h3 className="summary-component__text-content__subtitle">
                    Wordpress Ecommerce Site
                    <div className="accent-bar"></div>
                </h3>

                <p className="summary-component__text-content__excerpt">
                    Etoile is an ecommerce site that sells custom designed clothing that allows 
                    consumers to have the ability to upload their own design for production. The 
                    site was based upon and built using WordPress and Woocommerce.
                </p>

                <div className="summary-component__text-content__cta">
                    <Link to={"/etoile-wordpress-capstone"} className="cta-btn">
                        Learn More
                    </Link>

                    <a
                        href="https://etoile.bcitwebdeveloper.ca/"
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

export default CapstoneProject;
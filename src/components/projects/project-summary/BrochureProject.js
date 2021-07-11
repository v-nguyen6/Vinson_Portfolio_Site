/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Components & Assets
import SummaryBanner from "../../../assets/homepage/work_summary_brochure.png";

//--------------------------------------------------------------
const BrochureProject = () => {
    return (
        <article className="project-component" id="project-brochure-site">
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
                    Take It Cheesy
                    <div className="accent-bar"></div>
                </h2>

                <h3 className="project-component__text-content__subtitle">
                    HTML / CSS Brochure Site
                </h3>

                <p className="project-component__text-content__excerpt">
                    A fictional gourmet cheese brochure site created using JavaScript, CSS/Sass and HTML. 
                    The site focuses on showcasing the production process and product selection of various 
                    gourmet cheeses. It also includes the ability for users to send inquiries and custom orders 
                    using a contact form. 
                </p>

                <div className="project-component__text-content__cta">
                    <Link to={"/take-it-cheesy-brochure"} className="cta-btn">
                        Learn More
                    </Link>

                    <a
                        href="http://vnguyen.bcitwebdeveloper.ca/keep_it_cheesy/"
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

export default BrochureProject;
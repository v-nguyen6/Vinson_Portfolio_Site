/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Components & Assets
import SummaryBanner from "../../../assets/homepage/work_summary_dino-dash.png";

//--------------------------------------------------------------
const DinoDashGame = () => {
    return (
        <article className="project-component" id="game-dino-dash">
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
                    Dino-Dash
                    <div className="accent-bar"></div>
                </h2>

                <h3 className="project-component__text-content__subtitle">
                    Javascript Game
                </h3>

                <p className="project-component__text-content__excerpt">
                Dino Dash is a small web-based game built using Javascript, CSS/Sass and HTML. The goal is to survive in the forest
                 as long as you can while avoiding obstacles, using the arrow keys. 
                </p>

                <div className="project-component__text-content__cta">
                    <Link to={"/dino-dash-game"} className="cta-btn">
                        Learn More
                    </Link>

                    <a
                        href="https://dino-dash.vinsonnguyen.com/"
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

export default DinoDashGame;

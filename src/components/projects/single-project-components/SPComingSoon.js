/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

//--------------------------------------------------------------
const SPComingSoon = () => {
    return (
        <article className="single-project-component__coming-soon">
            <h3
                data-aos="fade-down"
                data-aos-easing="ease-out-sine"
                data-aos-once="false"
                data-aos-duration="700"
            >
                {" "}
                Coming Soon 
                {" "}
            </h3>

            <hr
                data-aos="fade-right"
                data-aos-easing="ease-out-sine"
                data-aos-once="false"
                data-aos-duration="700"
                data-aos-delay="250"
            />
        </article>
    )
}

export default SPComingSoon;
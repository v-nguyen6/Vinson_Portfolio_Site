/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

//--------------------------------------------------------------
const SPTitle = ({ title, tagline }) => {
    return (
        <article className="single-project-component__title">
            <h1
                data-aos="fade-down"
                data-aos-easing="ease-out-sine"
                data-aos-once="false"
                data-aos-duration="700"
            >
                {title}
            </h1>

            <hr 
                data-aos="fade-right"
                data-aos-easing="ease-out-sine"
                data-aos-once="false"
                data-aos-duration="700"
                data-aos-delay="250"
            />

            <p
                data-aos="fade-right"
                data-aos-easing="ease-out-sine"
                data-aos-once="false"
                data-aos-duration="700"
                data-aos-delay="450"
            >
                {tagline}
            </p>
          
        </article>
    )
}

export default SPTitle;
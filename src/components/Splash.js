/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Custom React Components
// - Icon to Scroll down to "contact" section
//import ScrollDownIcon from "./widgets/ScrollDownIcon";

//--------------------------------------------------------------
const Splash = () => {
   

    return (
        <article className="section splash">
            {/* Splash Text Content */}
            <section className="splash-text-container">
                <h1 
                    className="splash-text-container__tagline"
                    data-aos="fade-right"
                    data-aos-easing="ease-out-quart"
                    data-aos-once="false"
                    data-aos-duration="850"
                    data-aos-mirror="true"
                >
                    I build websites using innovative tools.
                </h1>

                <p 
                    data-aos="fade-right"
                    data-aos-easing="ease-out-quart"
                    data-aos-once="false"
                    data-aos-delay="100"
                    data-aos-duration="850"
                    data-aos-mirror="true"
                >
                    Front-End Web Developer & Graphic Designer with background in UX / UI based in Vancouver, BC.
                </p>

                <div 
                    className="splash-button-container"
                    data-aos="fade-right"
                    data-aos-easing="ease-out-quart"
                    data-aos-once="false"
                    data-aos-delay="150"
                    data-aos-duration="850"
                    data-aos-mirror="true"
                >
                    <Link to={ "/about" }>More About Me</Link>
                </div>
            </section>

            {/* 
            Scroll Down Icon 
            <ScrollDownIcon />
            */}
            
        </article>
    ); 
}

export default Splash;

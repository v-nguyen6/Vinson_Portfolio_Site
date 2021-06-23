/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { useEffect, useState } from "react";

// Custom React Components
// - Custom React Icons (Custom Icon Library)
import { FaPaintRoller, FaSearch, FaPencilRuler } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { RiDeviceFill } from "react-icons/ri"; 

// AOS
//import AOS from "aos";

//--------------------------------------------------------------
const WorkSummary = () => {

    // Set states to identify when user is in Desktop vs Mobile 
    const [ isDesktop, setIsDesktop ] = useState(null);

    useEffect(() => {
        if (window.innerWidth >= 800) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    }, []);

    // Initialize AOS plugin
    //AOS.init();

    return (
        <article className="section summary" id="my-work">
            {/* Title and Summary */}
            <section className="summary__intro">
                <h1
                    data-aos="fade-down"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-easing="ease-out-quart"
                    data-aos-once="false"
                    data-aos-duration="800"
                    data-aos-mirror="true"
                >
                    Work
                </h1>
                
                <hr 
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-easing="ease-out-quart"
                    data-aos-once="false"
                    data-aos-duration="800"
                    data-aos-mirror="true"
                />

                <blockquote
                    data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-easing="ease-out-quart"
                    data-aos-delay="300"
                    data-aos-once="false"
                    data-aos-duration="800"
                    data-aos-mirror="true"
                >
                    I believe that employing all the latest development technologies can only get a 
                    website so far online. As a front-end developer, my goal is to build websites that 
                    not only look good, but create a seamless user experience through research, analytics, 
                    and SEO best practices.
                </blockquote>
            </section>

            {/* Work Summary Highlights */}
            <section className="summary__highlights">
                <h2
                    className="summary__highlights__title"
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-easing="ease-out-quart"
                    data-aos-once="false"
                    data-aos-delay="500"
                    data-aos-duration="800"
                    data-aos-mirror="true"
                >
                    With all my work I take into account...
                </h2>

                <div className="highlights-container">
                    <IconContext.Provider value={ {size:"2em", color:"purple"} }>
                        {/* Icon 01 */}
                        <div 
                            className="highlights-icon-01"
                            data-aos={isDesktop === true ? "fade-up" : "fade-right"}
                            data-aos-easing="ease-out-quart"
                            data-aos-once="false"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                        >
                            <FaPencilRuler title="Ruler Icon" />
                            <h2>Semantic, Scalable, and Modular Architecture</h2>
                        </div>

                        {/* Icon 02 */}
                        <div
                            className="highlights-icon-02"
                            data-aos={isDesktop === true ? "fade-up" : "fade-right"}
                            data-aos-easing="ease-out-quart"
                            data-aos-once="false"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                        >
                            <RiDeviceFill title="Devices Icon" />
                            <h2>Fully Responsive Design</h2>
                        </div>

                        {/* Icon 03 */}
                        <div
                            className="highlights-icon-03"
                            data-aos={isDesktop === true ? "fade-up" : "fade-right"}
                            data-aos-easing="ease-out-quart"
                            data-aos-once="false"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                        >
                            <FaSearch title="Magnifying Glass Icon" />
                            <h2>Search Engine Optimization</h2>
                        </div>

                        {/* Icon 04 */}
                        <div
                            className="highlights-icon-04"
                            data-aos={isDesktop === true ? "fade-up" : "fade-right"}
                            data-aos-easing="ease-out-quart"
                            data-aos-once="false"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                        >
                            <FaPaintRoller title="Paint Roller Icon" />
                            <h2>Design Fundamentals</h2>
                        </div>
                    </IconContext.Provider>
                </div>
            </section>
        </article>
    );
}

export default WorkSummary;
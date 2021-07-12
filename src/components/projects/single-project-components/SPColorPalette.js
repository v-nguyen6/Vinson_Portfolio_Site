/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

//--------------------------------------------------------------
const SPColorPalette = ({ col1, col2, col3, col4, col5}) => {
    return (
        <article className="single-project-component-colors">
            <h3
                data-ao="fade-down"
                data-aos-easing="ease-out-sine"
                data-aos-once="false"
                data-aos-duration="700"
            >
                Color Palette
            </h3>

            <hr
                data-aos="fade-right"
                data-aos-easing="ease-out-sine"
                data-aos-once="false"
                data-aos-duration="700"
                data-aos-delay="250"
            />

            <section className="color-items">
                {/* Color 1 */}
                <div
                    className="color-item color-item-01"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-sine"
                    data-aos-once="false"
                    data-aos-duration="700"
                    data-aos-delay="450"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="color-swatch" style={{ background: `${col1}` }}></div>
                    <p>{col1}</p>
                </div>

                {/* Color 2 */}
                <div
                    className="color-item color-item-02"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-sine"
                    data-aos-once="false"
                    data-aos-duration="700"
                    data-aos-delay="450"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="color-swatch" style={{ background: `${col2}` }}></div>
                    <p>{col2}</p>
                </div>

                {/* Color 3 */}
                <div
                    className="color-item color-item-03"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-sine"
                    data-aos-once="false"
                    data-aos-duration="700"
                    data-aos-delay="450"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="color-swatch" style={{ background: `${col3}` }}></div>
                    <p>{col3}</p>
                </div>

                {/* Color 4 */}
                <div
                    className="color-item color-item-04"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-sine"
                    data-aos-once="false"
                    data-aos-duration="700"
                    data-aos-delay="450"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="color-swatch" style={{ background: `${col4}` }}></div>
                    <p>{col4}</p>
                </div>

                {/* Color 5 */}
                <div
                    className="color-item color-item-05"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-sine"
                    data-aos-once="false"
                    data-aos-duration="700"
                    data-aos-delay="450"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="color-swatch" style={{ background: `${col5}` }}></div>
                    <p>{col5}</p>
                </div>
            </section>
        </article>
    )
}

export default SPColorPalette;
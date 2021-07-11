/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

//--------------------------------------------------------------
const SPDesign = ({ text }) => {
    return (
        <article className="single-project-component-design">
            <section className="single-project-component-design__container">
                <h3>Design</h3>
                <hr />
                <p>{text}</p>
            </section>
        </article>
    )
}

export default SPDesign;
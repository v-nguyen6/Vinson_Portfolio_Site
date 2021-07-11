/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

//--------------------------------------------------------------
const SPDevelopment = ({ text }) => {
    return (
        <article className="single-project-component-development">
            <section className="single-project-component-development__container">
                <h3>Development</h3>
                <hr />
                <p>{text}</p>
            </section>
        </article>
    )
}

export default SPDevelopment;
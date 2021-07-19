/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

//--------------------------------------------------------------
const SPNextTime = ({ nextTime }) => {
    return (
        <article className="single-project-component-challenges">
            <section className="single-project-component-challenges__container">
                <h3> Next Time</h3>
                <hr />
                <p> {nextTime} </p>
            </section>    
        </article>
    )
}

export default SPNextTime;
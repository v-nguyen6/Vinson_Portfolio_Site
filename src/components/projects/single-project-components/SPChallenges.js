/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

//--------------------------------------------------------------
const SPChallenges = ({ challenge }) => {
    return (
        <article className="single-project-component-challenges">
            <section className="single-project-component-challenges__container">
                <h3> Challenges</h3>
                <hr />
                <p> {challenge} </p>
            </section>    
        </article>
    )
}

export default SPChallenges;
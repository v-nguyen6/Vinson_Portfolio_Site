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
        <article className="single-project-component__challenges">
            <h3> What I found Challenging</h3>
            <hr />
            <p> {challenge} </p>
        </article>
    )
}

export default SPChallenges;
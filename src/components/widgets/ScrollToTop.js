/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

// Custom React Components
// - Custom React Icons (Custom Icon Library)
import { RiArrowUpSLine } from "react-icons/ri";

//--------------------------------------------------------------
const ScrollTop = () => {
    // Mini Function created to scroll to the absolute top of the window 
    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <button
            className="scroll-to-top-btn"
            type="button"
            title="Scroll To Top Button"
            onClick={() => {
                scrollTop();
            }}
        >
            <RiArrowUpSLine size="3em" color="blue" />
        </button>
    )
}

export default ScrollTop;


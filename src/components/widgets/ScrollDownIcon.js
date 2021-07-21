/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

//--------------------------------------------------------------
const ScrollDownIcon = () => {
   return (
      <div
         className="scroll-downs"
         data-aos="fade-up"
         data-aos-easing="ease-out-quart"
         data-aos-once="true"
         data-aos-duration="850"
         data-aos-mirror="true"
         data-aos-anchor-placement="top-bottom"
      >
         <a href="#my-work" className="mousey">
            <div className="scroller"></div>
         </a>
         <p className="scroll-downs__label"> scroll down to see more</p>
      </div>
   );
};

export default ScrollDownIcon;

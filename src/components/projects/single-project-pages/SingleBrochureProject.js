/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

// Custom React Components 
// - Animate On Scroll: Animates objects when user scrolls 
import AOS from "aos";
// - Lightbox: Allows users to click and see a larger view of images 
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

// Single Project Components
import SPOverview from "../single-project-components/SPOverview";
import SPDesign from "../single-project-components/SPDesign";
import SPDevelopment from "../single-project-components/SPDevelopment";
import SPTitle from "../single-project-components/SPTitle";
import SPTypography from "../single-project-components/SPTypography";
import SPChallenges from "../single-project-components/SPChallenges";
import SPColorPalette from "../single-project-components/SPColorPalette";
import SPCallToAction from "../single-project-components/SPCallToAction";

// Project Data
import { MY_PROJECTS } from "../../../globals/ProjectData";

// Assets
// --- Project Images ---
// - Banner Images
import desktopBanner from "../../../assets/brochure/banner/desktop-banner.png";
import mobileBanner from "../../../assets/brochure/banner/mobile-banner.png";
// - Live Site - Mobile Images
import brochureMobile1 from "../../../assets/brochure/mobile/brochure-mobile-screenshot-home.png";
import brochureMobile2 from "../../../assets/brochure/mobile/brochure-mobile-screenshot-about.png";
import brochureMobile3 from "../../../assets/brochure/mobile/brochure-mobile-screenshot-process.png";
import brochureMobile4 from "../../../assets/brochure/mobile/brochure-mobile-screenshot-contact.png";
// - Live Site - Desktop Images
import brochureDesktop1 from "../../../assets/brochure/desktop/brochure-desktop-screenshot-home.png";
import brochureDesktop2 from "../../../assets/brochure/desktop/brochure-desktop-screenshot-about.png";
import brochureDesktop3 from "../../../assets/brochure/desktop/brochure-desktop-screenshot-process.png";
import brochureDesktop4 from "../../../assets/brochure/desktop/brochure-desktop-screenshot-contact.png";
// --- Development Assets ---
// - Logo
import logo1 from "../../../assets/brochure/logo/brochure-logo-black.png";
import logo2 from "../../../assets/brochure/logo/brochure-logo-white.png";
// - Wireframes
import wireframe1 from "../../../assets/brochure/wireframes/brochure-wireframe-home.png";
import wireframe2 from "../../../assets/brochure/wireframes/brochure-wireframe-process.png";
import wireframe3 from "../../../assets/brochure/wireframes/brochure-wireframe-process-2.png";

//--------------------------------------------------------------
const SingleBrochureProject = () => {
 
}

export default SingleBrochureProject;

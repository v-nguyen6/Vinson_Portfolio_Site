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
import desktopBanner from "../../../assets/portfolio/banner/desktop-banner.png";
import mobileBanner from "../../../assets/portfolio/banner/mobile-banner.png";
// - Live Site - Mobile Images
import portfolioMobile1 from "../../../assets/portfolio/mobile/portfolio-mobile-screenshot-home.png";
import portfolioMobile2 from "../../../assets/portfolio/mobile/portfolio-mobile-screenshot-works.png";
import portfolioMobile3 from "../../../assets/portfolio/mobile/portfolio-mobile-screenshot-single-project.png";
import portfolioMobile4 from "../../../assets/portfolio/mobile/portfolio-mobile-screenshot-about.png";
// - Live Site - Desktop Images
import portfolioDesktop1 from "../../../assets/portfolio/desktop/portfolio-desktop-screenshot-home.png";
import portfolioDesktop2 from "../../../assets/portfolio/desktop/portfolio-desktop-screenshot-works.png";
import portfolioDesktop3 from "../../../assets/portfolio/desktop/portfolio-desktop-screenshot-single-project.png";
import portfolioDesktop4 from "../../../assets/portfolio/desktop/portfolio-desktop-screenshot-about.png";
// --- Development Assets ---
// - Content Plan
import contentPlan1 from "../../../assets/portfolio/content-plan/portfolio-contentplan.jpg";
// - Sitemap
import siteMap1 from "../../../assets/portfolio/site-map/portfolio-sitemap.jpg";
// - Wireframes - Desktop
import wireframeDesktop1 from "../../../assets/portfolio/wireframes/portfolio-wireframe-desktop-home.jpg";
import wireframeDesktop2 from "../../../assets/portfolio/wireframes/portfolio-wireframe-desktop-about.jpg";
import wireframeDesktop3 from "../../../assets/portfolio/wireframes/portfolio-wireframe-desktop-single-project.jpg";

//--------------------------------------------------------------
const SinglePortfolioProject = () => {
  
}

export default SinglePortfolioProject;

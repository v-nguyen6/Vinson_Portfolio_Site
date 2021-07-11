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
import SPColorPalette from "../single-project-components/SPColorPalette";
import SPChallenges from "../single-project-components/SPChallenges";
import SPCallToAction from "../single-project-components/SPCallToAction";

// Project Data
import { MY_PROJECTS } from "../../../globals/ProjectData";

// Assets
// - Project Images
import desktopBanner from "../../../assets/movie-app/banner/filmdex-desktop-banner.png";
import mobileBanner from "../../../assets/movie-app/banner/filmdex-mobile-banner.png";

import movieMockup1 from "../../../assets/movie-app/mockups/movie-app-mockups-about.jpg";
import movieMockup2 from "../../../assets/movie-app/mockups/movie-app-mockups-favourites.jpg";
import movieMockup3 from "../../../assets/movie-app/mockups/movie-app-mockups-home.jpg";
import movieMockup4 from "../../../assets/movie-app/mockups/movie-app-mockups-single.jpg";

import movieDesktop1 from "../../../assets/movie-app/desktop/filmdex-desktop-screenshot-about.png";
import movieDesktop2 from "../../../assets/movie-app/desktop/filmdex-desktop-screenshot-favourite.png";
import movieDesktop3 from "../../../assets/movie-app/desktop/filmdex-desktop-screenshot-search.png";
import movieDesktop4 from "../../../assets/movie-app/desktop/filmdex-desktop-screenshot-single.png";

import movieMobile1 from "../../../assets/movie-app/mobile/filmdex-mobile-screenshot-about.png";
import movieMobile2 from "../../../assets/movie-app/mobile/filmdex-mobile-screenshot-favourite.png";
import movieMobile3 from "../../../assets/movie-app/mobile/filmdex-mobile-screenshot-search.png";
import movieMobile4 from "../../../assets/movie-app/mobile/filmdex-mobile-screenshot-single.png";



//--------------------------------------------------------------
const SingleMovieAppProject = () => {

}

export default SingleMovieAppProject;

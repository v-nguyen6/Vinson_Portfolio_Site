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
// --- Project Images ---
// - Banner Images
import desktopBanner from "../../../assets/movie-app/banner/filmdex-desktop-banner.png";
import mobileBanner from "../../../assets/movie-app/banner/filmdex-mobile-banner.png";
// - Project Mockups
import movieMockup1 from "../../../assets/movie-app/mockups/movie-app-mockups-home.jpg";
import movieMockup2 from "../../../assets/movie-app/mockups/movie-app-mockups-single.jpg";
import movieMockup3 from "../../../assets/movie-app/mockups/movie-app-mockups-favourites.jpg";
import movieMockup4 from "../../../assets/movie-app/mockups/movie-app-mockups-about.jpg";
// - Live Site - Mobile Images
import movieMobile1 from "../../../assets/movie-app/mobile/filmdex-mobile-screenshot-search.png";
import movieMobile2 from "../../../assets/movie-app/mobile/filmdex-mobile-screenshot-single.png";
import movieMobile3 from "../../../assets/movie-app/mobile/filmdex-mobile-screenshot-favourite.png";
import movieMobile4 from "../../../assets/movie-app/mobile/filmdex-mobile-screenshot-about.png";
// - Live Site - Desktop Images
import movieDesktop1 from "../../../assets/movie-app/desktop/filmdex-desktop-screenshot-search.png";
import movieDesktop2 from "../../../assets/movie-app/desktop/filmdex-desktop-screenshot-single.png";
import movieDesktop3 from "../../../assets/movie-app/desktop/filmdex-desktop-screenshot-favourite.png";
import movieDesktop4 from "../../../assets/movie-app/desktop/filmdex-desktop-screenshot-about.png";
// --- Development Assets ---
// - Logo
import logo1 from "../../../assets/movie-app/logo/logo-1.png";
import logo2 from "../../../assets/movie-app/logo/logo-2.png";

//--------------------------------------------------------------
const SingleMovieAppProject = () => {
    useEffect (() => {
        window.scrollTo(0, 0);
    }, []);

    // Options and Customization for Lightbox
    const options = {
        settings: {
            overlayColor: "black",
            lightboxTransitionSpeed: 0.1,
        },

        caption: {
            captionColor: "#50B492",
            captionFontFamily: "Ubuntu, sans-serif",
            captionFontWeight: "400",
        },

        buttons: {
            size: "40px",
            backgroundColor: "#1b5245",
            iconColor: "#50B492",
            showAutoplayButton: false,
            showCloseButton: true, 
            showDownloadButton: false,
            showFullscreenButton: false, 
            showNextButton: true, 
            showPrevButton: true, 
            showThumbnailsButton: false, 
        },
    }

    // Initialize AOS Plugin
    AOS.init();

    return (
        <section className="single-project-component">
            {/* For SEO Meta Tags */}
            <Helmet>
                <title>Filmdex - Vinson Nguyen</title>
                <meta 
                    name="description"
                    content="A movie database app that allows users to search movies, gather information and add favourite movies. Developed using React to create a dynamic site that also utilizes the API from The Movie Database (TMDb)."
                />
            </Helmet>

            <SimpleReactLightbox>
                {/* Title & Tagline */}
                <SPTitle title={MY_PROJECTS[0].title} tagline={MY_PROJECTS[0].tagline} />

                {/* Overview */}
                <SPOverview 
                    scope={MY_PROJECTS[0].scope}
                    devTeam={MY_PROJECTS[0].developmentTeam}
                    role={MY_PROJECTS[0].role}
                    tools={MY_PROJECTS[0].tools}
                    githubLink={MY_PROJECTS[0].github}
                    livesiteLink={MY_PROJECTS[0].liveSite}
                    mobileBanner={mobileBanner}
                    desktopBanner={desktopBanner}
                    duration={"4 Weeks"}
                />

                {/* Design Summary */}
                <SPDesign text={MY_PROJECTS[0].design} />
                <SRLWrapper options={options}>
                    <div className="design-gallery">
                        <img 
                            src={movieMockup1}
                            alt="Home Page Mockup"
                            width="150"
                            loading="lazy"
                            data-aos="fade-up"
                            data-aos-easing="ease-out-quart"
                            data-aos-once="false"
                            data-aos-anchor-placement="center-bottom"
                        />
                        <img 
                            src={movieMockup2}
                            alt="Single Page Mockup"
                            width="150"
                            loading="lazy"
                            data-aos="fade-up"
                            data-aos-easing="ease-out-quart"
                            data-aos-once="false"
                            data-aos-anchor-placement="center-bottom"
                        />
                        <img 
                            src={movieMockup3}
                            alt="Favourite Page Mockup"
                            width="150"
                            loading="lazy"
                            data-aos="fade-up"
                            data-aos-easing="ease-out-quart"
                            data-aos-once="false"
                            data-aos-anchor-placement="center-bottom"
                        />
                        <img 
                            src={movieMockup4}
                            alt="About Page Mockup"
                            width="150"
                            loading="lazy"
                            data-aos="fade-up"
                            data-aos-easing="ease-out-quart"
                            data-aos-once="false"
                            data-aos-anchor-placement="center-bottom"
                        />
                    </div>

                    {/* Color Palette */}
                    <SPColorPalette 
                        col1={MY_PROJECTS[0].colors[0]}
                        col2={MY_PROJECTS[0].colors[1]}
                        col3={MY_PROJECTS[0].colors[2]}
                        col4={MY_PROJECTS[0].colors[3]}
                        col5={MY_PROJECTS[0].colors[4]}
                    />

                    {/* Typography */}
                    <SPTypography 
                        f1="Roboto, sans-serif"
                        f2=""
                        f3=""
                        fam1="Roboto, sans-serif"
                        fam2=""
                        fam3=""
                    />

                    {/* Logo */}
                    <div className="movieapp-logo">
                        <h3>Logo</h3>
                        <hr />
                        <div className="logo-items">
                            <img
                                src={logo1}
                                width="250"
                                loading="lazy"
                                data-aos="fade-right"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                            />
                            <img
                                src={logo2}
                                width="250"
                                loading="lazy"
                                data-aos="fade-left"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                            />
                        </div>
                    </div>

                    {/* Development Summary */}
                    <SPDevelopment text={MY_PROJECTS[0].development} />

                    {/* Code Snippet */}

                    {/* Project Images */}
                    <article
                        className="final-project-gallery--mobile"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <h2>Site Screenshots</h2>
                        <h3>Mobile</h3>
                        <hr />
                        <div className="mobile-gallery">
                            <img 
                                src={movieMobile1}
                                alt="Filmdex - Live Site - Search Page"
                                width="350"
                                loading="lazy"
                            />
                            <img 
                                src={movieMobile2}
                                alt="Filmdex - Live Site - Single Movie Page"
                                width="350"
                                loading="lazy"
                            />
                            <img 
                                src={movieMobile3}
                                alt="Filmdex - Live Site - Favourite Movies Page"
                                width="350"
                                loading="lazy"
                            />
                            <img 
                                src={movieMobile4}
                                alt="Filmdex - Live Site - About Page"
                                width="350"
                                loading="lazy"
                            />
                        </div>
                    </article>

                    <article 
                        className="final-project-gallery--desktop"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <h3>Desktop</h3>
                        <hr />
                        <div className="desktop-gallery">
                            <img 
                                src={movieDesktop1}
                                alt="Filmdex - Live Site - Search Page"
                                width="150"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                            <img 
                                src={movieDesktop2}
                                alt="Filmdex - Live Site - Single Movie Page"
                                width="150"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                            <img 
                                src={movieDesktop3}
                                alt="Filmdex - Live Site - Favourite Movies Page"
                                width="150"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                            <img 
                                src={movieDesktop4}
                                alt="Filmdex - Live Site - About Page"
                                width="150"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                        </div>
                    </article>

                    {/* Challenges */}
                    <SPChallenges challenge={MY_PROJECTS[0].challenge} />
                </SRLWrapper>

                {/* Call To Action Buttons */}
                <SPCallToAction 
                    home="/"
                    nextProject="/etoile-wordpress-capstone"
                    livesite={MY_PROJECTS[0].liveSite}
                    github={MY_PROJECTS[0].github}
                />
            </SimpleReactLightbox>
        </section>
    )
}

export default SingleMovieAppProject;

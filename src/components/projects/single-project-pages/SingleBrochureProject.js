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
    useEffect(() => {
        window.scrollTo(0,0);
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
            <Helmet>
                <title>Take It Cheesy - Vinson Nguyen</title>
                <meta 
                    name="description"
                    content="A fictional gourmet cheese brochure site created using JavaScript, CSS/Sass and HTML."
                />
            </Helmet>

            <SimpleReactLightbox>
                {/* Title & Tagline */}
                <SPTitle title={MY_PROJECTS[3].title} tagline={MY_PROJECTS[3].tagline} />

                {/* Overview */}
                <SPOverview 
                    scope={MY_PROJECTS[3].scope}
                    devTeam={MY_PROJECTS[3].developmentTeam}
                    role={MY_PROJECTS[3].role}
                    tools={MY_PROJECTS[3].tools}
                    githubLink={MY_PROJECTS[3].github}
                    livesiteLink={MY_PROJECTS[3].liveSite}
                    mobileBanner={mobileBanner}
                    desktopBanner={desktopBanner}
                    duration={"3 Weeks"}
                />

                {/* Design Summary */}
                <SPDesign text={MY_PROJECTS[3].design} />

                <SRLWrapper options={options}>
                <article className="single-project-component__process">
                    {/* Wireframes */}
                    <div className="process-item wireframes">
                        <h3 className="process-heading">Wireframes</h3>
                        <div className="wireframes__gallery">
                            <img
                                src={wireframe1}
                                alt="Take It Cheesy - Wireframes - Home Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframe2}
                                alt="Take It Cheesy - Wireframes - Process Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframe3}
                                alt="Take It Cheesy - Wireframes - Process Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                        </div>
                    </div>

                    {/* Content Section Divider */}
                    <div className="timeline-divider"></div>

                    {/* Color Palette */}
                    <SPColorPalette 
                        col1={MY_PROJECTS[3].colors[0]}
                        col2={MY_PROJECTS[3].colors[1]}
                        col3={MY_PROJECTS[3].colors[2]}
                        col4={MY_PROJECTS[3].colors[3]}
                        col5={MY_PROJECTS[3].colors[4]}
                    />

                    {/* Typography */}
                    <SPTypography 
                        f1="Josefin Sans, sans-serif"
                        f2="Open Sans, sans-serif"
                        f3="Merriweather, serif"
                        fam1="Josefin Sans, sans-serif"
                        fam2="Open Sans, sans-serif"
                        fam3="Merriweather, serif"
                    />

                    {/* Logo */}
                    <div className="brochure-logo">
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

                    {/* Content Section Divider */}
                    <div className="timeline-divider"></div>

                    {/* Development Summary */}
                    <SPDevelopment text={MY_PROJECTS[3].development} />

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
                                src={brochureMobile1}
                                alt="Take It Cheesy - Live Site - Home Page"
                                width="350"
                                loading="lazy"
                            />
                            <img 
                                src={brochureMobile2}
                                alt="Take It Cheesy - Live Site - About Page"
                                width="350"
                                loading="lazy"
                            />
                            <img 
                                src={brochureMobile3}
                                alt="Take It Cheesy - Live Site - Process Page"
                                width="350"
                                loading="lazy"
                            />
                            <img 
                                src={brochureMobile4}
                                alt="Take It Cheesy - Live Site - Contact Page"
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
                                src={brochureDesktop1}
                                alt="Take It Cheesy - Live Site - Home Page"
                                width="150"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                            <img 
                                src={brochureDesktop2}
                                alt="Take It Cheesy - Live Site - About Page"
                                width="150"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                            <img 
                                src={brochureDesktop3}
                                alt="Take It Cheesy - Live Site - Process Page"
                                width="150"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                            <img 
                                src={brochureDesktop4}
                                alt="Take It Cheesy - Live Site - Contact Page"
                                width="150"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                        </div>
                    </article>
                </article>

                {/* Challenges */}
                <SPChallenges challenge={MY_PROJECTS[3].challenge} />
                </SRLWrapper>

                {/* Call To Action Buttons */}
                <SPCallToAction 
                    home="/"
                    nextProject="/dino-dash-game"
                    livesite={MY_PROJECTS[3].liveSite}
                    github={MY_PROJECTS[3].github}
                />
            </SimpleReactLightbox>
        </section>
    )
}

export default SingleBrochureProject;

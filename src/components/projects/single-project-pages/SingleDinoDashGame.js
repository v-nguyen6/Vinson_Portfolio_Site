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
import SPNextTime from "../single-project-components/SPNextTime";

// Project Data
import { MY_PROJECTS } from "../../../globals/ProjectData";

// Assets
// --- Project Images ---
// - Banner Image
import desktopBanner from "../../../assets/dino-dash/banner/desktop-banner.png";
import mobileBanner from "../../../assets/dino-dash/banner/mobile-banner.png";
// - Gameplay - Desktop Images
import gameplay1 from "../../../assets/dino-dash/desktop/dino-dash-gameplay-dark-mode.png";
import gameplay2 from "../../../assets/dino-dash/desktop/dino-dash-gameplay-normal-mode.png";
import gameplay3 from "../../../assets/dino-dash/desktop/dino-dash-gameplay-party-mode.png";

//--------------------------------------------------------------
const SingleDinoDashGame = () => {
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
            captionColor: "blue",
        },

        buttons: {
            showAutoplayButton: false,
            showCloseButton: true, 
            showDownloadButton: false,
            showFullscreenButton: false, 
            showNextButton: true, 
            showPrevButton: true, 
            showThumbnailsButton: false, 
            size: "40px",
        },
    }

    // Initialize AOS Plugin
    AOS.init();

    return (
        <section className="single-project-component">
            {/* For SEO Meta Tags */}
            <Helmet>
                <title>Dino Dash - Vinson Nguyen</title>
                <meta 
                    name="description"
                    content="Dino Dash is a small web-based game built with Javascript."
                />
            </Helmet>

            <SimpleReactLightbox>
                {/* Title & Tagline */}
                <SPTitle title={MY_PROJECTS[4].title} tagline={MY_PROJECTS[4].tagline} />

                {/* Overview */}
                <SPOverview 
                    scope={MY_PROJECTS[4].scope}
                    devTeam={MY_PROJECTS[4].developmentTeam}
                    role={MY_PROJECTS[4].role}
                    tools={MY_PROJECTS[4].tools}
                    githubLink={MY_PROJECTS[4].github}
                    livesiteLink={MY_PROJECTS[4].liveSite}
                    mobileBanner={mobileBanner}
                    desktopBanner={desktopBanner}
                    duration={"3 Weeks"}
                />

                {/* Design Summary */}
                <SPDesign text={MY_PROJECTS[4].design} />
                <SRLWrapper options={options}>
                    <div className="dino-dash-container">
                        {/* Color Palette */}
                        <SPColorPalette 
                            col1={MY_PROJECTS[4].colors[0]}
                            col2={MY_PROJECTS[4].colors[1]}
                            col3={MY_PROJECTS[4].colors[2]}
                            col4={MY_PROJECTS[4].colors[3]}
                            col5={MY_PROJECTS[4].colors[4]}
                        />
                    </div>

                    {/* Typography */}
                    <SPTypography 
                        f1="VT323, sans-serif"
                        f2=""
                        f3=""
                        fam1="VT323, sans-serif"
                        fam2=""
                        fam3=""
                    />

                    <div className="dino-dash-container">
                        {/* Development Summary */}
                        <SPDevelopment text={MY_PROJECTS[4].development} />
                    </div>
                    

                    {/* Project Images */}
                    <article 
                        className="final-project-gallery--desktop"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <h3>Gameplay</h3>
                        <hr />
                        <div className="desktop-gallery">
                            <img 
                                src={gameplay1}
                                alt="Filmdex - Live Site - Search Page"
                                width="150"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                            <img 
                                src={gameplay2}
                                alt="Filmdex - Live Site - Single Movie Page"
                                width="150"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                            <img 
                                src={gameplay3}
                                alt="Filmdex - Live Site - Favourite Movies Page"
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
                    <SPChallenges challenge={MY_PROJECTS[4].challenge} />

                    <div className="dino-dash-container">
                        {/* Challenges */}
                        <SPNextTime nextTime={MY_PROJECTS[4].nextTime} />
                    </div>
                </SRLWrapper>

                {/* Call To Action Buttons */}
                <SPCallToAction 
                    home="/"
                    nextProject="/filmdex-react-moviedatabase"
                    livesite={MY_PROJECTS[4].liveSite}
                    github={MY_PROJECTS[4].github}
                />
            </SimpleReactLightbox>
        </section>
    )
}

export default SingleDinoDashGame;

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
import SPCallToAction from "../single-project-components/SPCallToAction";

// Project Data
import { MY_PROJECTS } from "../../../globals/ProjectData";

// Assets
// --- Project Images ---
// - Banner Images
import desktopBanner from "../../../assets/capstone/banner/etoile-desktop-banner.png";
import mobileBanner from "../../../assets/capstone/banner/etoile-mobile-banner.png";

// - Live Site - Desktop Images

// - Live Site - Mobile Images

// --- Development Assets ---
// - Inspiration Screenshots
import Inspo1 from "../../../assets/capstone/inspiration/etoile-inspo-1.jpg";
import Inspo2 from "../../../assets/capstone/inspiration/etoile-inspo-2.jpg";
import Inspo3 from "../../../assets/capstone/inspiration/etoile-inspo-3.jpg";
import Inspo4 from "../../../assets/capstone/inspiration/etoile-inspo-4.jpg";
// - Memo Of Understanding
import MOU0 from "../../../assets/capstone/memo-of-understanding/memo-of-understanding-0.jpg"
import MOU1 from "../../../assets/capstone/memo-of-understanding/memo-of-understanding-1.jpg"
import MOU2 from "../../../assets/capstone/memo-of-understanding/memo-of-understanding-2.jpg"
import MOU3 from "../../../assets/capstone/memo-of-understanding/memo-of-understanding-3.jpg"
import MOU4 from "../../../assets/capstone/memo-of-understanding/memo-of-understanding-4.jpg"
// - Content Plan
// - Sitemap
// - Wireframes
// - Mockups


//--------------------------------------------------------------
const SingleCapstoneProject = () => {
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
            <Helmet>
                <title>Etoile - Vinson Nguyen</title>
                <meta 
                    name="description"
                    content="Etoile is an ecommerce site that sells custom designed clothing that allows consumers to have the ability to upload their own design for production. The site was based upon and built using WordPress and Woocommerce."
                />
            </Helmet>

            <SimpleReactLightbox>
                {/* Title & Tagline */}
                <SPTitle title={MY_PROJECTS[1].title} tagline={MY_PROJECTS[1].tagline} />

                {/* Overview */}
                <SPOverview 
                    scope={MY_PROJECTS[1].scope}
                    devTeam={MY_PROJECTS[1].developmentTeam}
                    role={MY_PROJECTS[1].role}
                    tools={MY_PROJECTS[1].tools}
                    githubLink={MY_PROJECTS[1].github}
                    livesiteLink={MY_PROJECTS[1].liveSite}
                    mobileBanner={mobileBanner}
                    desktopBanner={desktopBanner}
                    duration={"6 Weeks"}
                />

                <SRLWrapper options={options}>
                    {/* Planning & Pre-Development */}
                    <article className="single-project-component__process">
                        <div className="project-item planning">
                            <h3>Planning</h3>
                            <hr />

                            <p>
                                Before any code development was produced, the team started off by looking at similar concept sites in order
                                to gain various inspirations. After deciding on a direction we wanted to take the site in terms of content, 
                                look, feel and functionality; we then discussed the specific design components and features that we wanted to
                                include in our site. The objective of the meeting was to get a clear view of what content and how we wanted the 
                                site to look and feel. We then created a document that outlined our Memo of Understanding which included a site-map
                                and content plan which would be the base and beginning structure of our overall site. 
                            </p>
                        </div>

                        {/* Inspiration Site Screenshots */}
                        <div className="process-item inspirations">
                            <h4>Inspiration</h4>
                            <hr />

                            <div className="inspirations__imgs">
                                <img
                                    src={Inspo1}
                                    alt="Etoile Inspiration Site - (& Other Stories)"
                                    width="150"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img
                                    src={Inspo2}
                                    alt="Etoile Inspiration Site - (Oak + Fort)"
                                    width="150"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img
                                    src={Inspo3}
                                    alt="Etoile Inspiration Site - (Coastal Reign)"
                                    width="150"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img
                                    src={Inspo4}
                                    alt="Etoile Inspiration Site - (Peace Collective)"
                                    width="150"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                            </div>
                        </div>

                        {/* Content Section Divider */}
                        <div className="divider"></div>

                        {/* Pre-Development */}
                        <h3 className="process-heading">Pre-Development</h3>

                        {/* Memo Of Understanding */}
                        <div className="process-item memo-of-understanding">
                            <h4>Memo of Understanding</h4>
                            <p className="excerpt">
                                The purpose of our initial meeting was to flesh out the site by first understanding the requirements of our 
                                fictional client. We wanted to understand who the client was, the primary goals, potential competition, products, 
                                services offered and the target demographic. During this process we researched about various clothing sites, and 
                                subsequently took inspiration from sites that we personally liked and even followed. We then drafted a Memo of Understanding
                                that summarized everything discussed in the meeting to be published in the form of a professional looking document. {" "}
                                <span>(Click the images below to get a better view of the document)</span>
                            </p>

                            <div className="memo-of-understanding__gallery">
                                <img
                                    src={MOU0}
                                    alt="Memo of Understanding Document - Page 0"
                                    width="250"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img
                                    src={MOU1}
                                    alt="Memo of Understanding Document - Page 1"
                                    width="250"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img
                                    src={MOU2}
                                    alt="Memo of Understanding Document - Page 2"
                                    width="250"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img
                                    src={MOU3}
                                    alt="Memo of Understanding Document - Page 3"
                                    width="250"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img
                                    src={MOU4}
                                    alt="Memo of Understanding Document - Page 4"
                                    width="250"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                            </div>

                            <p className="document-link-text">
                                A link to the full PDF of the document can be found here:
                            </p>
                            <a 
                                className="document-link-button" 
                                href="https://vinsonnguyen.com" 
                                title="Google Drive Link: Memo of Understanding" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Memo of Understanding
                            </a>
                        </div>

                    </article>

                </SRLWrapper>








            </SimpleReactLightbox>
        </section>
    )
 
}

export default SingleCapstoneProject;
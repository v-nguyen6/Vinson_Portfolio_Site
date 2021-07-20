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
// - Content Plan / Site Map 
import coverSheet from "../../../assets/portfolio/content-plan-site-map/portfolio-coversheet.jpg";
import contentPlan1 from "../../../assets/portfolio/content-plan-site-map/portfolio-contentplan.jpg";
import siteMap1 from "../../../assets/portfolio/content-plan-site-map/portfolio-sitemap.jpg";
// - Wireframes - Desktop
import wireframeDesktop1 from "../../../assets/portfolio/wireframes/portfolio-wireframe-desktop-home.jpg";
import wireframeDesktop2 from "../../../assets/portfolio/wireframes/portfolio-wireframe-desktop-about.jpg";
import wireframeDesktop3 from "../../../assets/portfolio/wireframes/portfolio-wireframe-desktop-single-project.jpg";

//--------------------------------------------------------------
const SinglePortfolioProject = () => {
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
                <title>React Portfolio - Vinson Nguyen</title>
                <meta 
                    name="description"
                    content="A react application that highlights and showcases my technical projects."
                />
            </Helmet>
            
            <SimpleReactLightbox>
                {/* Title & Tagline */}
                <SPTitle title={MY_PROJECTS[2].title} tagline={MY_PROJECTS[2].tagline} />

                {/* Overview */}
                <SPOverview 
                    scope={MY_PROJECTS[2].scope}
                    devTeam={MY_PROJECTS[2].developmentTeam}
                    role={MY_PROJECTS[2].role}
                    tools={MY_PROJECTS[2].tools}
                    githubLink={MY_PROJECTS[2].github}
                    livesiteLink={MY_PROJECTS[2].liveSite}
                    mobileBanner={mobileBanner}
                    desktopBanner={desktopBanner}
                    duration={"4 Weeks"}
                />

                {/* Content Section Divider */}
                <div className="timeline-divider"></div>

                <SRLWrapper options={options}>
                    {/* Pre-Development */}
                    <article className="single-project-component__process">
                        <h3 className="process-heading">Pre-Development</h3>

                        {/* Content Plan & Site Map */}
                        <div className="process-item content-plan-site-map">
                            <h4>Content Plan & Site Map</h4>
                            <p className="excerpt">
                                During the pre-development phase of the project after getting ideas and being 
                                inspired by other portfolio sites, I needed to start the project just how I 
                                normally would with any project, by planning out the basic structure and fleshing 
                                out content detail. This involved starting with a content plan which highlighted 
                                specifically what content I wanted to place into the site/project. After understanding 
                                the basics of what content I wanted to include; I was able to build out a site map. 
                                The site map helped me get a sense of the structure of the site, which pages I wanted to 
                                include individual content, and how users would traverse the site. {" "}
                                <span>(Click the images below to get a better view of the document)</span>
                            </p>

                            <div className="content-plan-site-map__gallery">
                                <img 
                                    src={coverSheet}
                                    alt="Content Plan Document"
                                    width="250"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img 
                                    src={contentPlan1}
                                    alt="Content Plan Document"
                                    width="250"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img 
                                    src={siteMap1}
                                    alt="Site Map Document"
                                    width="250"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                            </div>

                            <div className="document-external-link">
                                <p className="document-external-link__text">
                                    A link to the full PDF of the document can be found here:
                                </p>
                                <a 
                                    className="document-external-link__button"
                                    href="https://drive.google.com/file/d/1uQVIvdGBfCF73rCSvAJW4Ojh6dZlyaOB/view?usp=sharing"
                                    title="Google Drive Link: Content Plan & Site Map"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Content Plan & Site Map
                                </a>
                            </div>
                        </div>

                        <div className="portfolio-container">
                            {/* Design Summary */}
                            <SPDesign text={MY_PROJECTS[2].design} />
                        </div>

                        {/* Wireframes */}
                        <div className="process-item wireframes">
                            <h3 className="process-heading">Wireframes</h3>
                            <div className="wireframes__gallery">
                                <img
                                    src={wireframeDesktop1}
                                    alt="React Portfolio Wireframes - Desktop - Home Page"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    //data-aos-anchor-placement="center-bottom"
                                />
                                <img
                                    src={wireframeDesktop2}
                                    alt="React Portfolio Wireframes - Desktop - About Page"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    //data-aos-anchor-placement="center-bottom"
                                />
                                <img
                                    src={wireframeDesktop3}
                                    alt="React Portfolio Wireframes - Desktop - Single Project Page"
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
                            col1={MY_PROJECTS[2].colors[0]}
                            col2={MY_PROJECTS[2].colors[1]}
                            col3={MY_PROJECTS[2].colors[2]}
                            col4={MY_PROJECTS[2].colors[3]}
                            col5={MY_PROJECTS[2].colors[4]}
                        />

                        {/* Typography */}
                        <SPTypography 
                            f1="Montserrat, sans-serif"
                            f2="BioRhyme, serif"
                            f3="Calibri, sans-serif"
                            fam1="Montserrat, sans-serif"
                            fam2="BioRhyme, serif"
                            fam3="Calibri, sans-serif"
                        />

                        {/* Content Section Divider */}
                        <div className="timeline-divider"></div>

                        <div className="portfolio-container">
                            {/* Development Summary */}
                            <SPDevelopment text={MY_PROJECTS[2].development} />
                        </div>

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
                                    src={portfolioMobile1}
                                    alt="React Portfolio - Live Site - Home Page"
                                    width="350"
                                    loading="lazy"
                                />
                                <img 
                                    src={portfolioMobile2}
                                    alt="React Portfolio - Live Site - Works Page"
                                    width="350"
                                    loading="lazy"
                                />
                                <img 
                                    src={portfolioMobile3}
                                    alt="React Portfolio - Live Site - Single Project Page"
                                    width="350"
                                    loading="lazy"
                                />
                                <img 
                                    src={portfolioMobile4}
                                    alt="React Portfolio - Live Site - About Page"
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
                                    src={portfolioDesktop1}
                                    alt="React Portfolio - Live Site - Home Page"
                                    width="150"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img 
                                    src={portfolioDesktop2}
                                    alt="React Portfolio - Live Site - Works Page"
                                    width="150"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img 
                                    src={portfolioDesktop3}
                                    alt="React Portfolio - Live Site - Single Project Page"
                                    width="150"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img 
                                    src={portfolioDesktop4}
                                    alt="React Portfolio - Live Site - About Page"
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
                        <SPChallenges challenge={MY_PROJECTS[2].challenge} />
                    </article>
                </SRLWrapper>

                {/* Call To Action Buttons */}
                <SPCallToAction 
                    home="/"
                    nextProject="/take-it-cheesy-brochure"
                    livesite={MY_PROJECTS[2].liveSite}
                    github={MY_PROJECTS[2].github}
                />
            </SimpleReactLightbox>
        </section>
    )
}

export default SinglePortfolioProject;

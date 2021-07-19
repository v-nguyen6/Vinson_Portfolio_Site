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
// - Live Site - Mobile Images
import etoileMobile1 from "../../../assets/capstone/mobile/etoile-mobile-screenshot-about.png";
import etoileMobile2 from "../../../assets/capstone/mobile/etoile-mobile-screenshot-single-product.png";
import etoileMobile3 from "../../../assets/capstone/mobile/etoile-mobile-screenshot-products.png";
import etoileMobile4 from "../../../assets/capstone/mobile/etoile-mobile-screenshot-customer-service.png";
// - Live Site - Desktop Images
import etoileDesktop1 from "../../../assets/capstone/desktop/etoile-desktop-screenshot-home.png";
import etoileDesktop2 from "../../../assets/capstone/desktop/etoile-desktop-screenshot-single-product.png";
import etoileDesktop3 from "../../../assets/capstone/desktop/etoile-desktop-screenshot-products.png";
import etoileDesktop4 from "../../../assets/capstone/desktop/etoile-desktop-screenshot-about.png";
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
// - Content Plan & Sitemap
import contentPlan0 from "../../../assets/capstone/content-plan-site-map/content-plan-0.jpg";
import contentPlan1 from "../../../assets/capstone/content-plan-site-map/content-plan-1.jpg";
import siteMap1 from "../../../assets/capstone/content-plan-site-map/site-map-1.jpg";
// - Wireframes - Desktop
import wireframeDesktop1 from "../../../assets/capstone/wireframes/desktop/etoile-wireframes-desktop-homepage.jpg";
import wireframeDesktop2 from "../../../assets/capstone/wireframes/desktop/etoile-wireframes-desktop-productspage.jpg";
import wireframeDesktop3 from "../../../assets/capstone/wireframes/desktop/etoile-wireframes-desktop-singleproductpage.jpg";
import wireframeDesktop4 from "../../../assets/capstone/wireframes/desktop/etoile-wireframes-desktop-aboutpage.jpg";
import wireframeDesktop5 from "../../../assets/capstone/wireframes/desktop/etoile-wireframes-desktop-customerservice.jpg";
import wireframeDesktop6 from "../../../assets/capstone/wireframes/desktop/etoile-wireframes-desktop-contactpage.jpg";
// - Wireframes - Mobile
import wireframeMobile1 from "../../../assets/capstone/wireframes/mobile/etoile-wireframes-mobile-homepage.jpg";
import wireframeMobile2 from "../../../assets/capstone/wireframes/mobile/etoile-wireframes-mobile-productspage.jpg";
import wireframeMobile3 from "../../../assets/capstone/wireframes/mobile/etoile-wireframes-mobile-singleproductpage.jpg";
import wireframeMobile4 from "../../../assets/capstone/wireframes/mobile/etoile-wireframes-mobile-aboutpage.jpg";
import wireframeMobile5 from "../../../assets/capstone/wireframes/mobile/etoile-wireframes-mobile-customerservice.jpg";
import wireframeMobile6 from "../../../assets/capstone/wireframes/mobile/etoile-wireframes-mobile-contactpage.jpg";
// - Mockups
import mockup1 from "../../../assets/capstone/mockups/etoile-desktop-mockup.jpg";
// - Site Logos
import logo1 from "../../../assets/capstone/logos/logo-black.png";
import logo2 from "../../../assets/capstone/logos/logo-blue.png";

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
                        <div className="timeline-divider"></div>

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
                            <div className="document-external-link">
                                <p className="document-external-link__text">
                                    A link to the full PDF of the document can be found here:
                                </p>
                                <a 
                                    className="document-external-link__button" 
                                    href="https://vinsonnguyen.com" 
                                    title="Google Drive Link: Memo of Understanding" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Memo of Understanding
                                </a>
                            </div>
                        </div>

                        {/* Content Plan & Site Map */}
                        <div className="process-item content-plan-site-map">
                            <h4>Content Plan & Site Map</h4>
                            <p className="excerpt">
                                After agreeing on what direction we wanted to take the site as a team, in terms of styles and content, we began 
                                compiling all of the essential information into a concrete and structured Content Plan. This part of the stage was essential
                                in making sure that the overall structure of the site would be able to accomodate everything that was discussed and outlined
                                within the Memo of Understanding. Next, a detailed site map was created which visually showed the overall layout and markup that
                                would be used for the site. This part of the stage was important to highlight the heirarchy of the site while understanding how the user
                                would be able to move and traverse through the site. During this process, it was important for us to keep in mind the usability of the
                                site while making sure the user would be able to easily go back and forth between pages without feeling lost and or overwhelmed at a
                                specific page. {" "}
                                <span>(Click the images below to get a better view of the document)</span>
                            </p>

                            <div className="content-plan-site-map__gallery">
                                <img
                                    src={contentPlan0}
                                    alt="Content Plan Document - Cover Sheet"
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
                                    href="https://vinsonnguyen.com" 
                                    title="Google Drive Link: Content Plan & Site Map" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Content Plan & Site Map
                                </a>
                            </div>
                        </div>

                        {/* Content Section Divider */}
                        <div className="timeline-divider"></div>

                        {/* Design Summary */}
                        <SPDesign text={MY_PROJECTS[1].design} />

                        {/* Wireframes - Desktop */}
                        <div className="process-item wireframes-desktop">
                            <h3 className="process-heading">Wireframes - Desktop</h3>
                            <img
                                src={wireframeDesktop1}
                                alt="Etoile Wireframes - Desktop - Home Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframeDesktop2}
                                alt="Etoile Wireframes - Desktop - Products Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframeDesktop3}
                                alt="Etoile Wireframes - Desktop - Single Product Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframeDesktop4}
                                alt="Etoile Wireframes - Desktop - About Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframeDesktop5}
                                alt="Etoile Wireframes - Desktop - Customer Service Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframeDesktop6}
                                alt="Etoile Wireframes - Desktop - Contact Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                        </div>

                        {/* Wireframes - Mobile */}
                        <div className="process-item wireframes-mobile">
                            <h3 className="process-heading">Wireframes - Mobile</h3>
                            <img
                                src={wireframeMobile1}
                                alt="Etoile Wireframes - Mobile - Home Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframeMobile2}
                                alt="Etoile Wireframes - Mobile - Products Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframeMobile3}
                                alt="Etoile Wireframes - Mobile - Single Product Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframeMobile4}
                                alt="Etoile Wireframes - Mobile - About Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframeMobile5}
                                alt="Etoile Wireframes - Mobile - Customer Service Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                            <img
                                src={wireframeMobile6}
                                alt="Etoile Wireframes - Mobile - Contact Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                //data-aos-anchor-placement="center-bottom"
                            />
                        </div>

                        {/* High Fidelty Mockup */}
                        <div className="process-item mockup">
                            <h3 className="process-heading">High Fidelity Mockup</h3>
                            <img
                                src={mockup1}
                                alt="Etoile High Fidelity Mockup - Desktop - Home Page"
                                loading="lazy"
                                data-aos="fade-up"
                                data-aos-easing="ease-out-quart"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom"
                            />
                        </div>

                        {/* Content Section Divider */}
                        <div className="timeline-divider"></div>

                        {/* Color Palette */}
                        <SPColorPalette
                            col1={MY_PROJECTS[1].colors[0]}
                            col2={MY_PROJECTS[1].colors[1]}
                            col3={MY_PROJECTS[1].colors[2]}
                            col4={MY_PROJECTS[1].colors[3]}
                            col5={MY_PROJECTS[1].colors[4]}
                        />

                        {/* Typography */}
                        <SPTypography 
                            f1="Arial, sans-serif"
                            f2="Montserrat, sans-serif"
                            fam1="Montserrat, sans-serif"
                            fam2="Arial, sans-serif"
                        />

                        {/* Logo */}
                        <div className="etoile-logo">
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
                        <SPDevelopment text={MY_PROJECTS[1].development} />

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
                                    src={etoileMobile1}
                                    alt="Etoile - Live Site - About Page"
                                    width="350"
                                    loading="lazy"
                                />
                                <img 
                                    src={etoileMobile2}
                                    alt="Etoile - Live Site - Single Product Page"
                                    width="350"
                                    loading="lazy"
                                />
                                <img 
                                    src={etoileMobile3}
                                    alt="Etoile - Live Site - Product Collections Page"
                                    width="350"
                                    loading="lazy"
                                />
                                <img 
                                    src={etoileMobile4}
                                    alt="Etoile - Live Site - Customer Service Page"
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
                                    src={etoileDesktop1}
                                    alt="Etoile - Live Site - Home Page"
                                    width="150"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img 
                                    src={etoileDesktop2}
                                    alt="Etoile - Live Site - Single Product Page"
                                    width="150"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img 
                                    src={etoileDesktop3}
                                    alt="Etoile - Live Site - Product Collections Page"
                                    width="150"
                                    loading="lazy"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-quart"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                />
                                <img 
                                    src={etoileDesktop4}
                                    alt="Etoile - Live Site - About Page"
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
                </SRLWrapper>

                {/* Call To Action Buttons */}
                <SPCallToAction 
                    home="/"
                    nextProject="/react-portfolio"
                    livesite={MY_PROJECTS[1].liveSite}
                    github={MY_PROJECTS[1].github}
                />
            </SimpleReactLightbox>
        </section>
    )
 
}

export default SingleCapstoneProject;
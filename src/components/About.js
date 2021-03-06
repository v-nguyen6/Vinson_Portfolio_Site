/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { Helmet } from "react-helmet";

// Plugins & Assets
import AOS from "aos";
import AboutImage from "../assets/about/about-image.png";

//--------------------------------------------------------------
const About = () => {
    return (
        <article className="section about">
            <Helmet>
                <title>Vinson Nguyen - About Me</title>
                <meta 
                    name="description"
                    // Make sure to add for SEO purposes
                    content="A short summary of who I am and my goals as a UX/UI designer and Front-end web developer."
                />
            </Helmet>

            {/* About Section */}
            <section className="about-item my-summary">
                {/* Intro Summary */}
                <div className="my-summary__image">
                    <img 
                        src={AboutImage}
                        alt="About Page Portrait"
                        className="profile-image"
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-once="false"
                        data-aos-duration="750"
                    />
                </div>
                <div className="my-summary__text">
                    <h1
                        className="name"
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-once="false"
                        data-aos-duration="650"
                    >
                        Who am I
                    </h1>

                    <h2
                        className="headline"
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-once="false"
                        data-aos-duration="650"
                    >
                        Graphic Designer and Front-End Developer
                    </h2>

                    <hr 
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-once="false"
                        data-aos-duration="650"
                    />

                    <p
                        className="about-summary"
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-once="false"
                        data-aos-duration="750"
                        data-aos-mirror="true"
                        data-aos-delay="650"
                    >
                        My training and experience at BCIT???s Technical Web development program, an intensive program combining 
                        current web design technologies with challenging assignments, structured projects, and industry experiences, 
                        has allowed me to become a well-rounded and detailed oriented front-end programmer with fundamentals in HTML, 
                        CSS, and JavaScript. 
                    </p>
                    <p
                        className="about-summary"
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-once="false"
                        data-aos-duration="750"
                        data-aos-mirror="true"
                        data-aos-delay="650"
                    >
                        My experience with the Interactive Arts and Technology program at Simon Fraser University allowed me to grow and 
                        cultivate my background in UX/UI design as well as build a solid foundation in graphic design. This is due to the 
                        nature of SIAT as it is an interdisciplinary program that covers end-to-end topics in the design process which included 
                        courses within design methodologies, product design, user experience design, interface design, and designing/developing 
                        for the web.Both programs as well focussed specifically on the implementation of new technologies with emphasis on 
                        collaborative cross-disciplinary teamwork, allowing me to have more than enough experience being able to communicate 
                        and work in a collaborative setting.
                    </p>
                    <p
                        className="about-summary"
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-once="false"
                        data-aos-duration="750"
                        data-aos-mirror="true"
                        data-aos-delay="650"
                    >
                        As a front-end developer, I strive towards always being inspried to learn about new and upcoming technologies by developing my ideas
                        with like-minded individuals to create meaningful web applications and sites.
                    </p>

                    <a
                        className="about-resume-link"
                        href="https://drive.google.com/file/d/1URtpgKKxnL4kkg03Mem31d8fa4sy-D6r/view?usp=sharing"
                        title="Google Drive Link: Vinson's Web Dev Resume"
                        target="_blank"
                        rel="noreferrer"
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-once="false"
                        data-aos-duration="650"
                    >
                        Download Resume
                    </a>
                </div>
            </section>

            {/* Skills */}
            <section className="about-item artillery">
                {/* Development Stack */}
                <div 
                    className="col-development-stack"
                    data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-once="false"
                    data-aos-duration="450"
                    data-aos-mirror="true"
                >
                    <h3>Development Stack</h3>
                    <hr />
                    <ul className="development-stack" title="Scroll Me">
                        <li className="development-stack__item">HTML5</li>
                        <li className="development-stack__item">CSS3</li>
                        <li className="development-stack__item">Sass</li>
                        <li className="development-stack__item">Javascript</li>
                        <li className="development-stack__item">React.JS</li>
                        <li className="development-stack__item">jQuery</li>
                        <li className="development-stack__item">PHP</li>
                        <li className="development-stack__item">MySQL</li>
                        <li className="development-stack__item">Wordpress</li>
                        <li className="development-stack__item">WooCommerce</li>
                    </ul>
                </div>

                {/* Design Stack */}
                <div 
                    className="col-design-stack"
                    data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-once="false"
                    data-aos-duration="450"
                    data-aos-mirror="true"
                >
                    <h3>Design Stack</h3>
                    <hr />
                    <ul className="design-stack" title="Scroll Me">
                        <li className="design-stack__item">InDesign</li>
                        <li className="design-stack__item">Illustrator</li>
                        <li className="design-stack__item">Photoshop</li>
                        <li className="design-stack__item">AdobeXD</li>
                        <li className="design-stack__item">Figma</li>
                        <li className="design-stack__item">InVision</li>
                    </ul>
                </div>

                {/* Technical Skills */}
                <div 
                    className="col-technical-skills"
                    data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-once="false"
                    data-aos-duration="450"
                    data-aos-mirror="true"
                >
                    <h3>Technical Skills</h3>
                    <hr />
                    <ul className="technical-skills">
                        <li className="technical-skills__item">Fully responsive web design (mobile first)</li>
                        <li className="technical-skills__item">Wireframing and high-fidelity prototyping</li>
                        <li className="technical-skills__item">Search Engine Optimization (SEO) and Analytics</li>
                        <li className="technical-skills__item">Single page web applications</li>
                        <li className="technical-skills__item">Front-end frameworks</li>
                        <li className="technical-skills__item">CMS Development(Wordpress)</li>
                        <li className="technical-skills__item">UX/UI Design</li>
                        <li className="technical-skills__item">Graphic Design</li>
                    </ul>
                </div>
            </section>
        </article>
    );
}

export default About;
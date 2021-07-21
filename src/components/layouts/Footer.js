/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

// Custom React Components
// - Scroll To Top Button
import ScrollToTop from "../widgets/ScrollToTop";
// - Custom React Icons (Custom Icon Library)
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

//--------------------------------------------------------------
const Footer = () => {

    return (
        <footer className="footer" id="contact">
            {/* Top Section */}
            <ScrollToTop />
            <div className="footer__top-section">

                <h3 
                   data-aos="fade-right"
                   data-aos-easing="ease-out-quart"
                   data-aos-delay="300"
                   data-aos-once="false"
                   data-aos-duration="800"
                   data-aos-mirror="true"
                >
                    Want to Chat? 
                </h3>

                {/* Email Link */}
                <a
                    href="mailto:vinsonn@vinsonnguyen.com?subject=Hello Vinson!"
                    rel="noopener noreferrer"
                    className="button"
                >
                    Contact Me Here
                </a>
            </div>
            
            {/* Bottom Section */}
            <div className="footer__bottom-section">
                <h4>Connect With Me!</h4>
                <div className="footer-social-icons">
                    <IconContext.Provider value={{ color: "white", size: "1.25em" }}>
                        <a
                            href="https://twitter.com/vinsondesigns"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="twitter-link"
                       >
                           <FaTwitter title="Footer Twitter Icon" />
                       </a>

                       <a
                            href="https://www.linkedin.com/in/vinson-nguyen/"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="linkedin-link"
                       >
                           <FaLinkedinIn title="Footer LinkedIn Icon" />
                       </a>

                       <a
                            href="https://github.com/v-nguyen6"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="github-link"
                       >
                           <FaGithub title="Footer Github Icon" />
                       </a>
                    </IconContext.Provider>
                </div>
                <p className="copyright">&copy; Vinson Nguyen | Vancouver | 2021</p>
            </div>
        </footer>
    )
}

export default Footer;
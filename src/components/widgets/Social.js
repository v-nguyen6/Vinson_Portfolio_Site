/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

// Custom React Components
// - Custom React Icons (Custom Icon Library)
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

//--------------------------------------------------------------
const Social = () => {
    // This hides the social icons when reaching the bottom of the window
    window.onscroll = function (e) {
        const socialIcons = document.querySelector("aside.fixed-social-icons");
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (!socialIcons.classList.contains("fixed-social-icons--off")) {
                socialIcons.classList.add("fixed-social-icons--off");
            }
        } else {
            if (socialIcons.classList.contains("fixed-social-icons--off")) {
                socialIcons.classList.remove("fixed-social-icons--off");
            }
        }
    };

    return (
        <aside
            className="fixed-social-icons"
            data-aos="fade-left"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
            data-aos-delay="500"
        >
            <IconContext.Provider value={{ color: "white", size: "1.35em" }}>
                <a
                    href="https://twitter.com/vinsondesigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="twitter-link"
                >
                    <FaTwitter title="Twitter Icon" />
                </a>

                <a
                    href="https://www.linkedin.com/in/vinson-nguyen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="linkedin-link"
                >
                    <FaLinkedinIn title="LinkedIn Icon" />
                </a>

                <a
                    href="https://github.com/v-nguyen6"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="github-link"
                >
                    <FaGithub title="Github Icon" />
                </a>

                <a
                    href="mailto:vinsonn@vinsonnguyen.com?subject=Hello Vinson!"
                    target="_blank"
                    id="e-mail-link"
                    rel="noopener noreferrer"
                >
                    <FaEnvelope title="E-mail Icon" />
                </a>
            </IconContext.Provider>
        </aside>
    );
}

export default Social;
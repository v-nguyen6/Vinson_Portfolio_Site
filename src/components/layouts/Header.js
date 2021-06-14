/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Custom React Components 
// - Headroom: Hide/Show header while scrolling 
import Headroom from "react-headroom"; 
// - Hamburger Menu (controls the creation and animation of hamburger menu)
import { Twirl as Hamburger } from "hamburger-react";
// - Custom React Icons (Custom Icon Library)
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

//--------------------------------------------------------------
const Header = () => {
    // Create states for when header is open/closed (currently set to false)
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        const navigation = document.querySelector("nav.main-nav");
        const socialIcons = document.querySelector("aside.social-icons");

        if(!isOpen) {
            navigation.classList.add("main-nav--active");
            socialIcons.style.display = "none";
            //window.scrollBy(0, 40);
        } else {
            navigation.classList.remove("main-nav--active");
            socialIcons.style.display = "flex";
        }
    }

    // Create media query for navigation/hamburger menu 
    const hideNav = () => {
        const navigation = document.querySelector("nav.main-nav");
        // Hides nav --> shows hamburger menu
        if (window.innerWidth <= 750) {
            if (navigation.classList.contains("main-nav--active")) {
                navigation.classList.remove("main-nav--active");
                setIsOpen(false);
            }
        }
    }

    return (
        <header>
            <Headroom>
                <Link to={"/"}>
                    <h1 className="nav-logo">
                        <span>Vinson</span> Nguyen
                    </h1>
                </Link>

                {/* Hamburger Menu Button */}
                <div className="hamburger-button"
                     onClick={() => {
                     toggleNav();
                    }}
                >
                    <Hamburger toggled={isOpen} toggle={setIsOpen} size="25" />    
                </div>

                {/* Main Navigation */}
                <nav className="main-nav"
                     style={{display: "none"}}
                     onClick={() => {
                        hideNav();
                        //window.scrollBy(0, -50);
                     }}
                >
                    <ul className="main-nav__ul">
                        <li className="main-nav__list-item">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="main-nav__list-item">
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li className="main-nav__list-item">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                    {/* Hamburger Menu Break */}
                    <hr className="menu-break" />

                    {/* Custom Social Icons */}
                    <div className="menu-social-icons">
                        {/* Determines size and color of imported icons */}
                        <IconContext.Provider value={{color: "blue", size: "1.45em" }}>
                            <a href="https://twitter.com/vinsondesigns"
                               target="_blank"
                               rel="noopener noreferrer"
                               id="twitter-link"
                            >
                                <FaTwitter title="Twitter Social Media Icon" />
                            </a>

                            <a href="www.linkedin.com/in/vinson-nguyen"
                               target="_blank"
                               rel="noopener noreferrer"
                               id="linkedin-link"
                            >
                                <FaLinkedinIn title="LinkedIn Social Media Icon" />
                            </a>

                            <a href="https://github.com/v-nguyen6"
                               target="_blank"
                               rel="noopener noreferrer"
                               id="github-link"
                            >
                                <FaGithub title="Github Social Media Icon" />
                            </a>
                        </IconContext.Provider>
                    </div>
                </nav>
            </Headroom>
        </header>
    );
}

export default Header;
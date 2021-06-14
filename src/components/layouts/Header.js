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
import { FaTwitter, FaGithub, FaLinkedIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

//--------------------------------------------------------------
const Header = () => {
    // Create states for when header is open/closed (currently set to false)
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        const navigation = document.querySelector("nav.main-nav")

    }

 
}

export default Header;
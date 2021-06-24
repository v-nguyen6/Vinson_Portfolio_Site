/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

// Components & Project Summaries
import Splash from "./Splash";
import WorkSummary from "./projects/WorkSummary";
import BrochureProject from "./projects/project-summary/BrochureProject";
import CapstoneProject from "./projects/project-summary/CapstoneProject";
import MovieAppProject from "./projects/project-summary/MovieAppProject";
import NewPortfolioProject from "./projects/project-summary/NewPortfolioProject";
import PortfolioProject from "./projects/project-summary/PortfolioProject";


//--------------------------------------------------------------
const Home = () => {
    
    // For allowing user to scroll to top when clicking on arrow / nav functions
    useEffect(() => {window.scrollTo(0,0); }, []);

    return (
        <React.Fragment>
            {/* React Helmet (Used for SEO purposes) */}
            <Helmet>
                <title>Vinson Nguyen - Portfolio</title>
                <meta 
                    name="description"
                    content="Portfolio website outlining the work and projects that I have completed as a Web Developer."
                />
            </Helmet>
            <Splash />
            <WorkSummary />
            {/* Line to create a break in the page from WorkSummary --> Project Summaries */}
            <div
                className="home-page-line-break"
                data-aos="fade-down"
                data-aos-easing="ease-in-quad"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
            >
            </div>
            <MovieAppProject />
            <CapstoneProject />
            <NewPortfolioProject />
            <PortfolioProject />
            <BrochureProject />
        </React.Fragment>
    );
    
}

export default Home;

/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Google Analytics
import ReactGA from "react-ga"; 

// Layouts
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

// Pages
import About from "./components/About";
import Home from "./components/Home";

// Single Project Pages
import SingleBrochureProject from "./components/projects/single-project-pages/SingleBrochureProject";
import SingleCapstoneProject from "./components/projects/single-project-pages/SingleCapstoneProject";
import SingleMovieAppProject from "./components/projects/single-project-pages/SingleMovieAppProject";
import SingleDinoDashGame from "./components/projects/single-project-pages/SingleDinoDashGame";
import SinglePortfolioProject from "./components/projects/single-project-pages/SinglePortfolioProject";

// Widgets
import Social from "../src/components/widgets/Social";
// - Animate On Scroll: Animates objects when user scrolls 
import AOS from "aos";
import "aos/dist/aos.css";


//--------------------------------------------------------------
function App() {
  // used to initialize AOS throughout the react app (must call only once!)
  AOS.init();

  const [isDesktop, setIsDesktop] = useState(true);

  // Google Analytics

  
  // Custom Cursor Effect
  useEffect(() => {
    // Determine is user is on desktop or mobile
    toggleCursor();
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        // Where animation radius is placed
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });
    // Event listener for when user clicks button 
    document.addEventListener("click", () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    });
  }, []);

  const toggleCursor = () => {
    if (window.innerWidth >= 800) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  return (
    <Router>
      <React.Fragment>
        <Header />
        {/* Custom Cursor */}
        {isDesktop === true && <div className="cursor"></div>}

        <div className="wrapper">
          <main className="main main-page">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/filmdex-react-moviedatabase" component={SingleMovieAppProject} />
              <Route path="/etoile-wordpress-capstone" component={SingleCapstoneProject} />
              <Route path="/react-portfolio" component={SinglePortfolioProject} />
              <Route path="/take-it-cheesy-brochure" component={SingleBrochureProject} />
              <Route path="/dino-dash-game" component={SingleDinoDashGame} />
              <Route path="*" component={Home} />
            </Switch>
          </main>
        </div>
        <Social />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;

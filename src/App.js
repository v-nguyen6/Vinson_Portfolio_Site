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
import SingleNewPortfolioProject from "./components/projects/single-project-pages/SingleNewPortfolioProject";
import SinglePortfolioProject from "./components/projects/single-project-pages/SinglePortfolioProject";

// Widgets
//import Social from './components/

//--------------------------------------------------------------
function App() {
  const [currDesktop, setCurrDesktop] = useState(true);

  // Google Analytics

  /*
  // Custom Cursor Effect
  useEffect(() => {
    // Determine is user is on desktop or mobile
    toggleCursor();
    const cursor = document.querySelector(".cursor")

  });

  */

  return (
    <Router>
      <React.Fragment>
        <Header />
        <div classname="wrapper">
          <main classname="main-page">
            <Switch>
              <Route path="/" exact component={Home} />
              {/*
              <Route path="/about" component={About} />
              <Route path="/filmdex-react-project" component={SingleMovieAppProject} />
              <Route path="/etoile-wordpress-project" component={SingleCapstoneProject} />
              <Route path="/portfolio-project-revised" component={SingleNewPortfolioProject} />
              <Route path="/portfolio-project" component={SinglePortfolioProject} />
              <Route path="/keep-it-cheesy-brochure-project" component={SingleBrochureProject} />
              <Route path="*" component={Home} />
              */}
            </Switch>
          </main>
        </div>
        {/*
        <Footer />
        */}
      </React.Fragment>
    </Router>
  );
}

export default App;

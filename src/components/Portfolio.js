import React, {Component} from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import WorkHistory from './WorkHistory';
import Contact from './Contact';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Portfolio extends Component {
  render () {
    return (
      <div className="container">
        <div className="navBar">

            <AnchorLink style={{ color: 'white', textDecoration: 'none' }} className="anchorLinks" href='#about'>AboutMe</AnchorLink>
            <AnchorLink style={{ color: 'white', textDecoration: 'none' }} className="anchorLinks" href='#skills'>Skills</AnchorLink>
            <AnchorLink style={{ color: 'white', textDecoration: 'none' }} className="anchorLinks" href='#projects'>Projects</AnchorLink>
            <AnchorLink style={{ color: 'white', textDecoration: 'none' }} className="anchorLinks" href='#work'>Work Experience</AnchorLink>
            <AnchorLink style={{ color: 'white', textDecoration: 'none' }} className="anchorLinks" href='#contact'>Contact</AnchorLink>

        </div>


        <div className="sections">
          <section id='about'>
            <AboutMe />
            <br/>
          </section>
          <section id='projects'>
            <Projects />
            <br/>
          </section>
          <section id='skills'>
            <Skills />
          </section>
          <section id='work'>
            <WorkHistory />
          </section>
          <section id='contact'>
            <Contact />
          </section>
        </div>
        <div>
          <footer>
            &copy; Copyright 2021.

          </footer>
        </div>
      </div>
    );
  }
}

export default Portfolio;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../css/home.css"


class Home extends Component {
  render () {
    return (
      <div className="container" >
        <div className="homePage-header">
          <h1>Bernardo Martin</h1>
        </div>
        <div className="homePage" style={{backgroundImage: "url(../images/scrolling6.jpg)"}}>
            <h2>Software Engineer</h2>
            <h3>Full-Stack Developer</h3>
            <Link to="/portfolio">
              <button className="btn-lime" id="home-btn">Check my Portfolio</button>
            </Link>
        </div>
      </div>
    )
  }
};

export default Home;

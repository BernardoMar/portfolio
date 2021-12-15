import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../css/home.css"


class Home extends Component {
  render () {
    return (
      <div className="container homePage" style={{backgroundImage: "url(../images/20945651.jpg)"}}>
        <div className="headers">
          <h1>Bernardo Martin</h1>
          <div className="homePage_header">
            <h2>Junior Software Engineer</h2>
            <h3>Full-Stack Developer</h3>
            <Link to="/portfolio">
              <button className="btn-red">Check my Portfolio</button>
            </Link>
          </div>
        </div>


      </div>
    )
  }
};

export default Home;

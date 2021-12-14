import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Home extends Component {
  render () {
    return (
      <div className="container">
          <h1>Bernardo Martin</h1>
          <h2>Junior Software Engineer</h2>
          <h3>Full-Stack Developer</h3>
          <Link to="/portfolio">
            <button>Check my Portfolio</button>
          </Link>

      </div>
    )
  }
};

export default Home;

import React, {Component} from 'react';
import "../css/work.css";

class WorkHistory extends Component {
  render () {
    return (
      <div>
        <div className="header-experience" style={{backgroundImage: "url(../images/scrolling4.jpg)"}}>
          <h2>Work Experience</h2>
        </div>
        <div className="secContainer">
          <div className="workCards">
              <div className="possition">
                <h2>Property Manager</h2>
              </div>
              <div>
                <a className="company" href="https://www.indigorealestate.com.au/" target="_blank" rel="noreferrer">
                  Indigo Real Estate · Full-time
                </a>
              </div>
              <div className="timeWork">
                Mar 2021 - Jul 2021
              </div>
              <div className="experienceDescription">
                As a property manager at Indigo Real Estate, I would assist over 300 renters and rental providers with their daily matters regarding their lease. I would also coordinate and plan properties inspections for either rentals or sales. My job also included preparing all the documentation necessary for any real estate transaction.
              </div>
            </div>
            <hr/>
            <div className="workCards">
              <div className="possition">
                  <h2 id="possition"> Solicitor </h2>
              </div>
              <div className="company">
                <a className="company" href="https://www.ceroliniferrari.com.ar/home-eng/" target="_blank" rel="noreferrer">
                  Cerolini & Ferrari · Full-time
                </a>
              </div>
              <div className="timeWork">
                Oct 2017 - May 2019
              </div>
              <div className="experienceDescription">
                As a Solicitor in Cerolini & Ferrari Abogados, I would provide assistance and legal services to Banks and other financial companies mostly regarding regulatory matters, consumers rights and legal procedures at Court. In this position I learn to work in a fast-paced corporate environment, team work and team leadership.
              </div>
            </div>
            <hr/>
            <div className="workCards">
              <div className="possition">
                  <h2 id="possition"> Administrative Assistant </h2>
              </div>
              <div>
                <a className="company" href="http://www.refrigeracionnorte.com.ar/" target="_blank" rel="noreferrer">
                  Refrigeracion Nort S.R.L. · Full-time
                </a>
              </div>
              <div className="timeWork">
                Apr 2015 - Mar 2017
              </div>
              <div className="experienceDescription">
                Refrigeration Norte is the biggest industrial refrigeration retail company in the NorthEast of Argentina with more than 7 branches spread around the region. In this company I worked as an Administrative Assistant. Working in Refrigeracion Norte was an incredible experience as it was my first job in a big company which provided me with unique team work and eye for detail skills.
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkHistory;

import React, {Component} from 'react';
import "../css/about.css"

class AboutMe extends Component {
  render () {
    return (
      <div>
        <div className="headers" style={{backgroundImage: "url(../images/7121.jpg)"}}>
          <h2>About Bernie</h2>
        </div>
        <div className="secContainer">
          <div className="aboutMe">
            <p> I have 5+ years of experience working for top tier corporate law firms as a solicitor. However, soon after I got my hands dirty coding and developing I have happily decided to make a career change into the IT world. I have become obsessed with the capability to create and design behind the different coding languages and the excitement of problem solving and debugging.</p>
            <p> I have developed significant expertise and skills working with technologies such as HTML, CSS, JavaScript and Ruby, and I keep pushing myself by undertaking new challenges and some of the most updated development courses. On top of that, I carry with me my previous experience as a lawyer which includes team leadership, excellent time management, problem solving and fast-paced team work. </p>
            <p> At this stage, I am looking forward to meeting and to start working as a full stack developer for a great team of passionate developers who strive for challenging projects and that can provide professional progress. If you would like to hear more from me, please get in touch! </p>
          </div>
          <div class="contactList">

            <ul>
              <li>
                <a href="https://twitter.com/go_berniego">
                  <img src="../images/mail.svg" alt="mail"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bernardo--martin/">
                  <img src="../images/linkedin.svg" alt="linkedIn"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/BernardoMar?tab=repositories">
                  <img src="../images/github.svg" alt="github"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;

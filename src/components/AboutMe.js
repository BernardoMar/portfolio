import React, {Component} from 'react';
import "../css/about.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

class AboutMe extends Component {
  render () {
    return (
      <div>
        <div className="headers" style={{backgroundImage: "url(../images/7121.jpg)"}}>
          <h2>About Me</h2>
        </div>
        <div className="secContainer">
          <div className="aboutMe">

              <img className="screenShot" src="../images/screenShot.PNG" alt="screenShot"/>

            <p>
              I have 5+ years of experience working for top tier corporate law firms as a solicitor. However, soon after I got my hands dirty coding and developing, I have happily decided to make a career change into the IT world. I have become obsessed with the capability to create and design behind the different coding languages and the excitement of problem solving and debugging.
            </p>
            <p>
              I have gained fantastic experience and confidence around both front-end and back-end coding languages following test driven development principles. As a Full Stack Developer, I am passionate about creating good quality and clean code for applications that are practical and efficient for users according to their needs, backgrounds, and skills. On top of that, I carry with me my previous experience as a lawyer which includes team leadership, excellent time management, problem solving and fast-paced teamwork.
             </p>
             <p>
               My main skills include HTML, CSS, front-end frameworks such as React and Vu, NodeJs, MongoDB, GraphQL, Ruby on Rails and coding languages such as JavaScript and Ruby.
             </p>
            <p>
              I am currently looking forward to getting my developer career launched, working as part of a great team of passionate developers who strive for challenging projects and that can provide professional progress. If you want to know more about me, please get in <AnchorLink  href='#contact'>touch!</AnchorLink>.
            </p>

            <p>By the way, you can call me Bernie!</p>
          </div>
          <div class="contactList">

            <ul>
              <li>
                <a href="https://twitter.com/go_berniego" target="_blank" rel="noreferrer">
                  <img src="../images/mail.svg" alt="mail"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bernardo--martin/" target="_blank" rel="noreferrer">
                  <img src="../images/linkedin.svg" alt="linkedIn"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/BernardoMar?tab=repositories" target="_blank" rel="noreferrer">
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

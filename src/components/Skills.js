import React, {Component} from 'react';
import "../css/skills.css"

class Skills extends Component {
  render () {
    return (
      <div>
        <div className="headers" style={{backgroundImage: "url(../images/scrolling3.jpg)"}}>
          <h2>Skills</h2>
        </div>
        <div className="textSkills">
          <h3>Front end</h3>
          <p>React JS, Vue JS, JavaScript, jQuery, HTML 5, CSS, Bootstrap</p>

          <h3>Back end</h3>
          <p>Ruby on Rails, Node JS, API integration</p>

          <h3>Database</h3>
          <p>MongoDB, Firebase, PostgreSQL, SQLite</p>

          <h3>Deployments</h3>
          <p>GitHub, Heroku, Netlify</p>
          <hr/>
        </div>


        <div className="allSkills">

          <img src="../images/skills/bootstrap.svg" alt="bootstrap" className="skill"/>
          <img src="../images/skills/css.png" alt="css" className="skill"/>
          <img src="../images/skills/download.png" alt="HTML" className="skill"/>
          <img src="../images/skills/firebase.png" alt="Firebase" className="skill"/>
          <img src="../images/skills/github.png" alt="github" className="skill"/>
          <img src="../images/skills/heroku.svg" alt="heroku" className="skill"/>
          <img src="../images/skills/jquery.png" alt="jquery" className="skill"/>
          <img src="../images/skills/js.png" alt="js" className="skill"/>
          <img src="../images/skills/mongo.png" alt="mongo" className="skill"/>
          <img src="../images/skills/netlify.png" alt="netlify" className="skill"/>
          <img src="../images/skills/nodejs.png" alt="nodejs" className="skill"/>
          <img src="../images/skills/post.png" alt="post" className="skill"/>
          <img src="../images/skills/rails.png" alt="rails" className="skill"/>
          <img src="../images/skills/react.png" alt="react" className="skill"/>
          <img src="../images/skills/ruby.png" alt="ruby" className="skill"/>
          <img src="../images/skills/slack.png" alt="slack" className="skill"/>
          <img src="../images/skills/vue.png" alt="vue" className="skill"/>

        </div>
      </div>
    );
  }
}

export default Skills;

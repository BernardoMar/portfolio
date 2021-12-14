import React, {Component} from 'react';
import "../css/contact.css";



class Contact extends Component {
  render () {
    return (
      <div>
        <div className="headers" style={{backgroundImage: "url(../images/scrolling5.jpg)"}}>
          <h2>Contact</h2>
        </div>

        <form>
          <h3>Leave me a message and I'll get in touch with you asap</h3>
          <div className="inputContact">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Company"/>
            <input type="text" placeholder="Email"/>
          </div>
            <textarea></textarea>
            <button className="btn-lime">
              <img src="../images/send.svg" alt="send"/>
            </button>
        </form>


      </div>
    );
  }
}

export default Contact;

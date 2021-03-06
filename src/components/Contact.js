import React, {Component} from 'react';
import "../css/contact.css";
import{ init } from 'emailjs-com';
init("user_Qms8mJzgieEjBHnaO2CsX");



class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      company: '',
      email: '',
      message: ''
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    const key = event.target.name
    this.setState({[key]:event.target.value});
  };

  _handleSubmit(event) {
    event.preventDefault();
    const templateId = 'template_a85nykb';
    this.sendFeedback(templateId, {message: this.state.message, name: this.state.name, email: this.state.email, company: this.state.company})
  };

  sendFeedback (templateId, variables) {
    window.emailjs.send(
      "service_oe160ny", templateId,
      variables
      ).then(res => {
          alert('Email successfully sent!')
          this.setState({
            name:'',
            company:'',
            email:'',
            message:''})
        })

      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    };


  render () {
    return (
      <div>
        <div className="headers" style={{backgroundImage: "url(../images/scrolling5.jpg)"}}>
          <h2>Contact</h2>
        </div>

        <form onSubmit={this._handleSubmit}>
          <h3>Leave me a message and I'll get in touch with you </h3>
          <div className="inputContact">
            <input type="text" name="name" onChange={this._handleChange}  placeholder="Name" value={this.state.name} required/>
            <input type="text" name="company" onChange={this._handleChange} placeholder="Company" value={this.state.company}/>
            <input type="text" name="email" onChange={this._handleChange} placeholder="Email" value={this.state.email} required/>
          </div>
            <textarea id="test-mailing" name="message" onChange={this._handleChange} value={this.state.message} required></textarea>

            <button className="btn-lime">
              Submit
            </button>
            <div class="contactList">
              <h3>Also, you can find me here: </h3>
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
        </form>



      </div>
    );
  }
}

export default Contact;

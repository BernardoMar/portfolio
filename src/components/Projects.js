import React, {Component} from 'react';
import "../css/projects.css"

class Projects extends Component {
  render () {
    return (
      <div>
        <div className="headers" style={{backgroundImage: "url(../images/scrolling2.jpg)"}}>
          <h2>Projects</h2>
        </div>

        <div className="projectsWrapper">

          <a href="https://github.com/BernardoMar/dutytracker" target="_blank" rel="noreferrer">
            <div className="MohakaWrap">

              <img className="projectsImg" src='../images/mohaka.png' alt="Mohaka"/>
              <div className="foodieDescription">
                <a className="projectsLinks" href="https://lucid-northcutt-0ff37e.netlify.app/#/" target="_blank" rel="noreferrer">
                  <button className="btn-blue btn-projects">Mohaka</button>
                </a>
                <div className="text-wrapper">
                  <p>
                    Mohaka is a React web application that allows users to create an account in order to load their tasks and arrange them according to different categories and urgencies. The app allows users to create, edit, mark those task that have been done, and to delete their tasks.
                    </p>
                    <p>The app also features a dashboard where users can see their tasks listed according to their urgency and users can drag them within their column to sort them. The tasks are safely store in a Firestore database allowing users to log out and find all their tasks back when they log in.
                  </p>
                  <div className="technologies">
                  <h4>Main Technologies</h4>
                    <ul id="mohakaUL">
                      <li>React JS</li>
                      <li>Firestore</li>
                      <li>Bootstrap</li>
                      <li>CSS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com/derekw26/tripping" target="_blank" rel="noreferrer">
            <div className="TrippingWrap">
              <img className="projectsImg" src='../images/tripping.png' alt="tripping"/>
              <div className="foodieDescription">
                <a className="projectsLinks" href="https://tripping-transit.netlify.app/" target="_blank" rel="noreferrer">
                  <button className="btn-blue btn-projects">Tripping</button>
                </a>
                <p> Tripping is a web application that displays the realtime train positions on the Sydney Trains network including Intercity trains to the Blue Mountains and Central Coast. Trains can be filtered and individually selected using the search functionality. Individual trains on the map can be clicked for further information. The app uses API data from Transport for NSW Open Data, Google Maps Javascript API, openweathermap.org and newsapi.org.
                </p>
                <p className="technologies">
                For this app we used technologies such as: React JS, Ruby 2.7.4, Sinatra, Bootstrap, MUI. We also integrated APIs such as Google Maps and Transport for NSW Open Data, among others.
              </p>

              </div>
            </div>
          </a>

          <a href='https://github.com/BernardoMar/project1' target="_blank" rel="noreferrer">
            <div className="foodBibleWrapper">
              <img className="projectsImg" src='../images/foodieBible.png' alt="foodie bible"/>
              <div className="foodieDescription">
                <a className="projectsLinks" href="https://bernie01project.herokuapp.com/" target="_blank" rel="noreferrer">
                  <button className="btn-blue btn-projects">The Foodie Bible</button>
                </a>
                <p> The 'Foddie Bible' is my second project during my Software Engineering Course at GA. It's a website where users can create and navigate trough different restaurants and coffee shops in Melbourne.
                </p>
                <p>
                The project is based on the skills and technologies learnt during the second module of the course. Basically it allows users to create, inspect, edit and delete data.
                </p>
                <p>
                Take a look and leave a comment!</p>
                <div className="technologies">
                  <h4>Main Technologies</h4>
                  <ul>
                    <li>Ruby2.7.0</li>
                    <li>Rails</li>
                    <li>CSS</li>
                    <li>HTML5</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com/BernardoMar/project0" target="_blank" rel="noreferrer">
            <div className="TicTacToeWrap">
              <img className="projectsImg" src='../images/TicTacToe.png' alt="TIC TAC TOE"/>
              <div className="foodieDescription">
                <a className="projectsLinks" href="https://bernardomar.github.io/project0/" target="_blank" rel="noreferrer">
                  <button className="btn-blue btn-projects">TIC TAC TOE</button>
                </a>
                <p> This Tic-Tac-Toe is my very first developing project! It consists on a very simple game, however, coding it wasn't so simple.
                </p>
                <p>
                The goal of the game is to achieve a line of three elements (X or O in my version of the game) before the other contestant.
                </p>
                <p>
                Considering this is my first project ever as a developer, I am very proud about it!</p>
                <div className="technologies">
                  <h4>Main Technologies</h4>
                  <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML 5</li>
                    <li>jQuery</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;

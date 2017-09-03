import React from 'react';
import Col from 'react-bootstrap/lib/Col';

const Introduction = () => (
  <section id="about" className="content-section intro">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mx-auto">
          <h2 className="about-me">About ME</h2>
          <p className="intro-paragraph">I'm a passionate UI, UX designer and Front-End developer with experience in developing the web and mobile applications in a team environment. Trained as a full-stack engineer with more focus on front-end development with a good sense of UI, UX design. Also, I have a positive attitude in deadline-oriented environments, arranging plans, ability to prioritize and multi-task in a challenging fast paced environment, and capability to work well in teams. I have experience with the following technology stacks: 
          </p>
        </div> 
        <div className="col-lg-12 mx-auto">
          <p className="intro-paragraph"><b className="intro-sub">Experienced:</b> JavaScript(ES6), React, React Routers, Redux, Socket I/O, Node, Express, MongoDB, MySQL, PostgreSQL, SQLite, jQuery, HTML, CSS, Git/Github, Heroku, TDD, Agile Development, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Experience, Adobe Flash, Adobe Premiere, Bootstrap</p>
          <p className="intro-paragraph"><b className="intro-sub">Familiar:</b> Angular, D3, Backbone, Mocha, Chai, Jasmine, Adobe Dreamweaver, SketchUp, 3D Rhino, 3D Max, Auto CAD</p>
        </div> 
       
        <Col className="education bachelor" xs={2} md={4} >
          <h4 className="school-name">Sookmyung <br/>Women's University</h4><br/>
          <h6 className="school-level">Bachelor's degree</h6>
          Visual Communication Design<br/>
          Environmental Design
        </Col>
        <Col className="education master" xs={2} md={4} >
         <h4 className="school-name">Lincoln University</h4><br/>
         <h6 className="school-level">Master of Business Administration</h6>
         International Business
        </Col>
        <Col className="education hack" xs={2} md={3} >
          <h4 className="school-name">Hack Reactor</h4><br/>
          <h6 className="school-level">Advance Software Engineering immersive</h6>
          Immersive Javascript training for Software Development
        </Col>
      
      </div>
    </div>
  </section>
)

export default Introduction;
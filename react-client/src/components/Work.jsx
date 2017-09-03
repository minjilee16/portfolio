import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

const Work = (props) => (
  <section id="download" className="work-section content-section text-center">
    <h2>Work</h2> 

    <Grid>
      <Row className="gallery">
        <Col className="works" xs={4} md={3}>
          <img className="work-img" src="../../dist/img/main22.jpg" width="200px" height="180px"/>
          <h3>Splitter</h3>
          <p>Full Stack</p>
        </Col>
        <Col className="works" xs={4} md={3}>
          <img className="work-img" src="./main22.jpg" width="200px" height="180px"/>
          <Thumbnail src="/main22.jpg" alt="242x200">
            <h3>Event Planner</h3>
            <p>Description</p>
          </Thumbnail>
        </Col>
        <Col className="works" xs={4} md={3}>
          <img className="work-img" src="main22.jpg" width="200px" height="180px"/>
          <Thumbnail src="/main22.jpg" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
          </Thumbnail>
        </Col>
      </Row>
      <Row className="gallery">
      <Col className="works" xs={4} md={3}>
        <img className="work-img" src="/main22.jpg" width="200px" height="180px"/>
        <Thumbnail src="/main22.jpg" alt="242x200">
          <h3>Splitter</h3>
          <p>splliter is single showeralsdkfjalskdjflkj </p>
        </Thumbnail>
      </Col>
      <Col className="works" xs={4} md={3}>
        <Thumbnail src="/main22.jpg" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
  
        </Thumbnail>
      </Col>
      <Col className="works" xs={4} md={3}>
        <Thumbnail src="/main22.jpg" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>

        </Thumbnail>
      </Col>
      </Row>


    </Grid>

  </section>
)

export default Work;


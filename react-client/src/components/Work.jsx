import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

const Work = (props) => (
  <section id="download" className="work-section content-section text-center">
  <Grid>
    <Row>
    <Col xs={6} md={3}>
      <Thumbnail href="#" alt="171x180" src="../../dist/img/intro-bg.jpg" />
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail href="#" alt="171x180" src="../../dist/img/intro-bg.jpg" />
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail href="#" alt="171x180" src="../../dist/img/intro-bg.jpg" />
    </Col>
    </Row>
  </Grid>
  </section>
)

export default Work;



  // <section id="download" className="download-section content-section text-center">
  //   <div className="container">
  //     <div className="col-lg-8 mx-auto">
  //       <h2>Work</h2>
  //       <p>You can download Grayscale for free on the preview page at Start Bootstrap.</p>
  //       <a href="http://startbootstrap.com/template-overviews/grayscale/" className="btn btn-default btn-lg">Visit Download Page</a>
  //     </div>
  //   </div>
  // </section>

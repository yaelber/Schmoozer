import React, { Component } from 'react';
import {Thumbnail,Image, Grid, Row, Button, Col} from 'react-bootstrap';


const SingleCategoryDesigns = (props) => {
  return (
    <Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="http://i.imgur.com/n3axy5S.jpg" alt="242x200">
        <p>
          <Button bsStyle="primary" href="/form">Customize</Button>&nbsp;
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
);
}

export default SingleCategoryDesigns



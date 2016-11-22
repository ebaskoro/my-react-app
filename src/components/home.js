/*
 * homePage.js
 *
 */

import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';


/**
 * Home component.
 *
 */
class Home extends Component {

  /**
   * Renders the component.
   *
   */
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Welcome</h1>
          <p>
            This is my application written in React.JS library.
          </p>
        </Jumbotron>
      </Grid>
    );
  }

}


export default Home;

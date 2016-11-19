/*
 * footer.js
 *
 */

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


/**
 * Footer component.
 *
 */
class Footer extends Component {

  /**
   * Renders the component.
   *
   */
  render() {
    return (
      <footer>
        <Grid>
          <Row>
            <Col md={3} xs={12}>
              <address>
                <strong>My React Application</strong>
              </address>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }

}


export default Footer;

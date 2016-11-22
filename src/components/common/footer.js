/*
 * footer.js
 *
 */

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


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
                <strong>
                  <FontAwesome name="building" /> My App
                </strong>
                <br />
                1234 My Street<br />
                Neverland<br />
                Country
              </address>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }

}


export default Footer;

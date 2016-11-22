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
            <Col md={3} xs={12}>
              <h4>Follow Us</h4>
              <p>
                <FontAwesome name="globe" size="lg" /> my.app
              </p>
              <p>
                <FontAwesome name="facebook-official" size="lg" /> fb.com/my.app
              </p>
              <p>
                <FontAwesome name="twitter" size="lg" /> twitter.com/my.app
              </p>
            </Col>
            <Col md={3} xs={12}>
              <p className="text-right">
                <FontAwesome name="copyright" /> 2016 My App
              </p>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }

}


export default Footer;

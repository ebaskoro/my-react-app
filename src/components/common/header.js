/*
 * header.js
 *
 */

import React, { Component } from 'react';
import { Navbar, fixedTop } from 'react-bootstrap';
import { Link } from 'react-router';


/**
 * Header component.
 *
 */
class Header extends Component {

  /**
   * Renders the component.
   *
   */
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img src="images/logo.jpg" />
            </Link>
          </Navbar.Brand>
          <Navbar.Text>
            My App
          </Navbar.Text>
        </Navbar.Header>
      </Navbar>
    );
  }

}


export default Header;

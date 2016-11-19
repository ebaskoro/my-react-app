/*
 * header.js
 *
 */

import React, { Component } from 'react';
import { Navbar, fixedTop } from 'react-bootstrap';


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

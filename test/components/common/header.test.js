/*
 * header.test.js
 *
 */

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Header from '../../../src/components/common/header';
import { Navbar } from 'react-bootstrap';


describe('Header', () => {

  it('should be of type Navbar', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Header />);
    const actual = renderer.getRenderOutput();
    expect(ReactTestUtils.isElementOfType(actual, Navbar)).toBe(true);
  });

  it ('should render correctly', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Header />);
    const actual = renderer.getRenderOutput();
    expect(actual.props.children).toEqual(
      <Navbar.Header>
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Text>
          My App
        </Navbar.Text>
      </Navbar.Header>
    );
  });
});

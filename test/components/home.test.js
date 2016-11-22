/*
 * homePage.test.js
 *
 */

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Home from '../../src/components/home';
import { Grid, Jumbotron } from 'react-bootstrap';


describe('Home', () => {

  it('should be of type Grid', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Home />);
    const actual = renderer.getRenderOutput();
    expect(ReactTestUtils.isElementOfType(actual, Grid)).toBe(true);
  });

  it('should render correctly', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Home />);
    const actual = renderer.getRenderOutput();
    expect(actual.props.children).toEqual(
      <Jumbotron>
        <h1>Welcome</h1>
        <p>
          This is my application written in React.JS library.
        </p>
      </Jumbotron>
    );
  });

});

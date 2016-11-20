/*
 * app.test.js
 *
 */

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import App from '../../src/components/app';
import Header from '../../src/components/common/header';
import Footer from '../../src/components/common/footer';


describe('App', () => {

  it('should be of type div', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<App />);
    const actual = renderer.getRenderOutput();
    expect(actual.type).toBe('div');
  });

  it('should render correctly', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<App />);
    const actual = renderer.getRenderOutput();
    expect(actual.props.children).toEqual([
      <Header />,
      <div className="container-main"></div>,
      <Footer />
    ]);
  });

});

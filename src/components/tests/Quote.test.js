import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Qoute';

it('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

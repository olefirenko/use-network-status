import React from 'react';
import { Demo } from '../example/Demo';
import renderer from 'react-test-renderer';

describe('useNetworkStatus', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<Demo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

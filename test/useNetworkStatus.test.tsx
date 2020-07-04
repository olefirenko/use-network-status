import React from 'react';
import { Demo } from '../example/Demo';
import renderer, { act } from 'react-test-renderer';

const eventListenersMap: any = {};

beforeEach(() => {
  window.addEventListener = jest.fn((event, cb) => {
    eventListenersMap[event] = cb;
  });
  window.removeEventListener = jest.fn(event => {
    eventListenersMap[event] = undefined;
  });
});
describe('useNetworkStatus', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<Demo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('set offline status correctly', () => {
    Object.defineProperty(navigator, 'onLine', { value: false });

    const tree = renderer.create(<Demo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds and remove event listeners', () => {
    let instance: renderer.ReactTestRenderer;
    act(() => {
      instance = renderer.create(<Demo />);
    });

    expect(window.addEventListener).toHaveBeenCalled();

    act(() => {
      instance.unmount();
    });

    expect(window.removeEventListener).toHaveBeenCalled();
  });
});

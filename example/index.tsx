import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Demo } from './Demo';


export const App = () => {
  return <Demo />
};

ReactDOM.render(<App />, document.getElementById('root'));

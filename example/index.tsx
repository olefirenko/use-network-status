import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useNetworkStatus } from '../.';

const statusStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontSize: '36px'
}

const App = () => {
  const isOnline = useNetworkStatus()
  return (
    <div style={statusStyle}>
      {isOnline ? '📡 Online' : '📴 Offline'}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

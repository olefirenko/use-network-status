import * as React from 'react';
import { useNetworkStatus } from '../.';

const statusStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontSize: '36px',
};

export const Demo = () => {
  const isOnline = useNetworkStatus();

  return <div style={statusStyle}>{isOnline ? '📡 Online' : '📴 Offline'}</div>;
};

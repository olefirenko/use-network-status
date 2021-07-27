# 📡 React Hook to get the online status of the browser

React hook `useNetworkStatus()` returns whether the client's browser online with updates when the network state is changed.

## Installation

The easiest way to use `useNetworkStatus` React hook is to install it from **npm** or **yarn**.

```sh
npm install use-network-status --save
```

Or

```sh
yarn add use-network-status
```

## Usage
Pull the hook into your component (usually the root one) and call the hook inside the functional component. 

```js
import { useNetworkStatus } from "use-network-status";

function App() {
  const isOnline = useNetworkStatus();

  return (
    <div className="status">
      {isOnline ? '📡 Online' : '📴 Offline'}
    </div>
  );
}
```
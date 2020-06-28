# 📡 React Hook to get the online status of the browser

React hook `useNetworkStatus()` returns whether the client's browser online with updates when the network state is changed.

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
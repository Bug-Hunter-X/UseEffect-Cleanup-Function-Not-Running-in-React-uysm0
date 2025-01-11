```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanup, setShouldCleanup] = useState(true);

  useEffect(() => {
    console.log('Effect ran:', count);
    return () => {
      if (shouldCleanup) {
        console.log('Cleanup function ran');
      }
    };
  }, [count, shouldCleanup]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setShouldCleanup(false)}>Prevent Cleanup</button>
    </div>
  );
}

export default MyComponent;
```
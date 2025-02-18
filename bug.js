```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause a warning in React 18+ because it's missing the return function to cleanup
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // Do something with data
        console.log(data);
      });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```
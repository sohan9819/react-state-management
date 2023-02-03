import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev += 1));
    }, count * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div className='App'>Timer : {count}</div>;
}

export default App;

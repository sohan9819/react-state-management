import { useMemo, useState } from 'react';

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const total = useMemo(
    () => numbers.reduce((sum, num) => (sum += num), 0),
    [numbers]
  );

  const [names] = useState(['sohan', 'arshit', 'manish', 'akhil']);

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <div className='App'>
      <p>Total : {total}</p>
      <div>
        <p>Names : {names.join(' , ')}</p>
        <p>Sorted Names : {sortedNames.join(' , ')}</p>
      </div>
    </div>
  );
}

export default App;

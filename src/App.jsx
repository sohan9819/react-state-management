import { useState, useCallback, useMemo } from 'react';

function SortedList({ list, sortFunc }) {
  console.log('Using SortedList');
  const sortedList = useMemo(() => {
    console.log('Running sort');
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return (
    <div>
      <h3>Sorted List : {sortedList.join(' , ')} </h3>
    </div>
  );
}

function App() {
  const namesList = [
    'sohan',
    'akhil',
    'manish',
    'vishnu',
    'vinit',
    'abhilash',
    'abhiram',
    'ajinkya',
    'shubham',
  ];

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const totalCount = count1 + count2;

  console.log(count1);
  console.log(count2);

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);
  console.log('Reloading App ');

  return (
    <div className='App'>
      <button
        onClick={() => {
          setCount1((prev) => (prev += 1));
        }}
      >
        Count : {count1}
      </button>
      <button
        onClick={() => {
          setCount2((prev) => (prev += 1));
        }}
      >
        Count : {count2}
      </button>
      <h3>Total Count : {totalCount}</h3>

      <div>
        <h3>Names : {namesList.join(' , ')}</h3>
        <SortedList list={namesList} sortFunc={sortFunc} />
      </div>
    </div>
  );
}

export default App;

useCallback(() => {
  first;
}, [second]);

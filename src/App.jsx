import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <button
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      Count = {count}
    </button>
  );
}

function NameList() {
  const [nameList, setNameList] = useState(['Sohan', 'Snicker', 'Vicky']);

  const [input, setInput] = useState('');

  return (
    <>
      <ul>
        {nameList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input
        type='text'
        name='name'
        id='name'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type='submit'
        onClick={() => {
          if (input.trim()) {
            setNameList([...nameList, input]);
            setInput('');
          }
        }}
      >
        Add Name
      </button>
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <Counter />
      <Counter />
      <Counter />
      <NameList />
    </div>
  );
}

export default App;

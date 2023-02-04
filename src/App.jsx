import { useState, useRef, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const input = useRef(null);
  const refId = useRef(users.length + 1);

  useEffect(() => {
    input.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();

    if (name) {
      setUsers((prev) => [...prev, { id: refId.current++, name }]);
      e.target.name.value = '';
    }
  };

  return (
    <div className='App'>
      <ul>
        {users.map((user) => {
          console.log(user);
          return (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          );
        })}
      </ul>
      <form onSubmit={submitHandler}>
        <input type='text' name='name' ref={input} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default App;

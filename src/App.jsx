import { useReducer } from 'react';

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first_name: '',
      last_name: '',
    }
  );

  return (
    <form>
      <label htmlFor='first_name'>
        First Name :{' '}
        <input
          type='text'
          name='first_name'
          id='first_name'
          placeholder='First Name'
          onChange={(e) => {
            dispatch({ first_name: e.target.value });
          }}
        />
      </label>
      <label htmlFor='first_name'>
        Last Name :{' '}
        <input
          type='text'
          name='last_name'
          id='last_name'
          placeholder='Last Name'
          onChange={(e) => {
            dispatch({ last_name: e.target.value });
          }}
        />
      </label>

      <div>
        <h1>Preview : </h1>
        <p>First Name : {state.first_name}</p>
        <p>Last Name : {state.last_name}</p>
      </div>
    </form>
  );
}

function NameList() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_NAME':
          return { ...state, name: action.payload };
        case 'ADD_NAME':
          return { names: [...state.names, action.payload], name: '' };
        default:
          break;
      }
    },
    {
      names: [],
      name: '',
    }
  );

  return (
    <div className='App'>
      <ul>
        {state.names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}{' '}
      </ul>
      <input
        type='text'
        name=''
        id=''
        value={state.name}
        onChange={(e) =>
          dispatch({ type: 'SET_NAME', payload: e.target.value })
        }
      />
      <div>Name = {state.name}</div>
      <button
        onClick={() => {
          dispatch({ type: 'ADD_NAME', payload: state.name });
        }}
      >
        Save
      </button>
    </div>
  );
}
function App() {
  return (
    <div className='App'>
      <NameList />
      <hr />
      <UserForm />
    </div>
  );
}

export default App;

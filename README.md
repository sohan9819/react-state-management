# REACT STATE MANAGEMENT

- useState
- useReducer
- useMemo and useCallback
- useEffect
- useRef
- Context and Customs
- React Query and React Location
- Zustand
- Valtio
- Jotal
- Redux

## `useReducer`

[React Docs for useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

- Syntax

  ```javascript
  const initialState = {
    name: '',
    state: '',
    country: '',
  };

  const initialStateFunction = (initialState) => {
    return {
      user: initialState,
    };
  };

  const reducerFunction = ({ state, action }) => {
    // action --> {type , payload}
    switch (action.type) {
      case 'ADD_NAME':
        return { ...state, user.name: action.payload };
      case 'ADD_STATE':
        return { ...state, user.state: action.payload };
      case 'ADD_COUNTRY':
        return { ...state, user.country: action.payload };
      default:
        break;
    }
  };

  // const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [state, dispatch] = useReducer(
    reducerFunction,
    initialState,
    initialStateFunction
  );
  ```

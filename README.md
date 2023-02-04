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

## `useRef`

[React Docs for useRef](https://beta.reactjs.org/reference/react/useRef)

```javascript
// basic syntax
// useRef(initialValue)
const inputRef = useRef('');

// In Html
<input type='text' ref={inputRef} />;

// Acccessing the value of the input filed in js
inputElement = input.current; // will give the input element
inputValue = input.current.value; // will give the input value
```

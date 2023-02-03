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

## `useEffect`

[React Docs for useEffect](https://beta.reactjs.org/reference/react/useEffect)

[Blog on useEffect](https://caelinsutch.medium.com/react-useeffect-hook-in-depth-dc6b7c6132e5)

```javascript
// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])

const [count, setCount] = useState(0);

useEffect(() => {
  console.log(count);
  setCount((prev) => (prev += 1));
}, [count]);
// Triggers whenever the count will change

//Three ways of using useEffect

// 1 : Without a dependency array
useEffect(() => {
  // do something whenever there is change in dom
});

// 2 : With an empty dependency array
useEffect(() => {
  // do something only once the dom is reloaded
}, []);

// 3 : With variables in dependency array
useEffect(() => {
  // do something whenever the value of variable changes
}, [variable]);
```

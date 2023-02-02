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

## `useCallback`

[React Docs for useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)

- It's same as `useMemo()` , but it returns a memoized callback.
- Syntax

```javascript
// useCallback(() => {
//   first;
// }, [second]);

const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);
// In this case there is no dependency since it do not take an external value
```

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

## `useMemo`

[React Docs for useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)

- `useMemo()` is a memorization hook. Its generally used for avoid repeating the complex tasks and also for tasks related with objects and arrays .

- Syntax

```javascript
//useMemo(() => first, [second])

const [names] = useState(['sohan', 'arshit', 'manish', 'akhil']);

const sortedNames = useMemo(() => [...names].sort(), [names]);
// Returns a memoized value.
```

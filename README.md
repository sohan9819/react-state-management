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

## `useState`

- Data types in javascript

| Value Types / Primitive | Reference Types / Non-Primitive |
| ----------------------- | ------------------------------- |
| Number                  | Object                          |
| String                  | Array                           |
| Boolean                 | Function                        |
| Symbol                  |                                 |
| Undefined               |                                 |
| Null                    |                                 |

[Understanding difference between _pass by value_ and _pass by reference_](https://https://www.scaler.com/topics/javascript/pass-by-value-and-pass-by-reference/)

- `useState` can also take a function as a Starting point

```javascript
const [count, setCount] = useState(() => 10);
```

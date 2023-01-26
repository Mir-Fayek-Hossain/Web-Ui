import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { decrement, increment } from "./features/counter/counterSlice"

function App() {
  const counter = useAppSelector((state) => state?.counter?.value)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App

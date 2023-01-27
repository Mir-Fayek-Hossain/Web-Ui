import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { decrement, increment } from "./features/counter/counterSlice"

function App() {
  const counter = useAppSelector((state) => state?.counter?.value)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <p className="text-3xl p-6">{counter}</p>
      <button
        className="bg-blue-500 mr-6 rounded-lg p-4"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-red-500 rounded-lg p-4"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default App

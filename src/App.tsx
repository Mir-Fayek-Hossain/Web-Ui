import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import Template from "./component/Template"

function App() {
  const counter = useAppSelector((state) => state?.counter?.value)
  const dispatch = useAppDispatch()
  return <Template />
}

export default App

import { useState } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup/>
    </>
  )
}

export default App

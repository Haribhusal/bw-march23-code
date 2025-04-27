import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <div className="text-4xl bg-red-500 font-extrabold bg-orange-400 hover:bg-transparent">Hello</div>
    </>
  )
}

export default App

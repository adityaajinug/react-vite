import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwindcss-icon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="w-40" alt="Vite logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} className="w-40" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="w-40 animate-spin" alt="React logo" />
        </a>
      </div>
      <div className="text-3xl mt-20">
        <h1 className="font-extrabold text-cyan-500">Vite + Tailwind + React</h1>
      </div>
    </div>
  )
}

export default App

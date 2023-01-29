import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ContextP from './Mcontext/Context'
import ListeDo from './Comepenents/ListeDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ContextP>
        <ListeDo></ListeDo>
      </ContextP>
    </div>
  )
}

export default App

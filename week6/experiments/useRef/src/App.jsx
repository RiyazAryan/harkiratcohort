import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [income, setincome] = useState(2000)
  const divref = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      divref.current.innerHTML = 10
    },3000)
  })
  return (
    <>
    hi there, final income <div ref={divref}>{income}</div>
          </>
  )
}

export default App

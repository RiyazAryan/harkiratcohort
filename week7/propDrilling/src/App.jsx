import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//count is in parent
  return (
    <div>
     <Count count={count} setCount={setCount}/>
    </div>
  )
}

function Count({count}){
//count variable set is not being used here but it is passing it to its child button
  return(
    <div>
      {count}
      <Buttons count={count} setCount={setCount}/>
    </div>
  )
}

function Buttons({count, setCount}){
  //set is being used here
return(
  <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
)
}

export default App

import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [render, setRender]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    },2000)
  })
  return (
    <>
      {render?<Mycomponent/>:<div>unmounted</div>}
    </>
  )
}

function Mycomponent(){
  useEffect(()=>{
    console.error("componenet mounted");

    return()=>{
      console.log("component unmounted")
    }
  },[]);

  return <div>
    inside my component
  </div>
}

export default App

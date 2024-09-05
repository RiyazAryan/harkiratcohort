import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [render, setRender]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    },2000)
  })
  return (
    <>
      {render?<MyComponent/>:<div>done</div>}
    </>
  )
}

class MyComponent extends React.Component{
  componentDidMount(){
    console.log("mount")
  }
  componentWillUnmount(){
    console.log("unmount")
  }
  render(){
    return <div>hi there</div>
  }
}

export default App

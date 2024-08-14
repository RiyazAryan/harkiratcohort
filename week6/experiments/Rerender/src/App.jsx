import './App.css'
import { Header,Headerwithbutton } from './Components/Header'
import { useState } from 'react'

function App() { 

  //const [title, settitle] = useState("Hello World")


  return (
    <div>
      <Headerwithbutton/>
      <Header title="My name is Header"></Header>
    </div>
  )
}

export default App

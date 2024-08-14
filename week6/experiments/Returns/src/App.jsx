import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <>
      <Header title="return check 0"></Header>
      <Header title="return check 1"></Header>
    </>
  )
}

/*

return(
  <React.Fragment>
    <Header title="return"></Header>
  </React.Fragment>
)

*/

function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
}

export default App

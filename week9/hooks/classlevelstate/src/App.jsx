import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Mycomponent />
    </>
  )
}

class Mycomponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {count: 0};
  }

  incrementCount = () =>{
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return(
      <div>
        <p>{this.state.count}</p>
        <button onclick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}

export default App

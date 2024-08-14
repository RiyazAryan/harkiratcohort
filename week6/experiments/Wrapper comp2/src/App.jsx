import { useState, useEffect } from 'react'
import {Headerwithbutton } from './Components/Header'
import './App.css'


function App() {
  const [Todos, setTodos] = useState([])
  useEffect(() => {
      setTimeout(()=>{
        fetch("http://localhost:3000/todos").then(async(res)=>{
          const json=await res.json();
          setTodos(json.todos)
        })
      },10000)},[Todos])
  return (
    <>
    <Headerwithbutton/>
    <CardWrapper>
      Todos list
    </CardWrapper>
    <div>{Todos.map((todo)=><Todo key={todo.id} title={todo.title} status={todo.completed}></Todo>)}</div>
      </>  )
}

function CardWrapper({children}){
  return<div style={{display: 'flex', justifyContent: 'center'}}>
    {children}
  </div>
}

function Todo({title, status}){
  return <div>
    <h1>{title}</h1>
    <p>{status}</p>
  </div>
}

export default App

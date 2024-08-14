import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from '../src/components/Todos'

function App() {
  const [todos, setTodos]= useState([]);

  fetch("http://localhost:3000/todos").then(async (value)=>{
    const json= await value.json();
    setTodos(json.todos)
  })
  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
            </>
  )
}

export default App

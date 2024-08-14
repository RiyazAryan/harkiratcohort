import { useState } from 'react'
import './App.css'

let counter=4
function App() {
  const [Todos, setTodos] = useState([{
    id:1,
    title:"Go to Gym",
    description:"Go to Gym today"
  },
  {
    id:2,
    title:"Eat food",
    description:"Diet"
  },
  {
    id:3,
    title:"sleeo",
    description:"Rest for body"
  }
  ])

  function addTodo(){
    setTodos([...Todos, {
      id:counter++,
      title: "Work",
      description: "complete the tasks" +Math.random()
    }])
  }
  return (
    <>
    <button onClick={addTodo}>Add a Todo</button>
    {Todos.map((todo)=><Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
         </>
  )
}

function Todo({title, description})
{
  return<div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}

export default App


import './App.css'

function App() {

  return (
    <>
      <Todo title={"Workout"} description={"6am to 8am"}/>
    </>
  )
}
interface TodoProp{
  title: string,
  description: string
}
function Todo(prop:TodoProp){
  return <div>
    {prop.title}
    {prop.description}
  </div>
}

export default App

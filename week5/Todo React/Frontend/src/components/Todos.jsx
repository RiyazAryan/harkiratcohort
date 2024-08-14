export function Todos({todos}){
    return<div>
        {todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
                <button id="{todo.id}">{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}
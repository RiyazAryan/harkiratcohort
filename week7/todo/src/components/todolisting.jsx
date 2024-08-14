import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filteredlist, todolist } from '../store/atoms/atoms';

export default function Todolisting() {
    const todos = useRecoilValue(filteredlist);
    return (
        <div>
            <h2>Tasks</h2>
            {todos.map((item) => (
                <Listing key={item.id} todo={item} />
            ))}
        </div>
    );
}


function Listing({ todo }) {
    const settodos=useSetRecoilState(todolist)

    function check(e){
    settodos((oldTodos) =>
            oldTodos.map((item) =>
                item.id === todo.id
                    ? { ...item, isCompleted: e.target.checked }
                    : item
            )
        );
    }

    function deletetodo(){
        settodos((oldTodos)=>
        oldTodos.filter((item)=>
        item.id!==todo.id))
    }

    return (
        <div id={todo.id}>
            <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                <label>Completed</label><input type="checkbox" onChange={check} checked={todo.isCompleted}/>
                <button onClick={deletetodo}>Delete</button>
        </div>
    );
}
    
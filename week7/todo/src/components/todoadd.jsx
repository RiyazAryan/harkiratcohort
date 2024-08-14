import { useState } from "react"
import { useSetRecoilState } from "recoil";
import { todolist } from "../store/atoms/atoms";

export default function Todoadd(){

    const [title, setTitle] = useState("");
    const [desc, setDescription] = useState("");
    const settodo = useSetRecoilState(todolist);

    function addTodo(){
        settodo((e)=>{
            const newid= e.length>0 ? Math.max(...e.map(todo=>todo.id))+1 : 1;
            return[
                ...e,
                {
                    id: newid,
                    title,
                    description:desc,
                    isCompleted: false
                }
            ]
        })
        setTitle('')
        setDescription('')
    }

    const formStyle = {
        border: '2px solid #4CAF50',
        borderRadius: '5px',
        padding: '20px',
        backgroundColor: '#fff' 
    };

    const inputStyle = {
        display: 'block',
        marginBottom: '3px',
        width: '100px' // Adjust width for the title input
    };

    const descriptionStyle = {
        ...inputStyle,
        width: '100%' // Make the description field take full width of the form
    };
    return (
        <div>
        <input type='text' placeholder='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} style={inputStyle}/><br/>
        <input type='text' placeholder='Description' value={desc} onChange={(e)=>{setDescription(e.target.value)}} style={descriptionStyle}/><br/>
        <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}
import { useState } from "react";
export function CreateTodo(){
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    return <div>
        <input style={{padding:10,margin:10}} type="text" placeholder="title" onChange={(e)=>{
            settitle(e.target.value);
            
        }}/><br></br>
        <input style={{padding:10,margin:10}} type="text" placeholder="description" onChange={(e)=>{
            setdescription(e.target.value);
        }}/>
        <button style={{padding:10,margin:10}} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers:{
                    "content-type":"application/json"
                }
            }).then(async (res)=>{
                const json=await res.json();
                alert("Todo Added")
            })
        }}>
            Add a task
        </button>
    </div>
}
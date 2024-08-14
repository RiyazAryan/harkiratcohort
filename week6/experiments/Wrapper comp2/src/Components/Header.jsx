import { useState } from "react"

export function Header(props){
    return <div>Hello {props.title}</div>
}

export function Headerwithbutton(){
    const [Title, setTitle] = useState("Hello World")

    function updatetitle(){
    setTitle("My name is "+Math.random())
  }

    return <div>
        <button onClick={updatetitle}>Update Title</button>
        <div>hello {Title}</div>
    </div>
}
import { lazy, Suspense } from 'react'
import './App.css'
//import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
const Dashboard= lazy(()=>import("./components/Dashboard"))

function App() {
  return (
        <div>
          
        <BrowserRouter>
        <Appbar/>
          <Routes>
            <Route path="/dashboard" element={<Suspense fallback={<div>Loading....</div>}><Dashboard/></Suspense>}/>
            <Route path="/" element={<Landing/>}/>
          </Routes>
        </BrowserRouter>
        </div>
  )
}

function Appbar(){
  const nav=useNavigate()
  return(
    <div>
            <button onClick={()=>{
              nav("/");
            }}>Landing page</button>
            <button onClick={()=>{
              nav("/dashboard");
            }}>Dashboard page</button>
          </div>
  )
}

export default App

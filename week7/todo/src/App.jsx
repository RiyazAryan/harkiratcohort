import './App.css'
import {RecoilRoot} from "recoil"
import Todolist from './components/todolist'
import Todolisting from './components/todolisting'
import Todoadd from "./components/todoadd"

const borderStyle = {
  border: '2px solid #4CAF50',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px'
};

function App() {

  return (
    <>
      <RecoilRoot>
        <div style={{display:'flex', justifyContent:'space-between'}}>
                <div><h1>TODO</h1></div>
                <div style={{ textAlign: 'right', padding: '10px' }}>
                    <Todolist/>
                </div>
            </div>
          <Todoadd/>
          <Todolisting/>
      </RecoilRoot>
    </>
  )
}



export default App

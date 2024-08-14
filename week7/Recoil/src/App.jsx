import './App.css'
import { useRecoilState,useSetRecoilState, RecoilRoot, useRecoilValue } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count({}){
  console.log("check rerender")
  return(
    <div>
      <CountRerendered/>
      <Buttons />
    </div>
  )
}

function EvenCheck(){
  const isEven=useRecoilValue(evenSelector)
  return(<>
    {isEven ? "" :"Even number"}</>)
}

function CountRerendered(){
  console.log("check count")
  const count=useRecoilValue(countAtom);
  return (
    <div>
      <div>
      {count}
    </div>
      <EvenCheck /></div>
  )
}

function Buttons({}){
  const setCount=useSetRecoilState(countAtom)
  //const [count,setCount]=useRecoilState(countAtom)
  console.log("Button")
return(
  <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
)
}

export default App

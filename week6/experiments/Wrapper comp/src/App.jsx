import './App.css'

function App() {

  return (
    <div style={{display: 'flex', justifyContent: 'space-between' }}>
    <CardWrapper innerComponent={<TextWrapper/>}></CardWrapper>
    <CardWrapper innerComponent={<TextWrapper2/>}></CardWrapper>
    </div>
  )
}

function TextWrapper(){
  return <>
  hi there
  </>
}

function TextWrapper2(){
  return <>
  hi there 2
  </>
}

function CardWrapper({innerComponent}){
  return <div style={{border:"2px solid black", padding: 20}}>{innerComponent}</div>
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [excahngeData, setExcahngeData] = useState({});
  const [bankData, setBankData] = useState({});

  setTimeout(() => {
    setBankData({
      income : 1000
    })
  }, 3000);

  setTimeout(() => {
    setExcahngeData({
      return : 100
    })
  }, 1000);

  const incomeTax= bankData.income + excahngeData.return * 0.3;
  return (
    <>
      <div> Hi there! your incometax is about {incomeTax}Rupees</div>
          </>
  )
}

export default App

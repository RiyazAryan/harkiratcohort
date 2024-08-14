import { useState, useEffect, useMemo } from 'react'
import './App.css'

function App() {
  const [exchangeData, setexchangeData] = useState({})
  const [exchangeData2, setexchangeData2] = useState({})
  const [bankData, setbankData] = useState({})

  useEffect(() => {
    setexchangeData({
      returns: 300
    });
  }, [])

  useEffect(() => {
    setexchangeData2({
      returns: 400
    });
  }, [])

  useEffect(() => {
    setTimeout(()=>{setbankData({
        income: 100
      });
    },3000)
  }, [])
  
  const cryptoreturns =useMemo(()=>{
    console.log(exchangeData.returns)
    console.log(exchangeData2.returns``)
    return (exchangeData.returns + exchangeData2.returns)
  },[exchangeData, exchangeData2])

  const incomeTax=(bankData.income+cryptoreturns)*0.3

  return (
    <>
    <div>
      hi there the income tax returns final bill is {incomeTax}
    </div>
          </>
  )
}

export default App

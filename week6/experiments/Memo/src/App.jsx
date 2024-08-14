import { useState, useEffect} from 'react'
import { memo } from 'react'
import { useCallback } from 'react'

function App() {
  const [exchangeData, setexchangeData] = useState({})
  const [exchangeData2, setexchangeData2] = useState({})
  //const [bankData, setbankData] = useState({})

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
    },5000)
  }, [])
  
  const cryptoreturns =useCallback(()=>{
    return (exchangeData.returns + exchangeData2.returns)
  },[exchangeData,exchangeData2])

  return (
    <>
    <Crypto cryptoreturns={cryptoreturns()}></Crypto>
    <Dummy></Dummy>
          </>
  )
}
const Dummy=memo(function(){
  console.log("Dummy Ran")
  return <div>
    hi
  </div>
})


const Crypto=memo(function ({cryptoreturns}){
  console.log("Hello I ran")
  return <div>
    You returns {cryptoreturns}
  </div>
})

export default App

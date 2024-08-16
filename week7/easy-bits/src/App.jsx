import './App.css'
import {RecoilRoot, useRecoilValue} from 'recoil'
import { jobsAtom, msgAtom, networkAtom, notificationAtom, tot_noti } from './store/atom'

function App() {
  
  return (
    <>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
    </>
  )
}

function MainApp(){
  const networknotification=useRecoilValue(networkAtom)
  const jobsAtomcount=useRecoilValue(jobsAtom)
  const msgAtomcount=useRecoilValue(msgAtom)
  const notificationAtomcount=useRecoilValue(notificationAtom)
  const tot_noticount=useRecoilValue(tot_noti)
  return(
    <>
        <button>My network({networknotification >= 100 ? "99+": networknotification})</button>
        <button>Jobs({jobsAtomcount >= 100 ? "99+": jobsAtomcount})</button>
        <button>Messaging({msgAtomcount >= 100 ? "99+": msgAtomcount})</button>
        <button>Notification({notificationAtomcount >= 100 ? "99+": notificationAtomcount})</button>
        <button>Me({tot_noticount})</button>
        </>
  )
}

export default App

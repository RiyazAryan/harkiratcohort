import { useState } from 'react'
import './App.css'
import { TopNav } from './components/TopNav'
import { SideBar } from './components/sidebar'
import { RecoilRoot } from 'recoil';
import { FixedComponents } from './components/fixedComponents';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <RecoilRoot>
    <div className="bg-white dark:bg-black">
      <FixedComponents/>
    </div>
    </RecoilRoot>
  )
}

export default App

import { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import { TopBar, SideBar } from './components'


const App = () => {
  useEffect(() => {
    window.process = {
      ...window.process
    }
  }, [])

  return (
    <div>
      <SideBar />
      <TopBar />
    </div>
  )
}

export default App

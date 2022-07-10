import { useEffect } from 'react'
import { Landing } from './pages'

const App = () => {
  useEffect(() => {
    window.process = {
      ...window.process
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Landing />
    </div>
  )
}

export default App

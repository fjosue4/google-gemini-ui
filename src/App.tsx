import { useSelector } from 'react-redux'
import { RootState } from './store'

import './App.css'
import Welcome from './pages/Welcome/Welcome'

function App() {
  const { API_KEY } = useSelector((state: RootState) => state.user)

  return (
    <>
      {API_KEY ? 
      <div>Test</div>
      :
      <Welcome />
      }
      
    </>
  )
}

export default App

import { useSelector } from 'react-redux'
import { RootState } from './store'

import './App.css'
import Welcome from './pages/Welcome/Welcome'
import Chat from './pages/Chat/Chat'

function App() {
  const { API_KEY } = useSelector((state: RootState) => state.user)

  return (
    <>
      {API_KEY ? 
      <Chat />
      :
      <Welcome />
      }
      
    </>
  )
}

export default App

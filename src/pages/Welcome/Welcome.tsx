import { useState, ChangeEvent } from 'react'
import './Welcome.scss'
import { useDispatch } from 'react-redux'
import { setUser } from '@store/user/userSlice'

function Welcome() {
    const [name, setName] = useState<string>('')
    const [API_KEY, setAPI_KEY] = useState<string>('')

    const dispatch = useDispatch()
  
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value)
    }
  
    const handleApiKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
      setAPI_KEY(e.target.value)
    }
  
    const handleSubmit = () => {
      dispatch(setUser({name, API_KEY}))
    }
  
    return (
      <div className='welcome-page'>
        <h1>Welcome</h1>
          <div>
            <div>Your Name:</div>
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <div>API Key:</div>
            <input
              type='text'
              id='apiKey'
              value={API_KEY}
              onChange={handleApiKeyChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>Submit</button>
      </div>
    )
  }
  
  export default Welcome
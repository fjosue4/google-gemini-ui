import Button from '@components/Button'
import { setUser } from '@store/user/userSlice'
import { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

function Setup () {
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
      dispatch(setUser({ name, API_KEY }))
    }
  
    const getAPI = () => {
      window.open('https://makersuite.google.com/app/apikey')
    }
    return (
        <div className='auth-container'>
            <div className='input-container'>
              <span>Your Name</span>
              <input
                type='text'
                id='name'
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className='input-container'>
              <span>API Key</span>
              <input
                type='text'
                id='apiKey'
                value={API_KEY}
                onChange={handleApiKeyChange}
              />
            </div>
            <div className='buttons-container'>
              <Button className='start-button transparent' onClick={getAPI}>Get Free API Key</Button>
              <Button className='start-button' onClick={handleSubmit}>Setup</Button>
            </div>
          </div>
    )
}

export default Setup

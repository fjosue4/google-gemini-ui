import { useState, ChangeEvent } from 'react'
import './Welcome.scss'
import { useDispatch } from 'react-redux'
import { setUser } from '@store/user/userSlice'
import Button from '@components/Button'

function Welcome() {
  const [showInputs, setShowInputs] = useState(false)
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
    window.open('https://ai.google.dev/')
  }

  return (
    <div className='welcome-page'>
      <div className='heading'>
        <h1 className={showInputs ? 'small-h1' : ''}>Chat with <span>Gemini</span> online</h1>
        {!showInputs ?
          (
            <>
              <h3>Experience Google's largest and most capable AI model</h3>
              <Button className='start-button' onClick={() => setShowInputs(true)}>Start Setup</Button>
            </>) :
          (<div className='auth-container'>
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
          </div>)
        }
      </div>
      <span className='disclaimer'>*This is a non-official application</span>
    </div>
  )
}

export default Welcome
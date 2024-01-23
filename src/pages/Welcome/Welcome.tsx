import { useState, ChangeEvent } from 'react'
import './Welcome.scss'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store'

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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Your Name:</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor='apiKey'>API Key:</label>
            <input
              type='text'
              id='apiKey'
              value={API_KEY}
              onChange={handleApiKeyChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
  
  export default Welcome
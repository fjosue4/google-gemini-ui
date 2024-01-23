import { ChangeEvent, useState } from 'react'
import Button from '@components/Button'
import { useDispatch } from 'react-redux'
import { generateTextContent } from '@store/user/dispatchers.user'
import { AppDispatch } from '@store/index'

function PromptGenerator() {
  const [prompt, setPrompt] = useState('')
  const dispatch: AppDispatch = useDispatch()

  const handlePromptChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value)
  }
  const handleSendPrompt = () => {
    dispatch(generateTextContent({ prompt }))
  }



  return (
    <div>
      <div>
        <label htmlFor="prompt">Enter Prompt:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={handlePromptChange}
        />
      </div>
      <div>
        <Button onClick={handleSendPrompt}>Send Prompt</Button>
      </div>
      <div>
        <h2>AI Answer:</h2>
      </div>
    </div>
  )
}

export default PromptGenerator

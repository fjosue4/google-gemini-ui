import { ChangeEvent, useState } from 'react'
import Button from '@components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { generateTextContent } from '@store/user/dispatchers.user'
import { AppDispatch, RootState } from '@store/index'

function PromptGenerator() {
  const [prompt, setPrompt] = useState('')
  const dispatch: AppDispatch = useDispatch()
  const { data } = useSelector((state: RootState) => state.user.conversation || { data: [] })

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
        {/* Render conversation here */}
        {data && (
          <ul>
            {data.map((message, index) => (
              <li key={index}>
                <strong>{message.type === 'inbound' ? 'Inbound:' : 'Outbound:'}</strong> {message.message} - {message.timestamp}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default PromptGenerator

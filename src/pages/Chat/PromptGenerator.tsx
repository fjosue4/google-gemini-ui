import Button from '@components/Button'
import { usePromptGenerator } from './hooks'

function PromptGenerator() {

  const { handlePromptChange, handleSendPrompt, data, prompt } = usePromptGenerator()

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

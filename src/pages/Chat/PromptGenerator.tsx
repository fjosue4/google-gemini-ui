import Button from '@components/Button'
import { usePromptGenerator } from './hooks'

function PromptGenerator() {

  const { handlePromptChange, handleSendPrompt, data, prompt } = usePromptGenerator()

  return (
    <div>
      <div>
        <input
          type="text"
          id="prompt"
          value={prompt}
          placeholder='Type your message...'
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

import Button from '@components/Button'
import { usePromptGenerator } from './hooks'

function PromptGenerator() {
  const { handlePromptChange, handleSendPrompt, data, prompt, textareaRef } = usePromptGenerator()

  return (
    <div className='conversation-container'>
      <div className='messages-container'>
        {data &&
          data.map((message, index) => (
            <div className='message' key={index}>
              <strong>{message.type === 'inbound' ? 'Gemini:' : 'You:'}</strong>{' '}
              {message.message} - {message.timestamp}
            </div>
          ))}
      </div>
      <div className='message-input-container'>
        <textarea
          id='prompt'
          value={prompt}
          className='prompt-input'
          placeholder='Type your message...'
          onChange={handlePromptChange}
          ref={textareaRef}
        />
        <Button onClick={handleSendPrompt}>Send Prompt</Button>
      </div>
    </div>
  )
}

export default PromptGenerator
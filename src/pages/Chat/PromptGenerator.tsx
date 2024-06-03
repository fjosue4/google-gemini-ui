import ReactMarkdown from 'react-markdown'
import { usePromptGenerator } from './hooks'
import { useRef, useEffect } from 'react'
import LoadingLine from '../../components/LoadingLine'
import Button from '../../components/Button'

function PromptGenerator() {
  const { handlePromptChange, handleSendPrompt, handleKeyDown, data, prompt, textareaRef, loading, error } = usePromptGenerator()

  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [data])

  return (
    <div className='conversation-container'>
      <div className='messages-container' ref={messagesContainerRef}>
        {data &&
          data.map((message, index) => (
            <div className={`message ${message.type === 'inbound' ? 'inbound' : 'outbound'}`} key={index}>
              <strong>{message.type === 'inbound' ? 'Gemini' : 'You'}</strong>
              {message.type === 'inbound' ? (
                <ReactMarkdown className='markdown-render'>{message.message}</ReactMarkdown>
              ) : (
                <p>{message.message}</p>
              )}
            </div>
          ))}
        {loading && <LoadingLine />}
        {error && (
          <div className='error'>
            {error}
            {error.includes('API') && (<><br /> Sign Out to enter a new API Key </>)}
          </div>
        )}
      </div>
      <div className='message-input-container'>
        <textarea
          id='prompt'
          value={prompt}
          className='prompt-input'
          placeholder='Type your message...'
          onChange={handlePromptChange}
          onKeyDown={handleKeyDown}
          ref={textareaRef}
        />
        <Button disabled={!prompt || loading} onClick={handleSendPrompt}>Send</Button>
      </div>
    </div>
  )
}

export default PromptGenerator
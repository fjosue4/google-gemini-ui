import ReactMarkdown from 'react-markdown'
import { usePromptGenerator } from './hooks'
import LoadingLine from '../../components/LoadingLine'
import Button from '../../components/Button'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Icon } from '@iconify/react/dist/iconify.js'

function PromptGenerator() {
  const { handlePromptChange, handleFileChange, handleSendPrompt, handleKeyDown, data, prompt, textareaRef, loading, error, base64File } = usePromptGenerator()
  const { selectedModel } = useSelector((state: RootState) => state.user)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
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
        {selectedModel === 'gemini-1.5-flash' && (
          <div className='file-selector-container'>
            <input
              id='file-input'
              className='file-selector-input'
              type="file"
              multiple
              onChange={handleFileChange}
            />
            <label htmlFor='file-input' className='file-selector-label'>
              <Icon icon={base64File ? 'mdi:image-sync-outline' : 'mdi:image-plus-outline'} height={24} />
            </label>
          </div>
        )}
        <Button disabled={!prompt || loading} onClick={handleSendPrompt}>Send</Button>
      </div>
    </div>
  )
}


export default PromptGenerator
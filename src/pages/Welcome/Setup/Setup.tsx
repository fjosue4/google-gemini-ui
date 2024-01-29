import Button from '../../../components/Button'
import ProxySetup from './ProxySetup'
import './Setup.scss'
import { useSetup } from './hooks'

function Setup() {

    const { handleNameChange, handleApiKeyChange, handleSubmit, getAPI, name, API_KEY, showApiError, handleProxyChange, proxy } = useSetup()

    return (
        <div className={`auth-container ${API_KEY ? 'active' : ''}`}>
            <div className='input-container'>
                <span>Your Name</span>
                <input
                    type='text'
                    id='name'
                    value={name}
                    autoComplete='off'
                    onChange={handleNameChange}
                />
            </div>
            <div className='input-container'>
                <span>API Key</span>
                <input
                    type='password'
                    id='apiKey'
                    value={API_KEY}
                    autoComplete='new-password'
                    onChange={handleApiKeyChange}
                />
                {showApiError && <p>You need to provide valid API Key! Get it using the left button.</p>}
            </div>
                <ProxySetup proxy={proxy} handleProxyChange={handleProxyChange} />
            <div className='buttons-container'>
                <Button className='start-button secondary' onClick={getAPI}>Get Free API Key</Button>
                <Button className='start-button' onClick={handleSubmit}>Start using Gemini</Button>
            </div>
        </div>
    )
}

export default Setup

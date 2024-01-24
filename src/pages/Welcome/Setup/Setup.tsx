import Button from '@components/Button'
import './Setup.scss'
import { useSetup } from './hooks'

function Setup() {

    const { handleNameChange, handleApiKeyChange, handleSubmit, getAPI, containerRef, name, API_KEY } = useSetup()

    return (
        <div className='auth-container' ref={containerRef}>
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
                    type='password'
                    id='apiKey'
                    value={API_KEY}
                    onChange={handleApiKeyChange}
                />
            </div>
            <div className='buttons-container'>
                {!API_KEY ?
                    <Button className='start-button transparent' onClick={getAPI}>Get Free API Key</Button>
                    :
                    <Button className='start-button' onClick={handleSubmit}>Let's go!</Button>
                }
            </div>
        </div>
    )
}

export default Setup

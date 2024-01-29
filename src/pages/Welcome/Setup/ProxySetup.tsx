import { ChangeEventHandler, useState } from 'react'

interface ProxyProps {
    proxy: string
    handleProxyChange: ChangeEventHandler<HTMLInputElement>
}

function ProxySetup({ handleProxyChange, proxy }: ProxyProps) {
    const [useProxy, setUseProxy] = useState(false)

    const toggleUseProxy = () => {
        setUseProxy((prev) => !prev)
    }

    return (
        <>
            <div className='proxy-toggle' onClick={toggleUseProxy}>
                <label>
                    <input
                        type='checkbox'
                        checked={useProxy}
                    />
                </label>
                <span>I want to use a Proxy</span>
            </div>
            {useProxy && (
                <div className='input-container'>
                    <span>Proxy</span>
                    <input
                        type='text'
                        id='apiKey'
                        value={proxy}
                        autoComplete='new-password'
                        onChange={handleProxyChange}
                    />
                    <p>Enter full proxy before URL, for example:<br />https://corsproxy.io/?</p>
                </div>
            )}
        </>
    )
}

export default ProxySetup

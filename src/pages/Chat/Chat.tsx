import Header from './Header'
import PromptGenerator from './PromptGenerator'
import './Chat.scss'

function Chat() {
    return (
        <div className='chat-page-container'>
            <Header />
            <PromptGenerator />
        </div>
    )
}

export default Chat

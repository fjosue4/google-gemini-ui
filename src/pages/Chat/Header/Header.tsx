import { Icon } from '@iconify/react'
import { useSelector } from 'react-redux'
import './Header.scss'
import Logout from '../../../components/Logout/Logout'
import { RootState } from '../../../store/index'
import { useDispatch } from 'react-redux'
import { clearChat } from '../../../store/user/userSlice'
import ThemeToggle from '../../../components/ThemeToggle'
import { useModelSelector } from './hooks'

function Header() {
    const { name } = useSelector((state: RootState) => state.user)

    const { selectedModel, handleSelectModel } = useModelSelector()

    const dispatch = useDispatch()

    const openGithub = () => {
        window.open('https://github.com/fjosue4/google-gemini-ui')
    }

    return (
        <div className='header'>
            <span>Hello, {name}</span>
            <div className='header-buttons'>
                <select
                    className='model-select-input'
                    value={selectedModel}
                    onChange={handleSelectModel}>
                    <option value='gemini-pro'>Gemini Pro</option>
                    <option value='gemini-1.5-flash'>Gemini Flash</option>
                </select>
                <Icon className='github-icon' icon='mdi:github' height={28} onClick={openGithub} />
                <Icon className='clear-icon' icon='mdi:trashcan-outline' height={28} onClick={() => dispatch(clearChat())} />
                <ThemeToggle />
                <Logout />
            </div>
        </div>
    )
}

export default Header

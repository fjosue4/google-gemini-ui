import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux'
import './Header.scss'
import Logout from '../../../components/Logout/Logout';
import { RootState } from '../../../store/index';

function Header() {
    const { name } = useSelector((state: RootState) => state.user)
    const openGithub = () => {
        window.open('https://github.com/fjosue4/google-gemini-ui')
    }
    return (
        <div className='header'>
            <span>Hello, {name}</span>
            <div className='header-buttons'>
            <Icon className='github-icon' icon='mdi:github' height={28} onClick={openGithub} />
            <Logout />
            </div>
        </div>
    )
}

export default Header

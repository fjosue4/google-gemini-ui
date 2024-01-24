import Logout from '@components/Logout/Logout'
import { RootState } from '@store/index'
import { useSelector } from 'react-redux'
import './Header.scss'

function Header() {
    const { name } = useSelector((state: RootState) => state.user)
    return (
        <div className='header'>
            <span>Hello, {name}</span>
            <Logout />
        </div>
    )
}

export default Header

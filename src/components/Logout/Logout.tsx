import { useDispatch } from 'react-redux'
import { clearUser } from '../../store/user/userSlice'
import Button from '../Button'

function Logout () {
    const dispatch = useDispatch()
    const handleLogout = () => {
        console.log('test2')
        dispatch(clearUser())
    }
    return (
        <Button onClick={handleLogout}>Sign Out</Button>
    )
}

export default Logout

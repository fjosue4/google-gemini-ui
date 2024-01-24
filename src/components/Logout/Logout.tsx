import Button from '@components/Button'
import { clearUser } from '../../store/user/userSlice'
import { useDispatch } from 'react-redux'

function Logout () {
    const dispatch = useDispatch()
    const handleLogout = () => {
        console.log('test2')
        dispatch(clearUser())
    }
    console.log('test3')
    return (
        <Button onClick={handleLogout}>Sign Out</Button>
    )
}

export default Logout

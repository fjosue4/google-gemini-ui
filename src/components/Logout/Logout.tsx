import { clearUser } from '@store/user/userSlice'
import Button from '@components/Button'
import { useDispatch } from 'react-redux'

function Logout () {
    const dispatch = useDispatch()
    const handleLogout = () => {
        console.log('test2')
        dispatch(clearUser())
    }
    console.log('test3')
    return (
        <Button onClick={handleLogout}>Logout</Button>
    )
}

export default Logout

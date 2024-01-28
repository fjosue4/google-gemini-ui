import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useDispatch } from 'react-redux'
import { setTheme } from '../../store/user/userSlice'

export const useThemeToggle = () => {
    const { theme } = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()

    const handleThemeToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        dispatch(setTheme(newTheme))

    }

    return { theme, handleThemeToggle }
}
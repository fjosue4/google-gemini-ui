import { Icon } from '@iconify/react/dist/iconify.js'
import { useThemeToggle } from './hooks'
import './ThemeToggle.scss'

function ThemeToggle() {
    const { theme, handleThemeToggle } = useThemeToggle()
    return (
        <button className='theme-toggle-container' onClick={handleThemeToggle}>
            {theme === 'light' ?
                <Icon className='theme-icon' icon='solar:sun-bold' height={28} />
                :
                <Icon className='theme-icon' icon='akar-icons:moon-fill' height={28} />}
        </button>
    )
}

export default ThemeToggle

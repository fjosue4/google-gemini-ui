import { setUser } from '../../../store/user/userSlice'
import { useState, ChangeEvent } from "react"
import { useDispatch } from "react-redux"

export const useSetup = () => {
    const [name, setName] = useState<string>('')
    const [API_KEY, setAPI_KEY] = useState<string>('')
    const [showApiError, setShowApiError] = useState(false)

    const dispatch = useDispatch()

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleApiKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAPI_KEY(e.target.value)
    }

    const handleSubmit = () => {
        if (API_KEY.length === 0) {
            setShowApiError(true)
            return
        }
        dispatch(setUser({ name, API_KEY }))
    }

    const getAPI = () => {
        window.open('https://makersuite.google.com/app/apikey')
    }

    return { handleNameChange, handleApiKeyChange, handleSubmit, getAPI, name, API_KEY, showApiError }
}
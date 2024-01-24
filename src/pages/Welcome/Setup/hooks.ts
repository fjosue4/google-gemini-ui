import { setUser } from "@store/user/userSlice"
import { useState, useRef, ChangeEvent, useEffect } from "react"
import { useDispatch } from "react-redux"

export const useSetup = () => {
    const [name, setName] = useState<string>('')
    const [API_KEY, setAPI_KEY] = useState<string>('')
    const containerRef = useRef(null)

    const dispatch = useDispatch()

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleApiKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAPI_KEY(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(setUser({ name, API_KEY }))
    }

    const getAPI = () => {
        window.open('https://makersuite.google.com/app/apikey')
    }

    useEffect(() => {
        if (containerRef.current) {
            (containerRef.current as HTMLDivElement).classList.add('animate')
        }
    }, [])
    return { handleNameChange, handleApiKeyChange, handleSubmit, getAPI, containerRef, name, API_KEY }
}
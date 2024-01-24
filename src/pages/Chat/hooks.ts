import { AppDispatch, RootState } from "@store/index"
import { generateTextContent } from "@store/user/dispatchers.user"
import { useState, ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

export const usePromptGenerator = () => {
    const [prompt, setPrompt] = useState('')
    const dispatch: AppDispatch = useDispatch()
    const { data } = useSelector((state: RootState) => state.user.conversation || { data: [] })
  
    const handlePromptChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPrompt(e.target.value)
    }
  
    const handleSendPrompt = () => {
      dispatch(generateTextContent({ prompt }))
    }

    return { handlePromptChange, handleSendPrompt, data, prompt }
}
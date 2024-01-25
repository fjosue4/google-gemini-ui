import { AppDispatch, RootState } from '../../store/index'
import { generateTextContent } from "../../store/user/dispatchers.user"
import { useState, ChangeEvent, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

export const usePromptGenerator = () => {
  const [prompt, setPrompt] = useState('')
  const dispatch: AppDispatch = useDispatch()
  const { data, loading, error } = useSelector((state: RootState) => state.user.conversation || { data: [] })

  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
  }

  const handleSendPrompt = () => {
    if (prompt) {
      dispatch(generateTextContent({ prompt }))
      setPrompt('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendPrompt()
    }
  }

  const textareaRef = useRef(null)

  function textAreaAdjust(element: HTMLTextAreaElement | null) {
    if (element) {
      element.style.height = '1px'
      element.style.height = (25 + element.scrollHeight) + 'px'
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textAreaAdjust(textareaRef.current)
    }
  }, [prompt])

  return { handlePromptChange, handleSendPrompt, handleKeyDown, data, prompt, textareaRef, loading, error }
}

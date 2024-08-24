import { useState, ChangeEvent, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { generateTextContent } from "../../store/user/dispatchers.user"

export const usePromptGenerator = () => {
  const [prompt, setPrompt] = useState('')
  const [base64File, setBase64File] = useState<string | null>(null)
  const dispatch: AppDispatch = useDispatch()
  const { data, loading, error } = useSelector((state: RootState) => state.user.conversation || { data: [] })

  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]  // Limit to one file
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1]
        setBase64File(base64String)
      }
      reader.onerror = (error) => {
        console.error("File could not be read:", error)
        setBase64File(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSendPrompt = () => {
    if (prompt) {
      dispatch(generateTextContent({ prompt, base64File }))
      setPrompt('')
      setBase64File(null)
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

  return { handlePromptChange, handleFileChange, handleSendPrompt, handleKeyDown, data, prompt, textareaRef, loading, error, base64File }
}

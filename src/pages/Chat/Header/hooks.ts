import { ChangeEvent } from 'react'
import { AppDispatch, RootState, useSelector } from '../../../store'
import { useDispatch } from 'react-redux'
import { setSelectedModel } from '../../../store/user/userSlice'

export const useModelSelector = () => {
    const { selectedModel } = useSelector((state: RootState) => state.user)

    const dispatch: AppDispatch = useDispatch()

    const handleSelectModel = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedModel(e.target.value))
      }

      return { selectedModel, handleSelectModel}
}
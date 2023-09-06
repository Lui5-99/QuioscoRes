import { useContext } from 'react'
import QuioscoContext from '@/context/QuioscoProvider'

const useCategories = () => {
    return useContext(QuioscoContext)
}

export default useCategories


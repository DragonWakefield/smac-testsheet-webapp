import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()



    const logout = async () => {
        setError(null)
        setIsPending(true)

        signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' })

                setIsPending(false)
                setError(null)
            })
            .catch((err) => {
                setError(err.message)
                setIsPending(false)
            })
    }

    return { logout, error, isPending }
}
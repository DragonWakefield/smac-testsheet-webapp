import { useContext } from 'react'
import { RankContext } from '../context/RankContext'

export const useRank = () => {
    const context = useContext(RankContext)

    if (context === undefined) {
        throw new Error("useRank() must be used inside a RankProvider")
    }

    return context
}


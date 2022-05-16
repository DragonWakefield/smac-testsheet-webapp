import { useContext } from 'react'
import { RankContext } from '../context/RankContext'

export const useRank = () => {
    const context = useContext(RankContext)

    if (context === undefined) {
        throw new Error("useTheme() must be used inside a ThemeProvider")
    }

    return context
}


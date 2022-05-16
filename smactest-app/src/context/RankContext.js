import { createContext, useReducer } from 'react'

export const RankContext = createContext()

const rankReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_RANK':
            return {...state, rank: action.payload}
        default:
            return state
    }
}

export function RankProvider({ children }) {
    const [state, dispatch] = useReducer(rankReducer, {
        rank: null
    })

    const changeRank = (rank) => {
        dispatch({type:'CHANGE_RANK', payload: rank})
    }

    return (
        <RankContext.Provider value={{...state, changeRank}}>
            {children}
        </RankContext.Provider>
    )
}
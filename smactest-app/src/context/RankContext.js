import { createContext, useReducer } from 'react'

export const RankContext = createContext()

const rankReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_RANK':
            return {...state, rank: action.payload}
        case 'CHANGE_GROUP':
            return {...state, group: action.payload}
        default:
            return state
    }
}

export function RankProvider({ children }) {
    const [state, dispatch] = useReducer(rankReducer, {
        rank: null,
        group: null
    })

    const changeRank = (rank) => {
        dispatch({type:'CHANGE_RANK', payload: rank})
    }

    const changeGroup = (group) => {
        dispatch({type:'CHANGE_GROUP', payload: group})
    }

    return (
        <RankContext.Provider value={{...state, changeRank, changeGroup}}>
            {children}
        </RankContext.Provider>
    )
}
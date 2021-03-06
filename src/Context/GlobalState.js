import React , {createContext , useReducer} from "react"
import AppReducer from './AppReducer'

const initialState = {
    transactions :  []
}

// Create COntext
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , initialState)

    // Actions making call to reducers
    
    function deleteTransaction(id){
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id 
        })
    }

    function addTransaction(transaction){
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
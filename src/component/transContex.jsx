import { createContext, useReducer } from "react"
import TransactionReducer from "./transactionReducer";

const initionlTransition = [];
export const TransactionContext = createContext(initionlTransition)

// export default TransactionContext;

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initionlTransition)

    function addtransation(transobj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transobj
        })

    }

    function dltTransaction(id) {
        dispatch({
            type: "DLT_TRANSACTION",
            payload: id
        })
    }
    return (
        <TransactionContext.Provider value={{
            transaction: state,
            addtransation,
            dltTransaction

        }}>
            {children}
        </TransactionContext.Provider>
    )
}
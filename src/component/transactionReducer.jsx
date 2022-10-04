

const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION": {
            return [action.payload, ...state]
        }
        case "DLT_TRANSACTION": {
            return state.filter(transaction => transaction.id !== action.payload)


        }

        default:
            return state;

    }
})

export default TransactionReducer;

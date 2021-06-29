import data  from './../quotes.json'
import {QuoteActionType} from "./types";


const quoteReducer = (state = data ,action) => {
    switch (action.type) {
        case QuoteActionType.SET:
            return {...state,
                item:state[action.payload]
            }
        default:
            return state
    }
}




export default quoteReducer

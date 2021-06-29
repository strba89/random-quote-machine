import {QuoteActionType} from "./types";


export const setQuote = quoteID => ({
    type: QuoteActionType.SET,
    payload: quoteID
})
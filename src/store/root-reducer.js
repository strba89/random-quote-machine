import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import quoteReducer from './reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['quotes']
};

const rootReducer = combineReducers({
    quote: quoteReducer,
});

export default persistReducer(persistConfig, rootReducer);
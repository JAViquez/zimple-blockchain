import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from '../reducers'

const initialState = {
    loadingBlockchain: true,
    blockchain: [],
    isValidatingBlockchain: true,
    isValidBlockchain: false,
    revalidateBlockchain: false
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))
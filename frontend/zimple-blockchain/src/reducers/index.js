import { SET_LOADIND_BLOCKCHIAN_STATE, ADD_BLOCK_TO_BLOCKCHAIN, SET_READY_BLOCKCHAIN_STATE } from '../actions'

export const reducers = (state, action) => {
    switch (action.type) {
        case SET_LOADIND_BLOCKCHIAN_STATE:
            return { ...state, loadingBlockchain: true }
        case ADD_BLOCK_TO_BLOCKCHAIN:
            return {...state, blockchain: [...state.blockchain, action.payload]}
        case SET_READY_BLOCKCHAIN_STATE:
            return {...state, loadingBlockchain: false}
        default:
            return state
    }
}
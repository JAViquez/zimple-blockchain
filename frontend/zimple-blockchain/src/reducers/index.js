import { SET_LOADIND_BLOCKCHIAN_STATE, 
        ADD_BLOCK_TO_BLOCKCHAIN, 
        SET_READY_BLOCKCHAIN, 
        FILL_BLOCKCHAIN, 
        SET_VALIDATING_BLOCKCHAIN_STATE,
        SET_BLOCKCHAIN_STATE,
        SET_READY_BLOCKCHAIN_STATE } from '../actions'

export const reducers = (state, action) => {
    switch (action.type) {
        case SET_LOADIND_BLOCKCHIAN_STATE:
            return { ...state, loadingBlockchain: true }
        case ADD_BLOCK_TO_BLOCKCHAIN:
            return {...state, blockchain: [...state.blockchain, action.payload], revalidateBlockchain: true}
        case SET_READY_BLOCKCHAIN:
            return {...state, loadingBlockchain: false}
        case FILL_BLOCKCHAIN:
            return { ...state, blockchain: [...action.payload], revalidateBlockchain: true}
        case SET_VALIDATING_BLOCKCHAIN_STATE:
            return { ...state, isValidatingBlockchain: true }
        case SET_BLOCKCHAIN_STATE:
            return { ...state, isValidBlockchain: action.payload }
        case SET_READY_BLOCKCHAIN_STATE:
            return { ...state, isValidatingBlockchain: false, revalidateBlockchain: false }
        default:
            return state
    }
}
import { convertDataToObj } from '../services/convertDataToObj'

export const SET_LOADIND_BLOCKCHIAN_STATE = "setLoadingBlockchain"
export const ADD_BLOCK_TO_BLOCKCHAIN = "addBlockToBlockChain"
export const SET_READY_BLOCKCHAIN = "setReadyBlockchain"
export const FILL_BLOCKCHAIN = "fillBlockchain"
export const SET_VALIDATING_BLOCKCHAIN_STATE = "setValidatingBlockchainState"
export const SET_BLOCKCHAIN_STATE = "setBlockchainState"
export const SET_READY_BLOCKCHAIN_STATE = "setReadyBlockchainState"

export const setLoadingBlockchainState = () => ({type: SET_LOADIND_BLOCKCHIAN_STATE, payload: null})
export const addBlockToBlockchain = block => ({type: ADD_BLOCK_TO_BLOCKCHAIN, payload: block})
export const setReadyBlockchain = () => ({type: SET_READY_BLOCKCHAIN, payload: null})
export const fillBlockchain = blockchain => ({type: FILL_BLOCKCHAIN, payload: blockchain})
export const setValidatingBlockchainState = () => ({type: SET_VALIDATING_BLOCKCHAIN_STATE, payload: null})
export const setBlockchainState = (state) => ({type: SET_BLOCKCHAIN_STATE, payload: state })
export const setReadyBlockchainState = () => ({type: SET_READY_BLOCKCHAIN_STATE, payload: null})

export const addNewBlockData = payload => {
    return dispatch => {
        dispatch(setLoadingBlockchainState(payload))
        const obj = convertDataToObj(payload)
        const url = "http://localhost:7001/blocks"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(block => {
            dispatch(addBlockToBlockchain(block))
            dispatch(setReadyBlockchain(block))
        })
        .catch((e) => console.log("error while updating database, error was ", e))
    }
}

export const getBlockchainFromDB = () => {
    return dispatch => {
        dispatch(setLoadingBlockchainState())
        const url = "http://localhost:7001/blockchain"
        fetch(url, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(blockchain => {
            dispatch(fillBlockchain(blockchain))
            dispatch(setReadyBlockchain())
        })
        .catch((e) => console.log("error while loading blockchain from db, error was ", e))
    }
}

export const validateBlockchain = () => {
    return dispatch => {
        dispatch(setValidatingBlockchainState())
        const url = "http://localhost:7001/verifyBlockchain"
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(validBlockchain => {
            dispatch(setBlockchainState(validBlockchain.isValid))
            dispatch(setReadyBlockchainState())
        })
        .catch((e) => console.log("error while getting blockchain state, error was ", e))
    }
}
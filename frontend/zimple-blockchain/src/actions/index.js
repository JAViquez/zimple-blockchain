import { convertDataToObj } from '../services/convertDataToObj'

export const SET_LOADIND_BLOCKCHIAN_STATE = "setLoadingBlockchain"
export const ADD_BLOCK_TO_BLOCKCHAIN = "addBlockToBlockChain"
export const SET_READY_BLOCKCHAIN_STATE = "setReadyBlockchain"

export const setLoadingBlockchainState = data => ({type: SET_LOADIND_BLOCKCHIAN_STATE, payload: data})
export const addBlockToBlockchain = block => ({type: ADD_BLOCK_TO_BLOCKCHAIN, payload: block})
export const setReadyBlockchain = block => ({type: SET_READY_BLOCKCHAIN_STATE, payload: block})

export const addNewBlockData = payload => {
    return dispatch => {
        dispatch(setLoadingBlockchainState(payload))
        const obj = convertDataToObj(payload)
        console.log("payload ", obj)
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
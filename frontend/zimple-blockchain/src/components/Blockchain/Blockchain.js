import React from 'react'
import PropTypes from 'prop-types'
import Block from '../Block'
import Grid from '@material-ui/core/Grid'
import { orderBlockchainData } from '../../services/orderBlockchainData'


const Blockchain = ({blockchain}) => {
    const renderBlockchain = () => {
        const newBlockchain = orderBlockchainData(blockchain)
        return newBlockchain.map(block => <Block key={block.blockId} block={block} />)
    }

    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}>
                {blockchain.length > 0 ? 
                    renderBlockchain() : 
                    <div className="alert alert-info" role="alert">
                        No hay bloques actualmente
                    </div>
                }
        </Grid>
    )
}

Blockchain.propTypes = {
    blockchain: PropTypes.array.isRequired,
}

export default Blockchain

import React from 'react'
import BlockContainer from '../../containers/BlockContainer'
import BlockchainContainer from '../../containers/BlockchainContainer'
import BlockchainStateContainer from '../../containers/BlockchainStateContainer'

const Body = () => {
    return (
        <div className="container">
            <br />
            <BlockContainer />
            <br />
            <BlockchainStateContainer />
            <br />
            <BlockchainContainer />
        </div>
    )
}

export default Body

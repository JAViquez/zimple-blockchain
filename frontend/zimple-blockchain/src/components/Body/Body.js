import React from 'react'
import BlockContainer from '../../containers/BlockContainer'
import BlockchainContainer from '../../containers/BlockchainContainer'

const Body = () => {
    return (
        <div className="container">
            <br />
            <BlockContainer />
            <br />
            <BlockchainContainer />
        </div>
    )
}

export default Body

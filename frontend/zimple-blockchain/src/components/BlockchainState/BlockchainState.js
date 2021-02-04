import React from 'react'
import PropTypes from 'prop-types'

const BlockchainState = ({ isValidBlockchain, revalidateBlockchain }) => {
    return (
        revalidateBlockchain ? 
        <div className="alert alert-warning" role="alert">
            Recuerde validar el blockchain luego de agregar bloques
        </div> 
        :
        isValidBlockchain ? 
        <div className="alert alert-success" role="alert">
            El blockchain es válido
        </div> :
        <div className="alert alert-danger" role="alert">
            El blockchain es invalido
        </div>
    )
}

BlockchainState.propTypes = {
    isValidBlockchain: PropTypes.bool,
    revalidateBlockchain: PropTypes.bool.isRequired,
}

export default BlockchainState

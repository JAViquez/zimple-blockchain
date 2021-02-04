import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

const Block = ({ block }) => {
    return (
        <Grid container item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            >
                <div className="card">
                    <div className="card-body">
                        <h6>
                            Id: {block.blockId}
                        </h6>
                        <p>
                            Data: {block.data}
                        </p>
                        <p>
                            Nonce: {block.nonce}
                        </p>
                        <p>
                            Hash: {block.hash}
                        </p>
                        <p>
                            PrevHash: {block.prevHash}
                        </p>
                    </div>
                </div>
        </Grid>
    )
}

Block.propTypes = {
    block: PropTypes.shape({
        blockId: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
        nonce: PropTypes.number.isRequired,
        hash: PropTypes.string.isRequired,
        prevHash: PropTypes.string.isRequired,
    })
}

export default Block

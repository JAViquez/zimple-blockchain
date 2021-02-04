import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { validateBlockchain } from '../../actions'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import BlockchainState from '../../components/BlockchainState'
import CircularProgress from '@material-ui/core/CircularProgress'

class BlockchainStateContainer extends Component {
    static propTypes = {
        validateBlockchainFunc: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.validateBlockchainFunc()
    }


    render() {
        const { isValidatingBlockchain, isValidBlockchain, revalidateBlockchain, validateBlockchainFunc } = this.props
        return (
            <div className="card">
                <div className="card-header">
                    <h5>
                        Validación del blockchain
                    </h5>
                </div>
                <div className="card-body">
                    {isValidatingBlockchain ?
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center">
                            <CircularProgress /> 
                        </Grid> 
                        :
                        <Grid container item
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            xs={12}>
                                <Grid item>
                                    <BlockchainState isValidBlockchain={isValidBlockchain} revalidateBlockchain={revalidateBlockchain} />
                                </Grid>
                                <Grid item>
                                    <button type="button" className="btn btn-primary" onClick={() => validateBlockchainFunc()}>Validar blockchain</button>
                                </Grid>
                        </Grid>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isValidatingBlockchain: state.isValidatingBlockchain,
    isValidBlockchain: state.isValidBlockchain,
    revalidateBlockchain: state.revalidateBlockchain,
})

const mapDispatchToProps = (dispatch) => ({
    validateBlockchainFunc: () => dispatch(validateBlockchain())
})

export default connect(mapStateToProps, mapDispatchToProps)(BlockchainStateContainer)
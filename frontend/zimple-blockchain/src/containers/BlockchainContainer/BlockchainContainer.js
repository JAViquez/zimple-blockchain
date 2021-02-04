import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getBlockchainFromDB } from '../../actions'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Blockchain from '../../components/Blockchain'

class BlockchainContainer extends Component {
    static propTypes = {
        blockchain: PropTypes.array.isRequired,
        getBlockchain: PropTypes.func.isRequired,
        loadingBlockchain: PropTypes.bool,
    }

    componentDidMount() {
        this.props.getBlockchain()
    }

    render() {
        const { loadingBlockchain, blockchain } = this.props
        return (
            loadingBlockchain ?
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                    <CircularProgress /> 
            </Grid> 
            :
            <div className="card">
                <div className="card-header">
                    <h5>
                        El Blockchain esta formado por los siguientes bloques.
                    </h5>
                </div>
                <div className="card-body">
                    <Blockchain blockchain={blockchain} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    blockchain: state.blockchain,
    loadingBlockchain: state.loadingBlockchain
})

const mapDispatchToProps = (dispatch) => ({
    getBlockchain: () => dispatch(getBlockchainFromDB())
})

export default connect(mapStateToProps, mapDispatchToProps)(BlockchainContainer)

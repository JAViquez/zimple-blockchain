import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Create from '../../components/Block/Create'
import { addNewBlockData, getBlockchainFromDB } from '../../actions'

const url = "ws://localhost:7002"
const connection = new WebSocket(url)

class BlockContainer extends Component {
    static propTypes = {
        submitData: PropTypes.func.isRequired,
    }
    
    constructor() {
        super()
        connection.onopen = () => {}
        
        connection.onerror = (error) => {
            console.log("WebSocket error: ", error)
        }
        
        connection.onmessage = () => {
            this.props.getBlockchain()
        }
    }
    
    handleNewBlockSubmission = async (data) => {
        await this.props.submitData(data)
        connection.send("New block")
    }

    render() {
        return (
            <Create submitData={this.handleNewBlockSubmission} />
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    submitData: data => dispatch(addNewBlockData(data)),
    getBlockchain: () => dispatch(getBlockchainFromDB()),
})

export default connect(null, mapDispatchToProps)(BlockContainer)

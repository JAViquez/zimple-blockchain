import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Create from '../../components/Block/Create'
import { addNewBlockData } from '../../actions'

class BlockContainer extends Component {
    static propTypes = {
        submitData: PropTypes.func.isRequired,
    }

    render() {
        const { submitData } = this.props
        return (
            <Create submitData={submitData} />
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    submitData: data => dispatch(addNewBlockData(data))
})

export default connect(null, mapDispatchToProps)(BlockContainer)

import React from 'react'
import Grid from '@material-ui/core/Grid'
import BlockContainer from '../../containers/BlockContainer'

const Body = () => {
    return (
        <Grid container item
            xs={12}
            spacing={2}>
                <Grid item
                    xs={12}>
                        <BlockContainer />
                </Grid>

        </Grid>
    )
}

export default Body

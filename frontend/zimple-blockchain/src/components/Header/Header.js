import React from 'react'
import Grid from '@material-ui/core/Grid'

import './Header.css'

const Header = () => {
    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            id="header"
            className="bg-primary">
                <h2>
                    Zimple Blockchain
                </h2>
        </Grid>
    )
}

export default Header

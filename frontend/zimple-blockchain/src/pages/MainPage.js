import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Grid from '@material-ui/core/Grid'

const MainPage = () => {
    return (
        <Grid container item>
            <Header />
            <Body />
        </Grid>
    )
}

export default MainPage

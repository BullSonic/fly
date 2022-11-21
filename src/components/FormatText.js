import React, { useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'

const MDTitle = (props) => <Typography variant='h6'>
    {props.children}
</Typography>

const MDText = (props) => <Typography
    variant='subtitle1'
    sx={{ margin: 2 }}>
    {props.children}
</Typography>

const MDImage = (props) => (<Box sx={{ width: '100%' }} textAlign={'center'}>
    {props.children}
</Box>)

const MDPage = (props) => {
    const { path, pic } = props

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return <Container display={'flex'}>
        <AppAppBar />
        <Box sx={{ minHeight: '64vh' }}>
            {pic ? <Box textAlign={'center'} marginTop={3}><img src={pic} alt="product" /></Box> : null}

            {path}
            {props.children}
        </Box>
        <AppFooter />
    </Container>
}

export { MDTitle, MDText }
export default MDPage

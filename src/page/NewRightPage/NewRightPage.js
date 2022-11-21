import * as React from 'react';
import AppFooter from '../../components/AppFooter';
import withRoot from '../../modules/withRoot';
import { Box } from '@mui/material';

function Index(props) {
    return (
        <Box display={'flex'} flex={1} flexDirection={'column'}>
            {props.children}
            <AppFooter />
        </Box>
    );
}

export default Index;

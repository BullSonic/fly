import React from 'react'
import { useParams } from 'react-router-dom'
import MDPage from '../../components/FormatText';
import { Box, Button, Container } from '@mui/material';
import withRoot from '../../modules/withRoot';
import { productList } from '../../config/productlist';

const ProductDetail = () => {
    const { pid } = useParams();
    const item = productList[pid];

    if (!item) { console.log('null'); return null; }

    return <React.Fragment>
        <Container sx={{ display: 'flex', flex: '1', flexDirection: 'column' }}>
            <MDPage path={'/' + pid + '.md'} id={item.title} defaultMessage={item.title} pic={item.picUrl} >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Button
                        color="secondary"
                        variant="contained"
                        size="medium"
                        component="a"
                        // href="/sign-up/"
                        sx={{ minWidth: 200, maxWidth: 300, alignSelf: 'center', marginBottom: 3 }}
                        onClick={() => window.open(`${item.local_url}`, '_blank')}
                    >
                        下载试用
                    </Button>
                </Box>
            </MDPage>
        </Container>
    </React.Fragment>
}

export default withRoot(ProductDetail)

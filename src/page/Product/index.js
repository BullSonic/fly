import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { productList } from '../../config/productlist';
import AppAppBar from '../../components/AppAppBar';
import { MDTitle } from '../../components/FormatText';
import AppFooter from '../../components/AppFooter';
import { useIntl } from 'react-intl';

const Product = () => {
    const navigate = useNavigate();
    const intl = useIntl();
    return (
        <Container display={'flex'} sx={{ minHeight: '68vh', margin: '12' }}>
            <AppAppBar />
            <Box sx={{ margin: 5, minHeight: '61vh' }}>
                <MDTitle> {intl.formatMessage({ id: 'categoriesTitle' })}</MDTitle>
                <List>
                    {
                        Object.keys(productList).map(p => <ListItem
                            sx={{ cursor: 'pointer', textUnderlinePosition: 'auto', textDecoration: 'underline' }}
                            onClick={() => navigate(`/product_detail/${p}`)}
                        >
                            <ListItemIcon><AppShortcutIcon /></ListItemIcon>
                            <Typography variant='subtitle1'>
                                {intl.formatMessage({ id: productList[p].title })}
                            </Typography>
                            <ListItemIcon sx={{ marginLeft: 2 }}><InfoOutlinedIcon /></ListItemIcon>
                        </ListItem>)
                    }
                </List>
            </Box>
            <AppFooter />
        </Container>
    )
}

export default Product

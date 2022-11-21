import React, { useEffect } from 'react'
import { Container, List, ListItem, ListItemIcon } from '@mui/material'
import supportlist from '../../config/supportlist';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AppAppBar from '../../components/AppAppBar';
import { MDText, MDTitle } from '../../components/FormatText'
import AppFooter from '../../components/AppFooter';

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container display={'flex'} >
            <AppAppBar />
            <List>
                {
                    supportlist.map(item => <ListItem
                        sx={{ color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                        key={item.id}
                    >
                        <ListItemIcon><HelpOutlineIcon />
                            <MDTitle>
                                {item.title}
                            </MDTitle>
                        </ListItemIcon>
                        <MDText>{item.desc}</MDText>
                    </ListItem>)
                }
            </List>
            <AppFooter />
        </Container>
    )
}

export default FAQ

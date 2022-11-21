import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line
export default function (props) {
    const { id, title, picUrl, desc } = props;
    const navigate = useNavigate();

    return (
        <Box
            style={{
                margin: 2,
                marginRight: 5,
                paddingBottom: 5,
                paddingLeft: 2,
                cursor: 'pointer',
            }}
            onClick={() => navigate(`/product_detail/${id}`)}
        >
            <Typography variant='h6' noWrap textOverflow={'ellipsis'} sx={{ marginTop: 1 }}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirction: 'column', flex: 1 }}>
                <CardMedia
                    component='img'
                    sx={{ width: 150, height: 150 }}
                    image={picUrl}
                    alt='product image'
                />
                <CardContent
                    sx={{ height: 147, paddingTop: 0, paddingBottom: 1, overflow: 'clip' }}
                >
                    <Typography mt={0} variant="subtitle1" gutterBottom paragraph
                        sx={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4 }}
                    >
                        {desc}
                    </Typography>
                </CardContent>
            </Box>
        </Box >
    )
}

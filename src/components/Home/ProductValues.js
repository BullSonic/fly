import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../Typography';
import text from '../../config/text';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          {
            text.values.map((v, index) => (
              <Grid key={index} item xs={12} md={4}>
                <Box sx={item}>
                  <Box
                    component="img"
                    src={v.icon}
                    alt="suitcase"
                    sx={{ height: 55 }}
                  />
                  <Typography variant="h6" sx={{ my: 5 }}>
                    {v.title}
                  </Typography>
                  <Typography variant="h5">
                    {v.paragraph}
                  </Typography>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;

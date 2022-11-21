import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../Typography';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';

function ProductSmokingHero() {
  var navigate = useNavigate();
  const intl = useIntl();
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span"
          onClick={() => navigate('/FAQ')}
        >
          {intl.formatMessage({ id: 'supportTitle' })}
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        {intl.formatMessage({ id: 'supportParagraph' })}
      </Typography>
      <Box
        component="img"
        src="/static/themes/onepirate/producBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;

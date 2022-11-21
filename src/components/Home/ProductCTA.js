import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../Typography';
import TextField from '../TextField';
import Snackbar from '../Snackbar';
import Button from '../Button';
import { useIntl } from 'react-intl';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);
  const [userRequest, setUserRequest] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(`mailto:tronjin21+service@gmail.com?subject=request for the simulator&body=${userRequest}`);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const intl = useIntl();

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                {intl.formatMessage({ id: 'consultTitle' })}
              </Typography>
              <Typography variant="h5">
                {intl.formatMessage({ id: 'consultParagraph1' })}
              </Typography>
              <TextField
                noBorder
                value="tronjin21+service@gmail.com"
                readOnly
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 1 }}
              />
              <TextField
                noBorder
                placeholder={intl.formatMessage({ id: 'consultPlaceholder' })}
                variant="standard"
                sx={{ width: '100%', mt: 1, mb: 2 }}
                onChange={(event) => setUserRequest(event.target.value)}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                {intl.formatMessage({ id: 'consultButtonText' })}
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="/Admin/pic/2006102076990.jpg"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message={intl.formatMessage({ id: 'consultResponse' })}
      />
    </Container>
  );
}

export default ProductCTA;

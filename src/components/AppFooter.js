import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from './Typography';
import TextField from './TextField';
import withRoot from '../modules/withRoot';
import redirectlist from '../config/redirectlist';
import { useIntl } from 'react-intl';
import { useLocale } from '../provider/hooks';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="http://www.thebettersoft.com/">
        theBetterSoft.com
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'zh-CN',
    name: '中文',
  },
  {
    code: 'en-US',
    name: 'English',
  },
];

function AppFooter() {
  const intl = useIntl();
  const { setLocale, locale } = useLocale();
  return (
    <Box display={'flex'} flexDirection={'column'} my={2}>
      <Typography
        component="footer"
        sx={{ display: 'flex', bgcolor: 'secondary.light' }}
      >
        <Container sx={{ my: 8, display: 'flex' }}>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={4} md={3}>
              <Grid
                container
                direction="column"
                justifyContent="flex-end"
                spacing={2}
                sx={{ height: 120 }}
              >
                <Grid item sx={{ display: 'flex' }}>
                  <Box component="a" href="http://www.thebettersoft.com/" sx={iconStyle}>
                    <img
                      src="/static/themes/onepirate/appFooterFacebook.png"
                      alt="Facebook"
                    />
                  </Box>
                  <Box component="a" href="http://www.thebettersoft.com/" sx={iconStyle}>
                    <img
                      src="/static/themes/onepirate/appFooterTwitter.png"
                      alt="Twitter"
                    />
                  </Box>
                </Grid>
                <Grid item>
                  <Copyright />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h6" marked="left" gutterBottom>
                {/* 友情链接 */}
                {intl.formatMessage({ id: "link", defaultMessage: 'Links' })}
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                {
                  redirectlist.map(u => <Box component="li" key={u.id} sx={{ py: 0.5 }}>
                    <Link target='_blank' href={u.url}>{u.title}</Link>
                  </Box>)
                }
              </Box>
            </Grid>
            <Grid item xs={5} sm={4} md={2}>
              <Typography variant="h6" marked="left" gutterBottom>
                {intl.formatMessage({ id: "language", defaultMessage: "language" })}
              </Typography>
              <TextField
                select
                size="medium"
                variant="standard"
                SelectProps={{
                  native: true,
                }}
                sx={{ mt: 1, width: 150 }}
                onChange={(e) => { setLocale(e.target.value) }}
              >
                {LANGUAGES.map((language) => (
                  <option value={language.code} key={language.code} selected={locale === language.code}
                  >
                    {language.name}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Container>
      </Typography>
    </Box>
  );
}

export default withRoot(AppFooter)
import * as React from 'react';
import AppBar from './AppBar';
import Toolbar from './Toolbar';

import { makeStyles } from '@mui/styles';
import Typography from './Typography';
import { useIntl } from 'react-intl';
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundImage: 'url("/images/back.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  },
}));

function AppAppBar() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <div>
      <AppBar className={classes.header} position="fixed" sx={{ justifyContent: 'center' }} >
        <Toolbar sx={{ justifyContent: 'center', alignContent: 'center' }}>
          <Typography variant='h4' color='white'>
            {intl.formatMessage({ id: 'headerTitle1' })}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;

import * as React from 'react';
import ProductCategories from '../../components/Home/ProductCategories';
import ProductSmokingHero from '../../components/Home/ProductSmokingHero';
import ProductHero from '../../components/Home/ProductHero';
import ProductValues from '../../components/Home/ProductValues';
import ProductCTA from '../../components/Home/ProductCTA';
import withRoot from '../../modules/withRoot';
import { Container } from '@mui/material';
import AppFooter from '../../components/AppFooter';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductCategories />
      <ProductValues />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);

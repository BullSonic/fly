import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Typography from '../Typography';
import ProductHeroLayout from './ProductHeroLayout';
import text from '../../config/text';
import { useIntl } from 'react-intl';

const backgroundImage = '/images/back.png';

export default function ProductHero() {
  const navigate = useNavigate()
  const intl = useIntl();
  let hed = {};
  Object.assign(hed, text.header);
  ((fd) => Object.keys(fd).map(
    s => (fd[s] = intl.formatMessage({ id: fd[s], defaultMessage: fd[s] }))
  ))(hed);
  const { title1, title2, paragraph1, buttonText, paragraph2 } = hed;

  return (
    <React.Fragment>
      <ProductHeroLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: '#0E1C5C', // 14 28 92
          // backgroundColor: '#7fc7d9', // Average color of the background image.
          backgroundPosition: 'center',
        }}
      >
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: 'none' }}
          src={backgroundImage}
          alt="increase priority"
        />
        <Typography color="inherit" align="center" variant="h2">
          {title1}{/* 卓越短信网关模拟器 */}
        </Typography>
        <Typography color="inherit" align="center" variant="h2" marked="center">
          {title2}{/* 从繁琐的协议联调中解放出来 */}
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
        >
          {paragraph1}{/*减少 - 70 % 远程联调工作量*/}
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          component="a"
          href="/product"
          sx={{ minWidth: 200 }}
        >
          {buttonText}{/* 立即咨询 */}
        </Button>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          {paragraph2}{/* 获得协议联调新体验 */}
        </Typography>
      </ProductHeroLayout>
    </React.Fragment>
  );
}

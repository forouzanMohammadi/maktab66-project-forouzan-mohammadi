import React from 'react';
import { Box, Typography, Grid, Link} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/material/styles';

const AppbarStyle = styled('div')(() => ({
  position: 'static',
  display: 'flex',
  justifyContent: 'space-evenly',
  top: '0',
  width: '100%',
  height: '10vh !important',
  direction: 'rtl',
  background: '#F24B4B',
}));

function Header() {

  return (
    <AppbarStyle>
      <Grid>
        <Typography className='adminH5' mt={2} variant="h5" color={'#fff'}>
          پنل مدیریت
        </Typography>
      </Grid>
      <Grid sx={{ display: 'flex'}}>
        <Box mt={2}>
            <Link href="/adminPanel" className='tab1 tab' underline="none">
              کالاها
            </Link>
            <Link href="/quantity" className='tab2 tab' underline="none">
             موجودی و قیمت‌ها
            </Link>
            <Link href="/orders" className='tab3 tab' underline="none">
              سفارش‌ها
            </Link>
        </Box>
      </Grid>
      <Grid mt={2} sx={{display:"flex"}} >
        <Link mx={2} className='exit' href="/" underline="none" color="#fff">
          خروج
        </Link>
        <Link  href="/" color="#fff">
        <LogoutIcon mt={4}/>
        </Link>
      </Grid>
    </AppbarStyle>
  )
};

export default Header;

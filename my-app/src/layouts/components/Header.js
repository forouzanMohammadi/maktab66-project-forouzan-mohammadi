import React from 'react'
import { Box, Typography, Tabs, Tab, Grid, Link } from '@mui/material'
import { styled } from '@mui/material/styles'

const AppbarStyle = styled('div')(() => ({
  position: 'static',
  top: '0',
  width: '100%',
  zIndex: '1000',
  direction: 'rtl',
  boxShadow: 'none',
  background: 'rgba(208, 170, 208, 0.55)',
  backdropFilter: 'blur(16px) saturate(180%)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
}))
function Header() {
  const [value, setValue] = React.useState('one')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <AppbarStyle
      sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 4 }}
    >
      <Grid>
        <Typography sx={{ mx: 3 }} variant="h4">
          پنل مدیریت
        </Typography>
      </Grid>
      <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <Tabs
            Color="black"
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Link href="/adminPanel" underline='none' color={'primary'} >
              <Tab value="one" label="کالاها" />
            </Link>
            <Link href="/quantity" underline='none' color={'primary'} >
              <Tab value="two" label="موجودی و قیمت‌ها" />
            </Link>
            <Link href="/orders" underline='none' color={'primary'} >
              <Tab value="three" label="سفارش‌ها" />
            </Link>
          </Tabs>
        </Box>
      </Grid>
      <Grid>
        <Link sx={{ mt: 2 }} href="/" underline="none" color="secondary">
          صفحه اصلی
        </Link>
      </Grid>
    </AppbarStyle>
  )
}

export default Header

import React from 'react';
import DropDownProducts from 'layouts/components/navbar/DropDownProducts';
import DrawerMenu from 'layouts/components/navbar/DrawerMenu';
import DropDownAdmin from 'layouts/components/navbar/DropDownAdmin';
import {
  Grid,
<<<<<<< HEAD
=======
  Tab,
>>>>>>> feat/auth
  Toolbar,
  InputBase,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Link,
<<<<<<< HEAD
} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import image from 'assets/images/thisLogo-removebg-preview.png';
import iranSans from 'assets/fonts/iranSans/Sansa4fran3.woff';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
=======
} from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined'
import image from 'assets/images/theLogo.png'
import iranSans from 'assets/fonts/iranSans/Sansa4fran3.woff'
import SearchIcon from '@mui/icons-material/Search'
>>>>>>> feat/auth

const myTheme = createTheme({
  typography: {
    fontFamily: 'iranSans',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'iranSans',
          src: `url(${iranSans}) format("truetype")`,
        },
      },
    },
  },
})

const AppbarStyle = styled('div')(() => ({
  position: 'static',
  top: '0',
  width: '100%',
  zIndex: '1000',
  direction: 'rtl',
  boxShadow: 'none',
<<<<<<< HEAD
  background: '#F24B4B',
=======
  background: 'rgba(208, 170, 208, 0.55)',
>>>>>>> feat/auth
  backdropFilter: 'blur(16px) saturate(180%)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
}));

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  zIndex: '100',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#fff',
  color: '#000',
  marginRight: theme.spacing(-8),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(10),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar() {
  const {cartTotalQuantity} = useSelector(state => state.cart)
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <AppbarStyle>
        <Toolbar>
          {isMatch ? (
            <>
              <DrawerMenu />
            </>
          ) : (
            <Grid container>
              <Grid item xs={2}>
                <Link href='/'>
                <img className="logo" src={image} alt="logo" />
                </Link>
              </Grid>
              <Grid item xs={4.5}>
                <Grid sx={{ pt:4}}>
                  <Link className='LinkNav' underline='none' href='/'>صفحه اصلی</Link>
                  <DropDownProducts />
                </Grid>
              </Grid>
              <Grid item xs={3.5} sx={{ mt: 2 }}>
                <Search sx={{mt:1}}>
                  <SearchIcon />
                  <StyledInputBase
                    placeholder="جستجو کنید..."
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Grid>
              <Grid sx={{pt:3}}>
                <DropDownAdmin />
                <Link href='/basket' underline='none' color="black">
                  <LocalGroceryStoreOutlinedIcon className='iconNav' />
                </Link>
              </Grid>
                <Grid className="notificationBasket">{cartTotalQuantity}</Grid>
            </Grid>
          )}
        </Toolbar>
      </AppbarStyle>
    </ThemeProvider>
  )
};
export default Navbar;

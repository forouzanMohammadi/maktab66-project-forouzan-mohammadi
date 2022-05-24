import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  InputBase,
  useTheme,
  useMediaQuery,
  Link,
  Collapse,
  Divider,
  Grid,
} from '@mui/material'
import image from 'assets/images/thisLogo-removebg-preview.png'

function DrawerMenu() {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
  const [isOpen, isSetOpen] = React.useState(false)

  const handleClick = () => {
    isSetOpen(!isOpen)
  }

  const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    zIndex: '100',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    color: '#000',
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(15),
      width: 'auto',
    },
  }))
  const SearchSm = styled('div')(({ theme }) => ({
    color: '#fff',
    display: 'flex',
    zIndex: '100',
    alignItems: 'center',
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '.MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(6)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }))

  return (
    <>
      <Link href="/">
        <img className="logo" src={image} alt="logo" />
      </Link>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            width: '45%',
            zIndex: '10000',
          },
        }}
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List
          sx={{
            width: '100%',
            marginTop: '50px',
            direction: 'rtl',
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <Link underline="none" color="black" href="/">
              <ListItemText primary="صفحه اصلی" />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton onClick={handleClick}>
            <Grid underline="none" color="black" href="/">
              <ListItemText primary="دسته‌بندی محصولات" />
            </Grid>
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider variant="middle" />
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton>
                <Link underline="none" color="primary" href='/babyProducts'>
                  <ListItemText primary="کلاه بچه‌گانه" />
                </Link>
              </ListItemButton>
              <Divider variant="middle" />
              <ListItemButton>
                <Link underline="none" color="primary" href='/womanProducts'>
                  <ListItemText primary="کلاه زنانه" />
                </Link>
              </ListItemButton>
              <Divider variant="middle" />
              <ListItemButton>
                <Link underline="none" color="primary" href='/manProducts'>
                  <ListItemText primary="کلاه مردانه" />
                </Link>
              </ListItemButton>
              <Divider variant="middle" />
            </List>
          </Collapse>
          <ListItemButton>
            <Link underline="none" color="black" href="/login">
              <ListItemText primary="پنل مدیریت" />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Drawer>
      {isMatch ? (
       <Grid>
          <SearchSm>
          <SearchIcon />
          <StyledInputBase
            sx={{color:'#fff'}}
            placeholder="..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchSm>
       </Grid>
      ) : (
        <Grid sx={{ml:7}}>
          <Search>
          <SearchIcon />
          <StyledInputBase
            placeholder="جستجو کنید..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        </Grid>
      )}
      <Grid>
      <LocalGroceryStoreOutlinedIcon className="iconNav" />
      </Grid>
      <IconButton sx={{ marginRight: 'auto' }} onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerMenu

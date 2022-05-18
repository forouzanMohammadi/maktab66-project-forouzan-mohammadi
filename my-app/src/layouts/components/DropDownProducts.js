import React from 'react';
import {
    Tab,
    Menu,
    MenuItem,
    Link,
  } from '@mui/material';

function DropDownProducts() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
  return (
    <>
      <Tab
        id="resources-button"
        onClick={handleClick}
        label="دسته‌بندی محصولات"
      />
      <Menu
        sx={{ top: '-10px', left: '25px' }}
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem onClick={handleClose} divider>
          <Link underline="none" color="black" href="#">
            کلاه بچه‌گانه
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} divider>
          <Link underline="none" color="black" href="#">
            کلاه زنانه
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link underline="none" color="black" href="#">
            کلاه مردانه
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropDownProducts;

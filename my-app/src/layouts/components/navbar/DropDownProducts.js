import React, { useState, useEffect } from 'react'
import { Menu, MenuItem, Link } from '@mui/material';
import { AdminApis } from 'service/AdminApis'

function DropDownProducts() {
  const [firstCat, setFirstCat] = useState({})
  const [secondCat, setSecondCat] = useState({})
  const [thirdCat, setThirdCat] = useState({})
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null)
  };


  useEffect(() => {
    ;(async () => {
      let firstResponse = await AdminApis.getProducts('categories/1')
      setFirstCat(firstResponse.data)

      let secondResponse = await AdminApis.getProducts('categories/2')
      setSecondCat(secondResponse.data)

      let thirdResponse = await AdminApis.getProducts('categories/3')
      setThirdCat(thirdResponse.data)

    })()
  }, [])

  return (
    <>
      <Link
        underline="none"
        sx={{ cursor: 'pointer',pr:4 }}
        onClick={handleClick}
        className="tabNav LinkNav"
      >
        دسته‌بندی محصولات
      </Link>
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
          <Link underline="none" color="black" href={`/products/category${thirdCat.id}`}>
            {thirdCat.name}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} divider>
          <Link underline="none" color="black" href={`/products/category${secondCat.id}`}>
            {secondCat.name}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link underline="none" color="black" href={`/products/category${firstCat.id}`}>
            {firstCat.name}
          </Link>
        </MenuItem>
      </Menu>
    </>
  )
};

export default DropDownProducts;

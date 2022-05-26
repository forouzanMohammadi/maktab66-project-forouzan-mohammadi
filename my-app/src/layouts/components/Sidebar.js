import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
// import { AdminApis } from 'service/AdminApis';
import axios from 'axios';


export default function Sidebar() {
  const [data, setData]=useState({})

  useEffect(() => {
    ;(async () => {
      let product = await axios.get('http://localhost:3002/products')
      setData(product.data)
    })()
  }, []);

  console.log(data,"hello");

  return (
    <Grid className="sidebar">
      <Grid>
        <Link to={'/babyProducts'} className='side-link-top' >دسته‌بندی کلاه بچه‌گانه</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه بافت</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه آفتابی</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه پاپیونی</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه بندی</Link>
      </Grid>
      <Grid pt={5}>
        <Link to={'/womanProducts'} className='side-link-top'>دسته‌بندی کلاه زنانه</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه بِرِت</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه بولر</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه باکت</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه فلاپی</Link>
      </Grid>
      <Grid pt={5}>
        <Link to={'/manProducts'} className='side-link-top'>دسته‌بندی کلاه مردانه</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه لئونی</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه باکت</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه نیوزبوی</Link>
      </Grid>
      <Grid>
        <Link to={`/products/${data.subCategoryId}`} className='side-link'>کلاه پاناما</Link>
      </Grid>
    </Grid>
  )
};

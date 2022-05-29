import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { AdminApis } from 'service/AdminApis'


export default function Sidebar() {
  const [firstCat, setFirstCat] = useState({})
  const [secondCat, setSecondCat] = useState({})
  const [thirdCat, setThirdCat] = useState({})
  const [subCat, setSubCat] = useState({})

  useEffect(() => {
    ;(async () => {
      let firstResponse = await AdminApis.getProducts('categories/1')
      setFirstCat(firstResponse.data)

      let secondResponse = await AdminApis.getProducts('categories/2')
      setSecondCat(secondResponse.data)

      let thirdResponse = await AdminApis.getProducts('categories/3')
      setThirdCat(thirdResponse.data)

      let subResponse = await AdminApis.getProducts('subCategories')
      setSubCat(subResponse.data)
    })()
  }, [])


  return (
    <Grid className="sidebar">
      <Grid>
        <Link to={`/products/category${thirdCat.id}`} className="side-link-top">
          {'دسته‌بندی ' + thirdCat.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${thirdCat.id}/subcategory${subCat[0]?.id}`} className="side-link">
         {subCat[0]?.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${thirdCat.id}/subcategory${subCat[1]?.id}`} className="side-link">
        {subCat[1]?.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${thirdCat.id}/subcategory${subCat[2]?.id}`} className="side-link">
        {subCat[2]?.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${thirdCat.id}/subcategory${subCat[3]?.id}`} className="side-link">
        {subCat[3]?.name}
        </Link>
      </Grid>
      <Grid pt={5}>
        <Link to={`/products/category${secondCat.id}`} className="side-link-top">
          {'دسته‌بندی ' + secondCat.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${secondCat.id}/subcategory${subCat[4]?.id}`} className="side-link">
        {subCat[4]?.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${secondCat.id}/subcategory${subCat[5]?.id}`} className="side-link">
        {subCat[5]?.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${secondCat.id}/subcategory${subCat[6]?.id}`} className="side-link">
        {subCat[6]?.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${secondCat.id}/subcategory${subCat[7]?.id}`} className="side-link">
        {subCat[7]?.name}
        </Link>
      </Grid>
      <Grid pt={5}>
        <Link to={`/products/category${firstCat.id}`} className="side-link-top">
          {'دسته‌بندی ' + firstCat.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${firstCat.id}/subcategory${subCat[8]?.id}`} className="side-link">
        {subCat[8]?.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${firstCat.id}/subcategory${subCat[9]?.id}`} className="side-link">
        {subCat[9]?.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${firstCat.id}/subcategory${subCat[10]?.id}`} className="side-link">
        {subCat[10]?.name}
        </Link>
      </Grid>
      <Grid>
        <Link to={`/products/category${firstCat.id}/subcategory${subCat[11]?.id}`} className="side-link">
        {subCat[11]?.name}
        </Link>
      </Grid>
    </Grid>
  )
}

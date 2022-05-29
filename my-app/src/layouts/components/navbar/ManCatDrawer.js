import React, { useState, useEffect } from 'react'
import { AdminApis } from 'service/AdminApis'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  List,
  ListItemButton,
  ListItemText,
  Link,
  Collapse,
  Divider,
  Grid,
} from '@mui/material';

function ManCatDrawer() {
  const [firstCat, setFirstCat] = useState({})
  const [subCat, setSubCat] = useState({})
  const [isOpen, isSetOpen] = React.useState(false);

  useEffect(() => {
    ;(async () => {
      let firstResponse = await AdminApis.getProducts('categories/1')
      setFirstCat(firstResponse.data)

      let subResponse = await AdminApis.getProducts('subCategories')
      setSubCat(subResponse.data)
    })()
  }, [])

  const handleClick = () => {
    isSetOpen(!isOpen)
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <Grid >
          <ListItemText primary={firstCat.name} />
        </Grid>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider variant="middle" />
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${firstCat.id}/subcategory${subCat[8]?.id}`}>
              <ListItemText primary={subCat[8]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${firstCat.id}/subcategory${subCat[9]?.id}`}>
              <ListItemText primary={subCat[9]?.name}/>
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${firstCat.id}/subcategory${subCat[10]?.id}`}>
              <ListItemText primary={subCat[10]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${firstCat.id}/subcategory${subCat[11]?.id}`}>
              <ListItemText primary={subCat[11]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Collapse>
    </>
  )
};

export default ManCatDrawer;

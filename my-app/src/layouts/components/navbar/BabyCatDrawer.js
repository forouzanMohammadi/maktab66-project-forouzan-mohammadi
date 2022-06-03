import React, { useState, useEffect } from 'react';
import { AdminApis } from 'service/AdminApis';
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

function BabyCatDrawer() {
  const [thirdCat, setThirdCat] = useState({})
  const [subCat, setSubCat] = useState({})
  const [isOpen, isSetOpen] = React.useState(false);

  useEffect(() => {
    ;(async () => {
      let thirdResponse = await AdminApis.getProducts('categories/3')
      setThirdCat(thirdResponse.data)

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
        <Grid>
          <ListItemText primary={thirdCat.name} />
        </Grid>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider variant="middle" />
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${thirdCat.id}/subcategory${subCat[0]?.id}`}>
              <ListItemText primary={subCat[0]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${thirdCat.id}/subcategory${subCat[1]?.id}`}>
              <ListItemText primary={subCat[1]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${thirdCat.id}/subcategory${subCat[2]?.id}`}>
              <ListItemText primary={subCat[2]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${thirdCat.id}/subcategory${subCat[3]?.id}`}>
              <ListItemText primary={subCat[3]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Collapse>
    </>
  )
};

export default BabyCatDrawer;

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

function WomanCatDrawer() {
  const [secondCat, setSecondCat] = useState({});
  const [subCat, setSubCat] = useState({});
  const [isOpen, isSetOpen] = React.useState(false);


  useEffect(() => {
    ;(async () => {
      let secondResponse = await AdminApis.getProducts('categories/2');
      setSecondCat(secondResponse.data)

      let subResponse = await AdminApis.getProducts('subCategories');
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
          <ListItemText primary={secondCat.name} />
        </Grid>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider variant="middle" />
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${secondCat.id}/subcategory${subCat[4]?.id}`}>
              <ListItemText primary={subCat[4]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${secondCat.id}/subcategory${subCat[5]?.id}`}>
              <ListItemText primary={subCat[5]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${secondCat.id}/subcategory${subCat[6]?.id}`}>
              <ListItemText primary={subCat[6]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href={`/products/category${secondCat.id}/subcategory${subCat[7]?.id}`}>
              <ListItemText primary={subCat[7]?.name} />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Collapse>
    </>
  )
};

export default WomanCatDrawer;

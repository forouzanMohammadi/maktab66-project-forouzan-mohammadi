import React from 'react';
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
  const [isOpen, isSetOpen] = React.useState(false);

  const handleClick = () => {
    isSetOpen(!isOpen)
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <Grid>
          <ListItemText primary="کلاه بچه‌گانه" />
        </Grid>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider variant="middle" />
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton>
            <Link underline="none" color="primary" href="#">
              <ListItemText primary="کلاه بافت" />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href="#">
              <ListItemText primary="کلاه آفتابی" />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href="#">
              <ListItemText primary="کلاه پاپیونی" />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href="#">
              <ListItemText primary="کلاه بندی" />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Collapse>
    </>
  )
};

export default BabyCatDrawer;

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

function ManCatDrawer() {
  const [isOpen, isSetOpen] = React.useState(false);

  const handleClick = () => {
    isSetOpen(!isOpen)
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <Grid >
          <ListItemText primary="کلاه مردانه" />
        </Grid>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider variant="middle" />
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton>
            <Link underline="none" color="primary" href="#">
              <ListItemText primary="کلاه لئونی" />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href="#">
              <ListItemText primary="کلاه باکت" />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href="#">
              <ListItemText primary="کلاه نیوزبوی" />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <Link underline="none" color="primary" href="#">
              <ListItemText primary="کلاه پاناما" />
            </Link>
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Collapse>
    </>
  )
};

export default ManCatDrawer;

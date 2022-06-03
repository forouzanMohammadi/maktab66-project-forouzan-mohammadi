import React, { useEffect, useState } from 'react';
import { AdminApis } from 'service/AdminApis';
import { Grid, Typography} from '@mui/material';
import babyLink from 'assets/images/babyIcon.png';
import womanLink from 'assets/images/womanIcon.png';
import manLink from 'assets/images/manIcon.png';
import { Link } from 'react-router-dom';

function LinkCat() {
  const [firstCat, setFirstCat] = useState({});
  const [secondCat, setSecondCat] = useState({});
  const [thirdCat, setThirdCat] = useState({});

  useEffect(() => {
    ;(async () => {
      let firstResponse = await AdminApis.getProducts('categories/1');
      setFirstCat(firstResponse.data);

      let secondResponse = await AdminApis.getProducts('categories/2');
      setSecondCat(secondResponse.data);

      let thirdResponse = await AdminApis.getProducts('categories/3');
      setThirdCat(thirdResponse.data);

    })()
  }, []);

  return (
    <>
      <Grid sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Grid>
            <Link to={`/products/category${thirdCat.id}`} className="linkCat">
              <Grid>
                <img src={babyLink} className="babyIcon" alt="icon" />
              </Grid>
              <Typography className="linkText">{thirdCat.name}</Typography>
            </Link>
        </Grid>
        <Grid>
          <Link to={`/products/category${secondCat.id}`} className="linkCat">
            <Grid>
              <img src={womanLink} className="womanIcon" alt="icon" />
            </Grid>
            <Typography className="linkText womanLinkTxt">
              {secondCat.name}
            </Typography>
          </Link>
        </Grid>
        <Grid>
          <Link to={`/products/category${firstCat.id}`} className="linkCat">
            <Grid>
              <img src={manLink} className="manIcon" alt="icon" />
            </Grid>
            <Typography className="linkText">{firstCat.name}</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default LinkCat;

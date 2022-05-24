import React from 'react'
import { Grid, Typography, Link } from '@mui/material'
import babyLink from 'assets/images/babyIcon.png'
import womanLink from 'assets/images/womanIcon.png'
import manLink from 'assets/images/manIcon.png'


function LinkCat() {
  return (
    <>
      <Grid sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Grid>
          <Link underline='none' href='/babyProducts' className="linkCat">
            <Grid>
              <img src={babyLink} className="babyIcon" />
            </Grid>
            <Typography className="linkText">کلاه بچه‌گانه</Typography>
          </Link>
        </Grid>
        <Grid>
          <Link underline='none' href='/womanProducts' className="linkCat">
            <Grid>
              <img src={womanLink} className="womanIcon" />
            </Grid>
            <Typography className="linkText womanLinkTxt">کلاه زنانه</Typography>
          </Link>
        </Grid>
        <Grid>
          <Link underline='none' href='/manProducts' className="linkCat">
            <Grid>
              <img src={manLink} className="manIcon" />
            </Grid>
            <Typography className="linkText">کلاه مردانه</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default LinkCat

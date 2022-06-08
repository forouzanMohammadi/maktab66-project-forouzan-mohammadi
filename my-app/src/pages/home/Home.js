import React, { useEffect, useState } from 'react';
import { AdminApis } from 'service/AdminApis';
import UserLayout from 'layouts/UserLayout';
import { Link} from 'react-router-dom';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material';
import Slider from './slider/Slider';
import LinkCat from './LinkCat';

function Home(props) {
  const [babiesCat, setBabiesCat] = useState([]);
  const [womenCat, setWomenCat] = useState([]);
  const [menCat, setMenCat] = useState([]);

  useEffect(() => {
    ;(async () => {
      let resultBaby = await AdminApis.getCtegory('?sub_category_id=5&_limit=6')
      setBabiesCat(resultBaby.data)

      let resultWoman = await AdminApis.getCtegory('?sub_category_id=8&_limit=6')
      setWomenCat(resultWoman.data)

      let resultMan = await AdminApis.getCtegory('?sub_category_id=12&_limit=6')
      setMenCat(resultMan.data)
    })()
  }, []);

  const BASE_URl = 'http://localhost:3002';
  return (
    <>
      <Slider />
      <LinkCat />
      <Grid container className="category-container" sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <Typography className="suggestCat">
            پیشنهاد ویژه کلاه بچه‌گانه
          </Typography>
        </Grid>
        {babiesCat.map((product) => (
          <Grid
            key={product.id}
            item
            sm={6}
            md={4}
            lg={4}
            xs={12}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Link className="linkDetail" to={`/product${product.id}`}>
              <Card className="card-home">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    src={BASE_URl + product.images[0]}
                    alt="product's images"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Grid sx={{display:'flex', justifyContent:"space-around"}}>
                      <Typography
                        variant="body1"
                        pl={5}
                        className="visit"
                      >
                        مشاهده
                      </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price + ' تومان'}
                    </Typography>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid container className="category-container" sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <Typography className="suggestCat">
            پیشنهاد ویژه کلاه زنانه
          </Typography>
        </Grid>
        {womenCat.map((hat) => (
          <Grid
            key={hat.id}
            item
            sm={6}
            md={4}
            lg={4}
            xs={12}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Link className="linkDetail" to={`/product${hat.id}`}>
              <Card className="card-home">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    src={BASE_URl + hat.images[0]}
                    alt="product's images"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {hat.name}
                    </Typography>
                    <Grid sx={{display:'flex', justifyContent:"space-around"}}>
                      <Typography
                        variant="body1"
                        underline="none"
                        pl={5}
                        className="visit"
                      >
                        مشاهده
                      </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {hat.price + ' تومان'}
                    </Typography>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid container className="category-container" sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <Typography className="suggestCat">
            پیشنهاد ویژه کلاه مردانه
          </Typography>
        </Grid>
        {menCat.map((hats) => (
          <Grid
            key={hats.id}
            item
            sm={6}
            md={4}
            lg={4}
            xs={12}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Link className="linkDetail" to={`/product${hats.id}`}>
              <Card className="card-home">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    src={BASE_URl + hats.images[0]}
                    alt="product's images"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {hats.name}
                    </Typography>
                    <Grid sx={{display:'flex', justifyContent:"space-around"}}>
                      <Typography
                        variant="body1"
                        underline="none"
                        pl={5}
                        className="visit"
                      >
                        مشاهده
                      </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {hats.price + ' تومان'}
                    </Typography>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  )
};
export default UserLayout(Home);

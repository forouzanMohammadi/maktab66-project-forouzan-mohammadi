import React, { useEffect, useState } from 'react';
import { AdminApis } from 'service/AdminApis';
import UserLayout from 'layouts/UserLayout';
import {
  Grid,
  Link,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material';
import Slider from './slider/Slider';
import LinkCat from './LinkCat';

function Home(props) {
  const [babiesCat, setBabiesCat] = useState([])
  const [womenCat, setWomenCat] = useState([])
  const [menCat, setMenCat] = useState([])

  useEffect(() => {
    ;(async () => {
      let resultBaby = await AdminApis.getCtegory('?subCategoryId=2&_limit=6')
      setBabiesCat(resultBaby.data)

      let resultWoman = await AdminApis.getCtegory('?subCategoryId=5&_limit=6')
      setWomenCat(resultWoman.data)

      let resultMan = await AdminApis.getCtegory('?subCategoryId=9&_limit=6')
      setMenCat(resultMan.data)
    })()
  }, [])

  const BASE_URl = 'http://localhost:3002'
  return (
    <>
      <Slider />
      <LinkCat/>
      <Grid container className="category-container" sx={{ mt: 10 }}>
        <Grid item xs={12} sx={{ my: 5 }}>
          <Link underline="none" className="suggestCat">
            پیشنهاد ویژه کلاه بچه‌گانه
          </Link>
        </Grid>
        {babiesCat.map((product) => (
          <Grid item sm={6} md={4} lg={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card className="card-home">
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={BASE_URl + product.image}
                  alt="product's images"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Link variant="body1" underline='non' pl={5}>مشاهده</Link>
                    {product.price + 'تومان'}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container className="category-container" sx={{ mt: 10 }}>
        <Grid item xs={12} sx={{ my: 5 }}>
          <Link underline="none" className="suggestCat">
            پیشنهاد ویژه کلاه زنانه
          </Link>
        </Grid>
        {womenCat.map((hat) => (
          <Grid item sm={6} md={4} lg={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card className="card-home">
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={BASE_URl + hat.image}
                  alt="product's images"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {hat.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hat.price + 'تومان'}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container className="category-container" sx={{ mt: 10 }}>
        <Grid item xs={12} sx={{ my: 5 }}>
          <Link underline="none" className="suggestCat">پیشنهاد ویژه کلاه مردانه</Link>
        </Grid>
        {menCat.map((hats) => (
          <Grid item sm={6} md={4} lg={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card className="card-home">
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={BASE_URl + hats.image}
                  alt="product's images"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {hats.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hats.price + 'تومان'}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
export default UserLayout(Home)

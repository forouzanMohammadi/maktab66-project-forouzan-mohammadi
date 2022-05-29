import React, { useEffect, useState } from 'react'
import { AdminApis } from 'service/AdminApis'
import UserLayout from 'layouts/UserLayout'
import { Link as LinkRoute } from 'react-router-dom'
import {
  Grid,
  Link,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material'
import Slider from './slider/Slider'
import LinkCat from './LinkCat'

function Home(props) {
  const [babiesCat, setBabiesCat] = useState([])
  const [womenCat, setWomenCat] = useState([])
  const [menCat, setMenCat] = useState([])

  useEffect(() => {
    ;(async () => {
      let resultBaby = await AdminApis.getCtegory('?subCategoryId=5&_limit=6')
      setBabiesCat(resultBaby.data)

      let resultWoman = await AdminApis.getCtegory('?subCategoryId=8&_limit=6')
      setWomenCat(resultWoman.data)

      let resultMan = await AdminApis.getCtegory('?subCategoryId=12&_limit=6')
      setMenCat(resultMan.data)
    })()
  }, [])

  const BASE_URl = 'http://localhost:3002'
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
            <LinkRoute className="linkDetail" to={`/product${product.id}`}>
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
                      <Link
                        variant="body1"
                        underline="none"
                        pl={5}
                        className="visit"
                      >
                        مشاهده
                      </Link>
                      {product.price + 'تومان'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </LinkRoute>
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
            <LinkRoute className="linkDetail" to={`/product${hat.id}`}>
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
                      <Link
                        variant="body1"
                        underline="none"
                        pl={5}
                        className="visit"
                      >
                        مشاهده
                      </Link>
                      {hat.price + 'تومان'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </LinkRoute>
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
            <LinkRoute className="linkDetail" to={`/product${hats.id}`}>
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
                      <Link
                        variant="body1"
                        underline="none"
                        pl={5}
                        className="visit"
                      >
                        مشاهده
                      </Link>
                      {hats.price + 'تومان'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </LinkRoute>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
export default UserLayout(Home)

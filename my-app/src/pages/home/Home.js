import React,{useEffect,useState} from 'react'
import { AdminApis } from 'service/AdminApis'
import UserLayout from 'layouts/UserLayout'
import { Grid, Link, Card, CardActionArea, CardContent, Typography, CardMedia} from '@mui/material'

function Home(props) {
  const [babiesCat, setBabiesCat] = useState({})
  const [womenCat, setWomenCat] = useState({})
  const [menCat, setMenCat] = useState({})
  useEffect(() => {
    try {
      fetchBabyCat ()
      fetchWomanCat()
      fetchManCat()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const fetchBabyCat = async (params) => {
    const resultBaby = await AdminApis.getCtegory('?subCategoryId=2&_limit=6')
    setBabiesCat(resultBaby)
  }
  const fetchWomanCat = async (params) => {
    const resultWoman = await AdminApis.getCtegory('?subCategoryId=5&_limit=6')
    setWomenCat(resultWoman)
  }
  const fetchManCat = async (params) => {
    const resultMan = await AdminApis.getCtegory('?subCategoryId=9&_limit=6')
    setMenCat(resultMan)
  }
  console.log(menCat);

  const BASE_URl = 'http://localhost:3002'
  return (
    <div style={{ marginTop: '100px' }}>
      <Grid  item xs={4}>
        <Link underline='none'>کلاه بچگانه</Link>
        {/* {babiesCat.data.map((product)=>(
          <Card sx={{ maxWidth: 345,display: 'flex', }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src={BASE_URl+product.image}
              alt="product's images"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price + "تومان"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        ))} */}
      </Grid>
      <Grid>
        <Link underline='none'>کلاه زنانه</Link>
        {/* {womenCat.data.map((hat)=>(
          <Grid item xs={3}>
          <Card sx={{ maxWidth: 345,display: 'flex', }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src={BASE_URl+hat.image}
              alt="product's images"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hat.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hat.price + "تومان"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
        ))} */}
      </Grid>
      <Grid>
        <Link underline='none'>کلاه مردانه</Link>
        {/* {menCat.data.map((hats)=>(
          <Card sx={{ maxWidth: 345,display: 'flex', }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src={BASE_URl+hats.image}
              alt="product's images"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hats.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hats.price + "تومان"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        ))} */}
      </Grid>
    </div>
  )
}
export default UserLayout(Home)

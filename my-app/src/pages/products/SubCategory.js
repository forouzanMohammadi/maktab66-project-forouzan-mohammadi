import React, { useMemo, useState, useEffect } from 'react'
import { useFetch } from 'hooks/useFetch'
import ProductsLayout from 'layouts/ProductsLayout'
import { Link, useParams } from 'react-router-dom'
import { AdminApis } from 'service/AdminApis'
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Pagination,
  CircularProgress,
  Box,
} from '@mui/material'

const BASE_URl = 'http://localhost:3002';

function SubCategory() {
    let params = useParams()
    let catId = parseInt(params.subCategoryId)
  
    const [cat, setCat] = useState({})
    const limit = useMemo(() => 6, [])
    const [activePage, setActivePage] = useState(1)
    const { data, loading } = useFetch(
      `products?sub_category_id=${catId}&_page=${activePage}&_limit=${limit}`,
  
    )
    useEffect(() => {
      ;(async () => {
        let response = await AdminApis.getProducts(`subCategories?id=${catId}`)
        setCat(response.data)
  
      })()
    }, [catId])
    return (
      <div>
        {loading ? (
          <Box
            sx={{
              position: 'absolute',
              background: '#fafafa',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Grid container className="categoris-container" sx={{ mt: 8 }}>
              <Grid item xs={12}>
                <Typography className="suggestCat">
                  {cat[0]?.name}
                </Typography>
              </Grid>
  
              {data?.data.map((product) => (
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
                          alt={product.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {product.name}
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
            <Grid sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
              <Pagination
                className="products-pagination"
                dir="ltr"
                variant="outlined"
                defaultPage={1}
                page={activePage}
                count={Math.ceil(data?.headers['x-total-count'] / limit)}
                onChange={(_, page) => setActivePage(page)}
              />
            </Grid>
          </>
        )}
      </div>
    )
  };

export default ProductsLayout(SubCategory);
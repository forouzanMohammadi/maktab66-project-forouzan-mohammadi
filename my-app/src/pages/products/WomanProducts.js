import React, { useMemo, useState } from 'react'
import { useFetch } from 'hooks/useFetch'
import ProductsLayout from 'layouts/ProductsLayout'
import {
  Grid,
  Link,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Pagination,
  CircularProgress,
  Box,
} from '@mui/material'

const BASE_URl = 'http://localhost:3002'

function WomanProducts() {
  const limit = useMemo(() => 6, []);
  const [activePage, setActivePage] = useState(1);
  const { data, loading } = useFetch(
    `products?categoryId=2&_page=${activePage}&_limit=${limit}`,
  );

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
          <Grid container className="categoris-container" sx={{ mt:8 }}>
            <Grid item xs={12}>
              <Typography className="suggestCat">
              دسته‌بندی کلاه زنانه
              </Typography>
            </Grid>

            {data?.data.map((product) => (
              <Grid
                item
                sm={6}
                md={4}
                lg={4}
                xs={12}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
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
                        <Link variant="body1" underline="non" pl={5}>
                          مشاهده
                        </Link>
                        {product.price + 'تومان'}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', mb:5 }}>
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
}

export default ProductsLayout(WomanProducts)

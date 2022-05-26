import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { AdminApis } from 'service/AdminApis';
import UserLayout from 'layouts/UserLayout';
import { Grid, Box, Button, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';

function DetailProduct() {
  const productId = useParams();
  let Id = parseInt(productId.id);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const [Index , setIndex]= useState(0);


  useEffect(() => {
    ;(async () => {
      let detailProduct = await AdminApis.getCategory(`/${Id}`)
      setProduct(detailProduct.data)
    })()
  }, [Id]);

  const handleIncrease = () => {
    setCount(count + 1)
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };

  // const myRef = useRef();

  function handleTab(index){
    setIndex(index)
    // const images = myRef.current.children;
    // for(let i=0; i<images.length; i++){
    //   images[i].className = images[i].className.replace("active", "")
    // }
    // images[index].className="active"
  }



  const BASE_URl = 'http://localhost:3002'

  return (
    <Grid className="details" key={product.id}>
      <Grid classname='img-container'>
        <img
          className="detailsImg"
          src={BASE_URl + product.image}
          alt={product.name}
        />
        <Grid container className="detail-gallery" >
          {product.images?.map((img,index) => (
            <Grid key={index}>
            <img 
              className='imgCard'
              src={BASE_URl + img}
              alt="hat"
              onClick={()=> handleTab(index)}
            />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Box className="box">
        <Grid className="row">
          <Typography className="detail-name">{product.name}</Typography>
          <Typography className="detail-descrip">
            {product.description}
          </Typography>
          <Typography className="dtail-price">
            {product.price + ' تومان'}
          </Typography>
          <Grid className="detail-btns">
            <Button variant="text" color="error" onClick={handleIncrease}>
              <AddIcon />{' '}
            </Button>
            <Typography variant="h6">{count}</Typography>
            <Button variant="text" color="error" onClick={handleDecrease}>
              <DeleteOutlineIcon />
            </Button>
          </Grid>
          <Button
            disabled={product.count < count}
            className="addBasketBtn"
          >
            افزودن به سبد خرید
          </Button>
        </Grid>
      </Box>
    </Grid>
  )
}

export default UserLayout(DetailProduct);

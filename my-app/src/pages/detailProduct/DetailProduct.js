import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { AdminApis } from 'service/AdminApis';
import UserLayout from 'layouts/UserLayout';
import { Grid, Box, Button, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from 'redux/reducers/cartSlice';
import { useNavigate} from 'react-router-dom'

function DetailProduct() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const productId = useParams();
  let Id = parseInt(productId.id);
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const [Index , setIndex]= useState(0);
  const dispatch = useDispatch()
  let navigate = useNavigate();
 
  

  useEffect(() => {
    (async () => {
      let detailProduct = await AdminApis.getCtegory(`/${Id}`)
      setProduct(detailProduct.data)
    })()
  }, [Id]);

  useEffect(() => {
    const checkProduct = cartItems.find((item)=>+item.product?.id === +productId.id)
    if(checkProduct){
     setCount(checkProduct.inventory)
    }else{
      setCount(1)
    }
  }, []);
  
  const handleIncrease = (count) => {
    setCount(count + 1)
  };

  const handleDecrease = (count) => {
    if (count > 0) {
      setCount(count - 1)
    }
  };

 const totalItem = count* product?.price
 const handleAddToCart = (product, count)=>{
  const data = {product:{...product}, inventory:count, totalRow:totalItem}
  dispatch(addToCart(data));
    navigate('/basket');
 }

  const myRef = useRef();

  function handleTab(index){
    setIndex(index)
    const images = myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "")
    }
    images[index].className="active"
  };

 


  const BASE_URl = 'http://localhost:3002';

  if(product === null){
    return <CircularProgress />
  }
  return (
    <Grid className="details" key={product.id}>
      <Grid className='img-container'>
        <img
          className="detailsImg"
          src={BASE_URl + product?.images[Index]}
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
            <Button variant="text" color="error" onClick={()=>handleIncrease(count)}>
              <AddIcon />{' '}
            </Button>
            <Typography variant="h6">{count}</Typography>
            <Button variant="text" color="error" onClick={()=>handleDecrease(count)}>
              <DeleteOutlineIcon />
            </Button>
          </Grid>
          <Button
          onClick={()=> handleAddToCart(product,count)}
            disabled={product.count < count}
            className="addBasketBtn"
          >
            افزودن به سبد خرید
          </Button>
        </Grid>
      </Box>
    </Grid>
  )
};

export default UserLayout(DetailProduct);

import React, {useEffect} from 'react'
import UserLayout from 'layouts/UserLayout'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Button, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import AddIcon from '@mui/icons-material/Add'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import image from 'assets/images/Shopping_Basket_Flat_Vector_Icon_-_SuperAwesomeVectors-removebg-preview.png'
import { decreaseCart, removeFromCart, addToCart, clearCart, getTotals } from 'redux/reducers/cartSlice'

function Basket() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const BASE_URl = 'http://localhost:3002';

  useEffect(()=>{
    dispatch(getTotals());
  },[cart, dispatch])

  const handleRemoveFromCart = (cartItem) =>{
    dispatch(removeFromCart(cartItem))
  }

  const handleDecreaseCart = (cartItem) =>{
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem) =>{
    dispatch(addToCart(cartItem))
  }

  const handleClearCart = () =>{
    dispatch(clearCart())
  }

  return (
    <Grid className="cart-container">
      <Typography variant="h4" className="heading">
        سبد خرید
      </Typography>
      {cart.cartItems.length === 0 ? (
        <Grid className='empty-container'>
          <img src={image} alt="basket" />
          <Typography className='emptyTypo'>سبد خرید شما خالی است!</Typography>
          <Grid className="start-shopping">
            <Link className='emptyLink' to="/">
              <Typography>پیشنهاد ویژه</Typography>
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Grid>
          <Grid className="cart-itmes">
            {cart.cartItems?.map((cartItem) => (
              <Grid className="cart-item" key={cartItem.id}>
                <Grid className="cart-product">
                  <img src={BASE_URl + cartItem.image} alt={cartItem.name} />
                  <Grid>
                    <Typography variant="h5" className="typograph">
                      {cartItem.name}
                    </Typography>
                    <button onClick={()=> handleRemoveFromCart(cartItem)}>
                      <HighlightOffIcon className="Xicon" />
                      حذف کالا
                    </button>
                  </Grid>
                </Grid>
                <Grid className="cart-all-price">
                  <Typography>قیمت:</Typography>
                  <Grid>تومان {cartItem.price}</Grid>
                </Grid>
                <Grid className="cart-all-price">
                  <Typography>تعداد</Typography>
                  <Grid className="detail-btns rowbtns">
                    <Button variant="text" color="error">
                      <AddIcon onClick={()=>handleIncreaseCart(cartItem)} />{' '}
                    </Button>
                    <Typography variant="h6">
                      {cartItem.cartQuantity}
                    </Typography>
                    <Button variant="text" color="error">
                      <DeleteOutlineIcon onClick={()=>handleDecreaseCart(cartItem)} />
                    </Button>
                  </Grid>
                </Grid>
                <Grid className="cart-all-price">
                  <Typography>قیمت کل:</Typography>
                  <Grid>تومان {cartItem.price * cartItem.cartQuantity}</Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid className="cart-summary">
            <Grid className="cart-checkout">
              <Grid className="subtotal">
                <Typography>جمع سبد خرید:</Typography>
                <Typography className="amount">
                  {cart.cartTotalAmount}
                </Typography>
              </Grid>
            <Button className="btnCheckout">
              <Link to="/checkout" className="linkCheckout">
                ادامه فرآیند خرید
              </Link>
            </Button>
            </Grid>
            <Button className="clear-cart">
              <DeleteForeverIcon onClick={()=> handleClearCart()} className="iconCheckout" />
              پاک کردن سبد خرید
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
export default UserLayout(Basket)

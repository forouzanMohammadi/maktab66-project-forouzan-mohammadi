import React, { useEffect } from 'react';
import UserLayout from 'layouts/UserLayout';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { removeRedux } from 'redux/reducers/cartSlice';




function PaymentSuccess() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);
  const dispatch= useDispatch()

  const client= JSON.parse(localStorage.getItem("clientInfo"))

  useEffect(() => {
    {
      cartItems.map(async (item) => {
        let updateCount = item.product.count - item.inventory;
        console.log(item);
         await axios.post(`http://localhost:3002/orders`, {
        customerDetail: client,
        orderStatus: 3,
        cart,
      });
        await axios.patch(
          `http://localhost:3002/products/${item.product.id}`,
          { ...item.product, count: updateCount },
          { headers: { token: localStorage.getItem("token") } }
        );
      });
    }
  
    localStorage.removeItem("cartItems");
    dispatch(removeRedux());
  }, []);
  

  return (
    <div>
    <h3 className="resultPay">نتیجه پرداخت</h3>
    <div className="resltpayContainer">
      <CheckCircleOutlineIcon className='iconsuccess'/>
      <p>با تشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی ارسالبا شما تماس گرفته خواهد شد.</p>
    </div>
  </div>
  )
}
export default UserLayout(PaymentSuccess);

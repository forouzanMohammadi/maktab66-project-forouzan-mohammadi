import React from 'react';
import UserLayout from 'layouts/UserLayout';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function PaymentSuccess() {
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

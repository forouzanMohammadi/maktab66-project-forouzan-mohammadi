import React from 'react';
import UserLayout from 'layouts/UserLayout';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function PaymentFail() {
  return (
    <div>
      <h3 className="resultPay">نتیجه پرداخت</h3>
      <div className="resltpayContainer">
        <HighlightOffIcon className='iconFail'/>
        <p>پرداخت موفقیت‌آمیز نبود، سفارش شما در انتظار پرداخت است.</p>
      </div>
    </div>
  )
}
export default UserLayout(PaymentFail);

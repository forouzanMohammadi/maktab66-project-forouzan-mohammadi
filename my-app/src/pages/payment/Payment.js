import React from 'react';
import {Link} from 'react-router-dom'

export default function Payment() {
  return (
    <div className='body-payment'>
    <div className='containerbtnPay'>
      <button className='pay'>
        <Link to='/paymentSuccess' className='linkPay'>پرداخت</Link>
      </button>
      <button className='payCancel'>
      <Link to='/paymentFail' className='linkPay'>انصراف</Link>
      </button>
    </div>
      
    </div>
  )
};

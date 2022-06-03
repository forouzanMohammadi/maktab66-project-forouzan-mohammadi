import React from 'react'
import UserLayout from 'layouts/UserLayout'
import { useFormik } from 'formik'
import { useNavigate} from 'react-router-dom'

function Checkout() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      cellPhone: '',
      date: '',
    },
    onSubmit: (values) => {
      navigate('/payment');
    },
  })
  return (
    <div>
      <h4>نهایی کردن سبد خرید</h4>
      <div className="containerCheck">
        <div className="checkout-container">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">نام</label>
            <input
            required
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <label htmlFor="lastName">نام خانوادگی</label>
            <input
            required
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <label htmlFor="address">آدرس</label>
            <input
            required
              id="address"
              name="address"
              type="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <label htmlFor="cellPhone">تلفن همراه</label>
            <input
            required
              id="cellPhone"
              name="cellPhone"
              type="cellPhone"
              onChange={formik.handleChange}
              value={formik.values.cellPhone}
            />
            <label htmlFor="date">تاریخ تحویل</label>
            <input
            // required
              id="date"
              name="date"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.cellPhone}
            />
            <button type="submit">پرداخت</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default UserLayout(Checkout)

import React from 'react'
import UserLayout from 'layouts/UserLayout'
import { useFormik } from 'formik'

function Checkout() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      cellPhone: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div className='checkout-container'>
    <h4>نهایی کردن سبد خرید</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">نام</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">نام خانوادگی</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor="address">آدرس</label>
        <input
          id="address"
          name="address"
          type="address"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        <label htmlFor="cellPhone">تلفن همراه</label>
        <input
          id="cellPhone"
          name="cellPhone"
          type="cellPhone"
          onChange={formik.handleChange}
          value={formik.values.cellPhone}
        />
        <button type="submit">پرداخت</button>
      </form>
    </div>
  )
}
export default UserLayout(Checkout)

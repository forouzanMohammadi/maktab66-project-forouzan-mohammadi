import React from 'react'
import UserLayout from 'layouts/UserLayout'
import { useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import { validateCheckout } from '../checkout/yupValidation/validateCheckout'

function Checkout() {
  let navigate = useNavigate()

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      cellPhone: '',
      date: '',
    },
    validationSchema: validateCheckout,
    onSubmit: async(values) => {
     
      localStorage.setItem('clientInfo', JSON.stringify(values))
      navigate('/payment')
    },
  })
  return (
    <div>
      <h4 className="title-checkout">نهایی کردن سبد خرید</h4>
      <div className="container-checkout">
        <form onSubmit={handleSubmit} className="form-checkout">
          <div className="rowFormcheck1">
            <div className="checkRow">
              <label htmlFor="firstName">نام:</label>
              <TextField
                variant="filled"
                size="small"
                name="firstName"
                type="text"
                onChange={handleChange}
                value={values.firstName}
                className={
                  errors.firstName && touched.firstName ? 'input-error' : ''
                }
              />
              {errors.firstName && touched.firstName && (
                <p className="error">{errors.firstName}</p>
              )}
            </div>
            <div className="checkRow">
              <label htmlFor="lastName">نام خانوادگی:</label>
              <TextField
                variant="filled"
                size="small"
                name="lastName"
                type="text"
                onChange={handleChange}
                value={values.lastName}
                className={
                  errors.lastName && touched.lastName ? 'input-error' : ''
                }
              />
              {errors.lastName && touched.lastName && (
                <p className="error">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="rowFormcheck1">
            <div className="checkRow">
              <label htmlFor="address">آدرس:</label>
              <TextField
                multiline
                size="small"
                maxRows={3}
                variant="filled"
                id="address"
                name="address"
                type="text"
                onChange={handleChange}
                value={values.address}
                className={
                  errors.address && touched.address ? 'input-error' : ''
                }
              />
              {errors.address && touched.address && (
                <p className="error">{errors.address}</p>
              )}
            </div>
            <div className="checkRow">
              <label htmlFor="cellPhone">تلفن همراه:</label>
              <TextField
                size="small"
                variant="filled"
                id="cellPhone"
                name="cellPhone"
                onChange={handleChange}
                value={values.cellPhone}
                className={
                  errors.cellPhone && touched.cellPhone ? 'input-error' : ''
                }
              />
              {errors.cellPhone && touched.cellPhone && (
                <p className="error">{errors.cellPhone}</p>
              )}
            </div>
          </div>
          <div className="rowFormcheck1">
            <div className="checkRow">
              <label htmlFor="date">تاریخ تحویل</label>
              <DatePicker
                name="date"
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                inputClass="custom-input"
                value={values.date}
                onChange={(val) => {
                  setFieldValue('date', val.unix * 1000, true)
                  console.log(val)
                }}
                className={errors.date && touched.date ? 'input-error' : ''}
              />
              {errors.date && touched.date && (
                <p className="error">{errors.date}</p>
              )}
            </div>
          </div>
          <button type="submit">پرداخت</button>
        </form>
      </div>
    </div>
  )
}
export default UserLayout(Checkout)

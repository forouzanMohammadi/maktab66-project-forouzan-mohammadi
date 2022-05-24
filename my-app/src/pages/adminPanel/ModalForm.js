import React, { useState } from "react";
import { Formik } from 'formik'
import { AdminApis } from 'service/AdminApis'

const ModalForm = () => {
  const initialValues = {
    nameProduct: '',
    image: '',
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        let formData = new FormData()
        formData.append('image', values.image)
        formData.append('nameProduct', values.nameProduct)
        const config = {
          headers: { 'content-type': 'multipart/form-data' },
        }
        alert(JSON.stringify(values, null, 2))
        let response = await AdminApis.addproduct(formData, config)
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        handleBlur,
        setFieldValue,
        isValid,
        dirty,
      }) => (
        <form onSubmit={handleSubmit} className="containerForm">
          <div className="form-row">
            <label htmlFor="image">تصویر کالا </label>
            <input
            className="inputForm"
              id="image"
              name="image"
              type="file"
              onChange={(event) => {
                const file = event.target.files[0]
                console.log(file.name)
                console.log(file.size)
                console.log(file.type)
                setFieldValue('image', event.currentTarget.files[0])
              }}
            />
          </div>

          <div className="form-row">
            <label htmlFor="name">نام کالا</label>
            <input
            className="inputForm"
              type="text"
              name="nameProduct"
              id="nameProduct"
              value={values.nameProduct}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="form-row">
            <label htmlFor="password">دسته بندی</label>
            <select className="selectForm">
              <option value="category" disabled>
                دسته بندی
              </option>
              <option value="mobil">کلاه بچه‌گانه</option>
              <option value="laptop">کلاه زنانه</option>
              <option value="tablet">کلاه مردانه</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="description ">توضیحات</label>
            <input
            className="inputForm"
              type="text"
              name="description"
              id="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <button
          className="btnForm"
            type="submit"
          >
            ذخیره
          </button>
        </form>
      )}
    </Formik>
  )
}

export default ModalForm

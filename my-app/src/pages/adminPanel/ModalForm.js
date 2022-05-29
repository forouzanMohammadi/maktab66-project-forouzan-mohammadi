import React, { useEffect, useMemo, useState } from 'react'
import { Formik } from 'formik'
import { AdminApis } from 'service/AdminApis'
import axios from 'axios'

const initialFormData = undefined

const ModalForm = ({ inEditMode, handleClose, getPosts }) => {
  const [editData, setEditData] = useState(initialFormData)
  let id = inEditMode.rowKey

  useEffect(() => {
    axios.get(`http://localhost:3002/products/${id}`).then((res) =>
      setTimeout(() => {
        setEditData({
          nameProduct: res.data.categoryName,
          thumbnail: res.data.image,
          price: res.data.price,
          count: res.data.count,
        })
      }, 1000),
    )
  }, [])

  const initialValues = {
    model: '',
    thumbnail: '',
    price: '',
    inventory: '',
    name: '',
    category: '',
  }

  return (
    <>
      {editData ? (
        <Formik
          initialValues={editData}
          enableReinitialize
          onSubmit={async (values) => {
            const response = await AdminApis.put(id, values)
            getPosts()
            handleClose()
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
            <form onSubmit={handleSubmit} className="containerform">
              <div className="form-row">
                <label htmlFor="thumbnail">تصویر کالا </label>
                <input
                  className="inputForm"
                  id="thumbnail"
                  name="thumbnail"
                  type="file"
                  onChange={(event) => {
                    setFieldValue('file', event.currentTarget.files[0])
                  }}
                />
              </div>
              <div className="form-main">
                <div className="form-row">
                  <label htmlFor="model">نام کالا</label>
                  <input
                    className="inputForm"
                    type="text"
                    name="model"
                    id="model"
                    value={values.model}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="price">قیمت</label>
                  <input
                    className="inputForm"
                    type="text"
                    name="price"
                    id="price"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="form-main">
                <div className="form-row">
                  <label htmlFor="inventory">تعداد</label>
                  <input
                    className="inputForm"
                    type="number"
                    name="inventory"
                    id="inventory"
                    value={values.inventory}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="category">دسته بندی</label>
                  <select>
                    <option value="category" disabled>
                      دسته بندی
                    </option>
                    <option value="mobil">کلاه بچه‌گانه</option>
                    <option value="laptop">کلاه زنانه</option>
                    <option value="tablet">کلاه مردانه</option>
                  </select>
                </div>
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
              <button type="submit">ذخیره</button>
            </form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            let formData = new FormData()
            formData.append('image', values.file)
            // const config = {
            //   headers: { "content-type": "multipart/form-data" },
            // };
            let response = await AdminApis.update(formData)
            console.log(response.data.filename)
            formData.append('model', values.model)
            formData.append('price', values.price)
            formData.append('category', values.category)
            await AdminApis.addproduct(formData)
            getPosts()
            handleClose()
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
            <form onSubmit={handleSubmit} className="containerform">
              <div className="form-row">
                <label htmlFor="thumbnail">تصویر کالا </label>
                <input
                  className="inputForm"
                  id="thumbnail"
                  name="thumbnail"
                  type="file"
                  onChange={(event) => {
                    setFieldValue('file', event.currentTarget.files[0])
                  }}
                />
              </div>
              <div className="form-main">
                <div className="form-row">
                  <label htmlFor="model">نام کالا</label>
                  <input
                    className="inputForm"
                    type="text"
                    name="model"
                    id="model"
                    value={values.model}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="price">قیمت</label>
                  <input
                    className="inputForm"
                    type="text"
                    name="price"
                    id="price"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="form-main">
                <div className="form-row">
                  <label htmlFor="inventory">تعداد</label>
                  <input
                    className="inputForm"
                    type="number"
                    name="inventory"
                    id="inventory"
                    value={values.inventory}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="category">دسته بندی</label>
                  <select>
                    <option value="category" disabled>
                      دسته بندی
                    </option>
                    <option value="mobil">کلاه بچه‌گانه</option>
                    <option value="laptop">کلاه زنانه</option>
                    <option value="tablet">کلاه مردانه</option>
                  </select>
                </div>
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
              <button type="submit">ذخیره</button>
            </form>
          )}
        </Formik>
      )}
    </>
  )
}

export default ModalForm

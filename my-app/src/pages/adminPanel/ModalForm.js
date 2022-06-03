import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { AdminApis } from 'service/AdminApis'
import axios from 'axios';

const categories = ['کلاه مردانه', 'کلاه زنانه', 'کلاه بچه‌گانه'];

const ModalForm = ({ inEditMode, handleClose, getPosts }) => {
  const initialValues = {name:"",subCategoryId:"",categoryName:"",categoryId:"",price:"",count:"",image:"",images:""};
  const [formValues, setFormValues]=useState(initialValues);
  const [formErrors, setFormErrors]=useState({});
  const [editData, setEditData] = useState(undefined);
  const [value, setValue] = useState('');
  const [isSubmit, setIsSubmit]= useState(false);
  console.log(isSubmit);
  
  useEffect(() => {
    axios.get(`http://localhost:3002/products/${id}`).then((res) =>
      setTimeout(() => {
        setEditData({
          name: res.data.name,
          categoryName: res.data.categoryName,
          image: res.data.image,
          price: res.data.price,
          count: res.data.count,
          description: res.data.description,
          id: res.data.id,
        })
      }, 1000),
    )
  }, []);

  //onchange Gallary//
  // const hanlergallary = async (e) => {
  //   const files = Array.from(e.target.files);
  //   preview(files[0]);
  //   console.log(files);
  //   let temp = [];
  //   files.map((item) => {
  //     const formData = new FormData();
  //     formData.append("image", item);
  //     const tempRequest = api.post("/upload", formData);
  //     temp.push(tempRequest);
  //   });

  // };
  // const arrayResponse = await Promise.all(temp);

  // await api.put("/products/6", {
  //   name: "update id 6",
  //   brand: "lenovo",
  //   image: arrayResponse.map((i) => i.data.filename),
  //   price: 6000,
  //   createdAt: new Date(),
  //   isDelivered: false,
  //   commentsId: 1
  // });

  //onchange add product//
  const addHandelChange=(e)=>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
  };

  //onchange Edite//
  const handleChange = (e) => {
    if (e.target.name !== 'image') {
      setValue({ ...value, [e.target.name]: e.target.value })
    } else {
      let files = e.target.files[0]
      setValue({ ...value, [e.target.name]: files })
    }
  };

  const CkeditorHandler = (event, editor) => {
    console.log(editor.getData())
    const data = editor.getData().replaceAll(/[<span></span>]/g, '')
    console.log({ event, editor, data })
    setValue({ description: data })
  };

  let token = localStorage.getItem('token');

  const submitEdit = async () => {
    await axios.patch(`http://localhost:3002/products/${editData.id}`, value, {
      headers: {
        token: token,
      },
    });
    axios.get(`http://localhost:3002/products/${editData.id}`, value)
  };

  const validate = (values)=>{
    const errors={}
    if(!values.name){
      errors.name = "فیلد ضروری است"
    }else{}
    if(!values.count){
      errors.count = "فیلد ضروری است"
    }else{}
    if(!values.price){
      errors.price = "فیلد ضروری است"
    }else{}
    if(!values.categoryName){
      errors.categoryName = "فیلد ضروری است"
    }else{}
    if(!values.subCategoryId){
      errors.subCategoryId = "فیلد ضروری است"
    }else{}
    if(!values.categoryId){
      errors.categoryId = "فیلد ضروری است"
    }else{}
    return errors
  };

  const submitAdd = async () => {
    await axios.post(`http://localhost:3002/products`,formValues, {
      headers: {
        token: token,
      },
    })
    axios.get(`http://localhost:3002/products/${editData.id}`,value)
    setFormErrors(validate(formValues));
    setIsSubmit(true);

  };

 
  let id = inEditMode.rowKey;

  // const BASE_URl = 'http://localhost:3002';

  return (
    <>
      {editData ? (
        <form onClick={submitEdit} className="containerform">
          <label htmlFor="image">تصویر کالا </label>
          <div className="inputImage">
            <div>
              <input
                multiple
                className="inputForm"
                name="image"
                type="file"
                // onChange={(e) => hanlergallary(e)}
              />
            </div>
          </div>
          <div className="form-main">
            <div className="form-row">
              <label htmlFor="name">نام کالا</label>
              <input
                defaultValue={editData.name}
                className="inputForm"
                type="text"
                name="name"
                id="name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="price">قیمت</label>
              <input
                defaultValue={editData.price}
                className="inputForm"
                type="text"
                name="price"
                id="price"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="form-main">
            <div className="form-row">
              <label htmlFor="count">تعداد</label>
              <input
                defaultValue={editData.count}
                className="inputForm"
                type="number"
                name="count"
                id="count"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="category">دسته بندی</label>
              <select
                id="categoryName"
                name="categoryName"
                defaultValue={editData.categoryName}
                onChange={(e) => handleChange(e)}
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="description ">توضیحات</label>
            <CKEditor
              editor={ClassicEditor}
              data={editData.description}
              className="inputForm"
              name="description"
              id="description"
              onChange={CkeditorHandler}
            />
          </div>
          <button type="submit">ذخیره</button>
        </form>
      ) : (
        <form onSubmit={submitAdd} className="containerform">
          <div className="form-row">
            <label htmlFor="image">تصویر کالا </label>
            <input
              multiple
              className="inputForm"
              id="image"
              name="image"
              type="file"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-main">
            <div className="form-row">
              <label htmlFor="name">نام کالا</label>
              <input
                className="inputForm"
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                onChange={(e) => addHandelChange(e)}
              />
            <span className='errorAdd'>{formErrors.name}</span>
            </div>
            <div className="form-row">
              <label htmlFor="price">قیمت</label>
              <input
                className="inputForm"
                type="text"
                name="price"
                id="price"
                value={formValues.price}
                onChange={(e) => addHandelChange(e)}
              />
            <span className='errorAdd'>{formErrors.price}</span>
            </div>
          </div>
          <div className="form-main">
            <div className="form-row">
              <label htmlFor="count">تعداد</label>
              <input
                className="inputForm"
                type="number"
                name="count"
                id="count"
                value={formValues.count}
                onChange={(e) => addHandelChange(e)}
              />
            <span className='errorAdd'>{formErrors.count}</span>
            </div>
            <div className="form-row">
              <label htmlFor="categoryName">دسته بندی</label>
              <select
                id="categoryName"
                name="categoryName"
                value={formValues.categoryName}
                onChange={(e) => addHandelChange(e)}
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            <span className='errorAdd'>{formErrors.categoryName}</span>
            </div>
          </div>
          <div className="form-main">
            <div className="form-row">
              <label htmlFor="categoryId">شماره دسته‌بندی</label>
              <input
                className="inputForm"
                type="number"
                min="1"
                max="3"
                name="categoryId"
                id="categoryId"
                value={formValues.categoryId}
                onChange={(e) => addHandelChange(e)}
              />
            <span className='errorAdd'>{formErrors.categoryId}</span>
            </div>
            <div className="form-row">
              <label htmlFor="subCategoryId">شماره زیر‌دسته</label>
              <input
                className="inputForm"
                type="number"
                min="1"
                max="15"
                name="subCategoryId"
                id="subCategoryId"
                value={formValues.subCategoryId}
                onChange={(e) => addHandelChange(e)}
              />
            <span className='errorAdd'>{formErrors.subCategoryId}</span>
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="description ">توضیحات</label>
            <CKEditor
              editor={ClassicEditor}
              className="inputForm"
              name="description"
              id="description"
              onChange={CkeditorHandler}
            />
          </div>
          <button type="submit">ذخیره</button>
        </form>
      )}
    </>
  )
}

export default ModalForm;

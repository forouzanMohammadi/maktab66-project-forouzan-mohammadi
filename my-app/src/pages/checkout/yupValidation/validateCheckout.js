import * as Yup from 'yup';

export const validateCheckout = Yup.object().shape({
    firstName: Yup.string()
    .required('نام خود را وارد کنید'),
    lastName: Yup.string()
  .required('نام‌خانوادگی خود را وارد کنید'),
  address: Yup.string()
  .required('فیلد ضروری است'),
  cellPhone: Yup.string()
  .required('شماره تلفن همراه خود را وارد کنید'),
//   .matches('!/^(0|+98)?([ ]|,|-|[()]){0,2}9[0|1|2|3|4|9]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}$/','شماره همراه صحیح نمی‌باشد.'),
  date: Yup.string()
  .required('فیلد ضروری است'),

});

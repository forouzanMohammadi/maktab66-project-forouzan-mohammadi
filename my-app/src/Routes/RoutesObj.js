import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import Basket from 'pages/basket/Basket';
import Checkout from 'pages/checkout/Checkout';
import Login from 'pages/login/Login';
import AdminPanel from 'pages/adminPanel/AdminPanel';
import Payment from 'pages/payment/Payment';
import PaymentFail from 'pages/paymentFail/PaymentFail';
import PaymentSuccess from 'pages/paymentSuccess/PaymentSuccess';
import DetailProduct from 'pages/detailProduct/DetailProduct';
import Orders from 'pages/orders/Orders';
import Quantity from 'pages/quantity/Quantity';
import Products from 'pages/products/Products';
import Category from 'pages/products/Category';
import SubCategory from 'pages/products/SubCategory';
import NotFound from 'pages/notFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoutesObj = [
  {
    pathname: '/',
    name: 'Home Page',
    isPrivate: false,
    id: 'home',
    element: <Home />,
  },
  {
    pathname: '/home',
    name: 'Home Page',
    isPrivate: false,
    id: 'home',
    element: <Home />,
  },
  {
    pathname: '/basket',
    name: 'Basket',
    isPrivate: false,
    id: 'basket',
    element: <Basket />,
  },
  {
    pathname: '/checkout',
    name: 'Checkout',
    isPrivate: false,
    id: 'checkout',
    element: <Checkout />,
  },
  {
    pathname: '/login',
    name: 'Login',
    isPrivate: true,
    id: 'login',
    element: <Login />,
  },
  {
    pathname: '/adminPanel',
    name: 'Admin Panel',
    isPrivate: false,
    id: 'adminPanel',
    element: <AdminPanel />,
  },
  {
    pathname: '/payment',
    name: 'Payment',
    isPrivate: false,
    id: 'payment',
    element: <Payment />,
  },
  {
    pathname: '/paymentFail',
    name: 'Payment Fail',
    isPrivate: false,
    id: 'paymentFail',
    element: <PaymentFail />,
  },
  {
    pathname: '/paymentSuccess',
    name: 'Payment Success',
    isPrivate: false,
    id: 'paymentSuccess',
    element: <PaymentSuccess />,
  },
  {
    pathname: '/products',
    name: 'products',
    isPrivate: false,
    id: 'Products',
    element: <Products />,
  },
  {
    pathname: '/products/category:categoryId',
    name: 'products',
    isPrivate: false,
    id: 'Products',
    element: <Category />,
  },
  {
    pathname: '/products/category:categoryId/subcategory:subCategoryId',
    name: 'products',
    isPrivate: false,
    id: 'Products',
    element: <SubCategory />,
  },
  {
    pathname: '/product:id',
    name: 'Detail Product',
    isPrivate: false,
    id: 'detailProduct',
    element: <DetailProduct />,
  },
  {
    pathname: '/quantity',
    name: 'Quantity',
    isPrivate: false,
    id: 'quantity',
    element: <Quantity />,
  },
  {
    pathname: '/orders',
    name: 'Orders',
    isPrivate: false,
    id: 'orders',
    element: <Orders />,
  },
  {
    pathname: '*',
    name: 'NotFound',
    isPrivate: false,
    id: 'notFound',
    element: <NotFound/>,
  },
]
export default function RouteApp() {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        {RoutesObj.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.pathname}
              element={route.element}
            />
          )
        })}
      </Routes>
    </Router>
  )
};

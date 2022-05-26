import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import Basket from 'pages/basket/Basket';
import Checkout from 'pages/checkout/Checkout';
import Login from 'pages/login/Login';
import AdminPanel from 'pages/adminPanel/AdminPanel';
import Payment from 'pages/payment/Payment';
import PaymentFail from 'pages/paymentFail/PaymentFail';
import PaymentSuccess from 'pages/paymentSuccess/PaymentSuccess';
import ManProducts from 'pages/products/ManProducts';
import BabyProducts from 'pages/products/BabyProducts';
import WomanProducts from 'pages/products/WomanProducts';
import DetailProduct from 'pages/detailProduct/DetailProduct';
import Orders from 'pages/orders/Orders';
import Quantity from 'pages/quantity/Quantity';
import Products from 'pages/products/Products';

const RoutesObj = [
  {
    pathname: '/',
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
    pathname: '/babyProducts',
    name: 'Baby Products',
    isPrivate: false,
    id: 'babyProducts',
    element: <BabyProducts />,
  },
  {
    pathname: '/womanProducts',
    name: 'Woman Products',
    isPrivate: false,
    id: 'womanProducts',
    element: <WomanProducts />,
  },
  {
    pathname: '/manProducts',
    name: 'Man Products',
    isPrivate: false,
    id: 'manProducts',
    element: <ManProducts />,
  },
  {
    pathname: '/product/:id',
    name: 'Detail Product',
    isPrivate: false,
    id: 'detailProduct',
    element: <DetailProduct />,
  },
  {
    pathname: '/products/:subCategoryId',
    name: 'products',
    isPrivate: false,
    id: 'Products',
    element: <Products />,
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
]
export default function RouteApp() {
  return (
    <Router>
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

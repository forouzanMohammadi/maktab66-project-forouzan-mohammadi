import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import Basket from 'pages/basket/Basket';
import Checkout from 'pages/checkout/Checkout';
import Login from 'pages/login/Login';
import AdminPanel from 'pages/adminPanel/AdminPanel';
import Payment from 'pages/payment/Payment';
import PaymentFail from 'pages/paymentFail/PaymentFail';
import PaymentSuccess from 'pages/paymentSuccess/PaymentSuccess';
import Products from 'pages/products/Products';
import Product from 'pages/product/Product';

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
    name: 'basket',
    isPrivate: false,
    id: 'basket',
    element: <Basket />,
  },
  {
    pathname: '/checkout',
    name: 'checkout',
    isPrivate: false,
    id: 'checkout',
    element: <Checkout />,
  },
  {
    pathname: '/login',
    name: 'login',
    isPrivate: true,
    id: 'login',
    element: <Login />,
  },
  {
    pathname: '/adminPanel',
    name: 'admin panel',
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
    name: 'Products',
    isPrivate: false,
    id: 'Products',
    element: <Products />,
  },
  {
    pathname: '/product',
    name: 'Product',
    isPrivate: false,
    id: 'Product',
    element: <Product />,
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

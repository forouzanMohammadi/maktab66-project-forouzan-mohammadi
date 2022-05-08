import Home from 'pages/home/Home'
import Basket from 'pages/basket/Basket'
import Checkout from 'pages/checkout/Checkout'
import PanelLogin from 'pages/panelLogin/PanelLogin'
import PanelProduct from 'pages/panelProduct/PanelProduct'
import Payment from 'pages/payment/Payment'
import PaymentFail from 'pages/paymentFail/PaymentFail'
import PaymentSuccess from 'pages/paymentSuccess/PaymentSuccess'
import Products from 'pages/products/Products'
import Product from 'pages/product/Product'

export const RoutesObj =  [
    {pathname: "/", name: "Home Page",isPrivate:false, id: "home", element: <Home/>},
    {pathname: "/basket", name: "basket",isPrivate:false, id: "basket", element: <Basket/>},
    {pathname: "/checkout", name: "checkout",isPrivate:false, id: "checkout", element: <Checkout/>},
    {pathname: "/panelLogin", name: "Panel Login",isPrivate:true, id: "panelLogin", element: <PanelLogin/>},
    {pathname: "/panelProduct", name: "Panel Product",isPrivate:false, id: "panelProduct", element: <PanelProduct/>},
    {pathname: "/payment", name: "Payment",isPrivate:false, id: "payment", element: <Payment/>},
    {pathname: "/paymentFail", name: "Payment Fail",isPrivate:false, id: "paymentFail", element: <PaymentFail/>},
    {pathname: "/paymentSuccess", name: "Payment Success",isPrivate:false, id: "paymentSuccess", element: <PaymentSuccess/>},
    {pathname: "/products", name: "Products",isPrivate:false, id: "Products", element: <Products/>},
    {pathname: "/product", name: "Product",isPrivate:false, id: "Product", element: <Product/>},
];

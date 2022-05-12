import React from "react";
import { Navigate } from "react-router-dom";

const WithProtected = ({Component}) => {

    return function Authentication({...props}){
        localStorage.getItem('token')?
        <Component></Component> : <Navigate to='/panelLogin'/>
    }
    
}
export default WithProtected
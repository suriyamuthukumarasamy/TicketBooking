import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectRoute = ({isAuthenticated,children}) => {
 if(!isAuthenticated){
    return<Navigate to="/" replace/>
 }
    return children;
  
};
export default ProtectRoute;
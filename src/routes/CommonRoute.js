import React from "react";
import { useCookies } from "react-cookie";
import {  Navigate, useLocation } from "react-router-dom";

const CommonRoute = ({ children }) => {
  const [cookies] = useCookies(['SID']);
  const location = useLocation();
  if (cookies.SID) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  
  return children;
};

export default CommonRoute;

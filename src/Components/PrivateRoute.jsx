import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { selectUser } from "../../features/user/userSlice";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const location = useLocation();
  const userData = useSelector(selectUser);

  if (!userData?.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;

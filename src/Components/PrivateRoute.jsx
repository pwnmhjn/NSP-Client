import { Outlet, Navigate, useLocation } from "react-router-dom";
import { selectAccessToken } from "../features/user/userSlice.js";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const location = useLocation();
  const accessToken = useSelector(selectAccessToken);
  if (!accessToken.length) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;

import { selectUser } from "../features/user/userSlice.js";
import useRefreshToken from "../hooks/useRefreshToken.jsx";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const user = useSelector(selectUser);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    !user?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, [user, refresh, path]);

  return isLoading ? <h1>Loading</h1> : <Outlet />; //TODO Loading component
}

export default PersistLogin;

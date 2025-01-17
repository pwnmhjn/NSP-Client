import { selectUser } from "../features/user/userSlice.js";
import useRefreshToken from "../hooks/useRefreshToken.jsx";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const user = useSelector(selectUser);

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
  }, []);

  return isLoading ? <h1>Loading</h1> : <Outlet />; //TODO Loading component
}

export default PersistLogin;

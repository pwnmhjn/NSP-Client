import { selectUser } from "../../features/user/userSlice";
import useRefreshToken from "../../hooks/useRefreshToken";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function PersistLogin() {
  // const isLoading = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const user = useSelector(selectUser); //TODO persist Boolean

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
  }, [user, refresh]);

  return isLoading ? <h1>Loading</h1> : <Outlet />; //TODO Loading component
}

export default PersistLogin;

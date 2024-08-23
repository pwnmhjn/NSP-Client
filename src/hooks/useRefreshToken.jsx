import axios from "axios";
import { setUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const refresh = async () => {
    try {
      const response = await axios.get("/api/v1/users/get-access-token", {
        withCredentials: true,
      });
      const user = response.data?.data?.user;
      const accessToken = response.data?.data?.accessToken;
      dispatch(setUser({ user: user, accessToken: accessToken }));
      return accessToken;
    } catch (error) {
      console.log(error);
      <Navigate to="/" />;
    }
  };
  return refresh;
};

export default useRefreshToken;

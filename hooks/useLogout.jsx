import useAxiosPrivate from "./useAxiosPrivate";

import { useDispatch } from "react-redux";
import { removeUser } from "../features/user/userSlice";

const useLogout = () => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(removeUser({}));
    const response = await axiosPrivate("/users/logout", {
      withCredentials: true,
    });
    console.log(response);
    return response;
  };
  return logout;
};

export default useLogout;

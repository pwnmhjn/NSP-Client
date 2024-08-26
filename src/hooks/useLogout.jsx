import useAxiosPrivate from "./useAxiosPrivate";

import { useDispatch } from "react-redux";
import { removeProfile } from "../features/user/userSlice";

const useLogout = () => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(removeProfile({}));
    const response = await axiosPrivate("/users/logout", {
      withCredentials: true,
    });
    return response;
  };
  return logout;
};

export default useLogout;

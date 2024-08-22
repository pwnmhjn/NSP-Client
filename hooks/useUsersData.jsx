import useAxiosPrivate from "./useAxiosPrivate";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const useUsersData = () => {
  const user = useSelector(selectUser);
  console.log(user);

  const axiosPrivate = useAxiosPrivate();
  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get("/users/get-Users", {
        headers: {
          Authorization: `Bearer ${user && user?.accessToken}`,
        },
        withCredentials: true,
      });
      const res = response?.data.data;
      console.log(res);
      return res;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };

  const data = fetchData();
  return data;
};
export default useUsersData;

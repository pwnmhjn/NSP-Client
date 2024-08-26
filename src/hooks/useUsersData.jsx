import useAxiosPrivate from "./useAxiosPrivate";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../features/user/userSlice";

function useUsersData() {
  const accessToken = useSelector(selectAccessToken);

  const axiosPrivate = useAxiosPrivate();
  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get("/users/get-Users", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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

  return fetchData;
}
export default useUsersData;

import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../features/user/userSlice";

function User() {
  const [users, setUser] = useState(null);
  const accessToken = useSelector(selectAccessToken);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get("/users/get-Users", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        });
        const res = response.data.data;
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [accessToken, axiosPrivate]);

  return (
    <div>
      <ul>
        {users && users.map((user) => <li key={user._id}>{user.fullname}</li>)}
      </ul>
    </div>
  );
}

export default User;

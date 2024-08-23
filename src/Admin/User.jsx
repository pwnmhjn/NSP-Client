import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import useUsersData from "../hooks/useUsersData";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

function Loader() {
  return useUsersData();
}

function User() {
  const [users, setUser] = useState(null);
  // const user = useSelector(selectUser);
  // const axiosPrivate = useAxiosPrivate();

  const data = useLoaderData();
  useEffect(() => {
    setUser(data);
  }, [data]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosPrivate.get("/users/get-Users", {
  //         headers: {
  //           Authorization: `Bearer ${user?.accessToken}`,
  //         },
  //         withCredentials: true,
  //       });
  //       const res = response.data.data;
  //       setUser(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <ul>
        {users && users.map((user) => <li key={user._id}>{user.fullname}</li>)}
      </ul>
    </div>
  );
}

export default User;
export { Loader };

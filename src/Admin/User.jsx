import { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";
import useUsersData from "../hooks/useUsersData";

function Loader() {
  const data = useUsersData();
  return data;
}

function User() {
  const [users, setUser] = useState(null);
  // const user = useSelector(selectUser);
  // const axiosPrivate = useAxiosPrivate();

  const data = useLoaderData();
  console.log(data);

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
        <h1>Pawan</h1>
        {users && users.map((user) => <li key={user._id}>{user.fullname}</li>)}
      </ul>
    </div>
  );
}

export default User;
export { Loader };

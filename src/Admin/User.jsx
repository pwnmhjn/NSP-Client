// import React from "react";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";
// import { selectUser } from "../../features/user/userSlice";
// import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import useUsersData from "../../hooks/useUsersData";

function Loader() {
  const data = useUsersData();
  return data;
}

function User() {
  const [users, setUser] = useState(null);
  const data = useLoaderData();
  useEffect(() => {
    setUser(data);
  }, [data]);
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

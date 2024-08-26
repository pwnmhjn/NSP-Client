import { useLoaderData } from "react-router-dom";

const UsersLoader = async () => {
  const fetchUsers = useLoaderData();

  return await fetchUsers;
};

export default UsersLoader;

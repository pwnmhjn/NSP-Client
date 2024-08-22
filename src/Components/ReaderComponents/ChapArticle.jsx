import { useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.jsx";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice.js";

function ChapArticle() {
  const axiosPrivate = useAxiosPrivate();
  const { accessToken } = useSelector(selectUser);

  useEffect(() => {
    (async () => {
      const res = await axiosPrivate("/chapters/get-chapters", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      // const receivedData = res.data.data;
      console.log(res.data.data);
    })();
  }, []);

  return (
    <>
      <article></article>
    </>
  );
}

export default ChapArticle;

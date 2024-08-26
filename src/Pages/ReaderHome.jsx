import { ChapArticle } from "../Components/ReaderComponents";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate.jsx";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../features/user/userSlice.js";

function ReaderHome() {
  const axiosPrivate = useAxiosPrivate();
  const accessToken = useSelector(selectAccessToken);
  const [chapters, setChapters] = useState("");

  useEffect(() => {
    (async () => {
      const res = await axiosPrivate("/chapters/get-chapters", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      const receivedData = res.data?.data;
      setChapters(receivedData);
    })();
  }, [accessToken, axiosPrivate]);

  return (
    <div className="mx-auto my-2 ">
      <ChapArticle chapters={chapters} />
    </div>
  );
}

export default ReaderHome;

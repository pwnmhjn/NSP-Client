import { ChapArticle } from "../Components/ReaderComponents";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate.jsx";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice.js";
import { useLocation } from "react-router-dom";

function ReaderHome() {
  const axiosPrivate = useAxiosPrivate();
  const { accessToken } = useSelector(selectUser);
  const location = useLocation();
  const [chapters, setChapters] = useState("");

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
      setChapters(res.data.data);
    })();
  }, [location, accessToken, axiosPrivate]);
  return (
    <div>
      <div className="">
        <ChapArticle chapters={chapters} />
      </div>
    </div>
  );
}

export default ReaderHome;

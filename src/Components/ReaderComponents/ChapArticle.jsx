/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate.jsx";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/user/userSlice.js";
// import { useLocation } from "react-router-dom";

function ChapArticle({ chapters }) {
  // const axiosPrivate = useAxiosPrivate();
  // const { accessToken } = useSelector(selectUser);
  // const location = useLocation();
  // const [chapters, setChapters] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const res = await axiosPrivate("/chapters/get-chapters", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //       withCredentials: true,
  //     });
  //     // const receivedData = res.data.data;
  //     console.log(res.data.data);
  //     setChapters(res.data.data);
  //   })();
  // }, [location, accessToken, axiosPrivate]);

  return (
    <>
      <article>
        {chapters &&
          chapters.map((chap, i) => {
            return (
              <div key={i}>
                <h1>{chap.title}</h1>
              </div>
            );
          })}
      </article>
    </>
  );
}

export default ChapArticle;

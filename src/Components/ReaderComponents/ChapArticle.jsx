import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/user/userSlice";

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

import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../features/user/userSlice.js";

function AuthorInfo() {
  const [isLoading, setIsLoading] = useState(false);
  const [authorInfo, setAuthorInfo] = useState();
  const accessToken = useSelector(selectAccessToken);
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const res = await axiosPrivate.get(`/authors/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      const receivedData = res.data.data;
      setAuthorInfo(receivedData);
    })();
    setIsLoading(false);
  }, [isLoading, authorInfo, id, accessToken, axiosPrivate]);

  return (
    <>
      <div className="w-full">
        <div className="h-[600px] rounded-xl mt-14 w-[400px] bg-slate-600">
          <div className="items-center">
            <img
              className="h-56 mt-3 w-56 rounded-full"
              src={authorInfo?.avatar}
              alt=""
            />
          </div>
          <div className="font-bold font-mono mt-5">
            <h1>Name:- {authorInfo?.name}</h1>
            <h1>Popularity:- {authorInfo?.popularity}%</h1>
            <h1>
              Since:- {authorInfo && format(authorInfo.createdAt, "dd-MM-yyyy")}
            </h1>
            <h1>Genre:- {authorInfo?.genre.map((e) => e)}</h1>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default AuthorInfo;

import { Outlet } from "react-router-dom";
import Header from "../Components/ReaderComponents/Layouts/Header";
import Sidebar from "../Components/ReaderComponents/Layouts/Sidebar";
import Footer from "../Components/ReaderComponents/Layouts/Footer";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { selectAccessToken } from "../features/user/userSlice";
import { useEffect } from "react";
import { setChapters } from "../features/chapters/chapterSlice";
import { useDispatch } from "react-redux";

function ReaderLayout() {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const noOutLet = [
    "/reader/profile",
    "/reader/profile/edit",
    "/reader/profile/avatar-edit",
    "/reader/profile/cover-edit",
  ];
  const shouldRenderOutlet = noOutLet.includes(pathname);
  const axiosPrivate = useAxiosPrivate();
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    (async () => {
      const res = await axiosPrivate("/chapters/get-chapters", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      const receivedData = res.data?.data;
      // setChapters(receivedData);
      dispatch(setChapters(receivedData));
    })();
  }, [accessToken, axiosPrivate, dispatch]);

  return (
    <div className="flex  bg-slate-300 flex-col">
      <Header />
      <div className="h-full mt-24 flex">
        <Sidebar />
        <div className=" mx-auto ">
          <Outlet /*context={chapters}*/ />
        </div>
        {shouldRenderOutlet ? null : (
          <div className="w-[300px]  lg:block hidden mt-6 mr-4 ">
            <div className="mb-2  h-72 bg-slate-500 min-w-[150px]   w-[300px]  my-4 ml-2  font-mono text-lg  justify-center place-items-center px-2  border-4 font-bold text-center border-b-index-slate700   border-r-index-slate700 border-t-index-slate200 border-l-index-slate200 "></div>
            <div className=" h-80  bg-slate-800  min-w-[150px]  w-[300px]  my-4 ml-2  font-mono text-lg  justify-center place-items-center  px-2  border-4 font-bold text-center border-b-index-slate700   border-r-index-slate700 border-t-index-slate200 border-l-index-slate200 "></div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ReaderLayout;

import { Outlet } from "react-router-dom";
import Header from "../Components/ReaderComponents/Layouts/Header";
import Sidebar from "../Components/ReaderComponents/Layouts/Sidebar";
import Footer from "../Components/ReaderComponents/Layouts/Footer";
import { useLocation } from "react-router-dom";

function ReaderLayout() {
  const location = useLocation();
  console.log(location.pathname);
  const pathname = location.pathname;
  const noOutLet = [
    "/reader/profile",
    "/reader/profile/edit",
    "/reader/profile/avatar-edit",
    "/reader/profile/cover-edit",
  ];

  const shouldRenderOutlet = noOutLet.includes(pathname);
  return (
    <div className="flex  bg-slate-300 flex-col">
      <Header />
      <div className="h-full mt-24 flex">
        <Sidebar />
        <div className=" mx-auto ">
          <Outlet />
        </div>
        {shouldRenderOutlet ? null : (
          <div className="w-[350px] mt-6 mr-2   ">
            <div className="mb-2 rounded-lg h-72 bg-slate-500"></div>
            <div className=" h-80 rounded-lg bg-slate-800 "></div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ReaderLayout;

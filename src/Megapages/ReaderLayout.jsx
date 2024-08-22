import { Outlet } from "react-router-dom";
import Header from "../Components/ReaderComponents/Layouts/Header";
import Sidebar from "../Components/ReaderComponents/Layouts/Sidebar";
import Footer from "../Components/ReaderComponents/Layouts/Footer";

function ReaderLayout() {
  return (
    <div className="flex  bg-slate-300 flex-col">
      <Header />
      <div className="h-full mt-24 flex">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default ReaderLayout;
